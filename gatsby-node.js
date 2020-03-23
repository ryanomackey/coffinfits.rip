/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const ibmCosSdk = require('ibm-cos-sdk')
const mm = require('music-metadata')
const path = require('path')
const { createFileNodeFromBuffer } = require(`gatsby-source-filesystem`)

const BUCKET_NAME = 'coffin-fits-songs'
const ENDPOINT = 's3.us-east.cloud-object-storage.appdomain.cloud'

const config = {
  endpoint: ENDPOINT,
  apiKeyId: process.env.S3_API_KEY,
  ibmAuthEndpoint: 'https://iam.cloud.ibm.com/identity/token',
  serviceInstanceId:
    'crn:v1:bluemix:public:cloud-object-storage:global:a/0b6a9a5fd2e7f13ecea70ae2308a1e34:165abf94-800a-46b8-90a7-b492b6f43bfc::',
}

const cos = new ibmCosSdk.S3(config)

const handleCosError = e => {
  console.error(`ERROR: ${e.code} - ${e.message}\n`)
}

const getBucketContents = bucketName => {
  return cos
    .listObjects({ Bucket: BUCKET_NAME })
    .promise()
    .then(data => data.Contents)
    .catch(handleCosError)
}

const parseBody = buffer =>
  mm
    .parseBuffer(buffer, 'audio/mpeg')
    .then(data => data.common)
    .catch(err => console.error(err))

const getItem = itemName => {
  return cos
    .getObject({ Bucket: BUCKET_NAME, Key: itemName })
    .promise()
    .then(async ({ Body }) => ({
      url: `https://${BUCKET_NAME}.${ENDPOINT}/${itemName}`,
      ...(await parseBody(Body)),
    }))
    .catch(handleCosError)
}

const getItems = contents =>
  Promise.all(contents.map(async entry => await getItem(entry.Key)))

const getSongs = async () => {
  const contents = await getBucketContents()
  const items = await getItems(contents)

  return items
}

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
  getCache,
  store,
  cache,
}) => {
  const { createNode, createParentChildLink } = actions

  const songs = await getSongs()
  const albums = songs.reduce((albums, song) => {
    const newEntry = {
      name: song.album,
      year: song.year,
      albumArt: song.picture[0].data,
      tracks: [],
    }

    const track = {
      url: song.url,
      title: song.title,
    }

    const existingEntry = albums.find(element => element.name === newEntry.name)
    const existingEntryIndex = albums.findIndex(
      element => element.name === newEntry.name
    )

    if (existingEntry) {
      albums[existingEntryIndex].tracks[song.track.no - 1] = track

      return albums
    }

    newEntry.tracks[song.track.no - 1] = track

    return [...albums, newEntry]
  }, [])

  albums.forEach(async album => {
    const { name, year, albumArt, tracks } = album
    const id = createNodeId(`coffin-fits-songs--${album.name}`)

    createNode({
      id,
      name,
      year,
      tracks,
      path: `music/${name.toLowerCase().replace(/\s/g, '-')}`,
      parent: null,
      children: [],
      internal: {
        type: `Album`,
        contentDigest: createContentDigest(album),
        content: JSON.stringify(albumArt),
      },
    })
  })

  return
}

exports.onCreateNode = ({ node, actions, store, cache, createNodeId }) => {
  if (node.internal.type === 'Album') {
    const { createNode } = actions
    const { id, name } = node

    const buffer = Buffer.from(JSON.parse(node.internal.content).data)

    createFileNodeFromBuffer({
      buffer,
      parentNodeId: id,
      name,
      store,
      cache,
      createNodeId,
      createNode,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const albumPageTemplate = path.resolve('src/templates/album.js')

  return graphql(`
    query getAlbums {
      allAlbum {
        edges {
          node {
            id
            name
            year
            tracks {
              title
              url
            }
            path
          }
        }
      }
    }
  `).then(result => {
    result.data.allAlbum.edges.forEach(edge => {
      const { id, name, year, tracks, path } = edge.node

      createPage({
        path,
        component: albumPageTemplate,
        context: {
          id,
          name,
          year,
          tracks,
        },
      })
    })
  })
}
