require('dotenv').config({path: `.env.${process.env.NODE_ENV}`});

const { initializeApp } = require('firebase/app');
const { getStorage, ref, listAll, getDownloadURL } = require('firebase/storage');
const axios = require('axios');
const musicMetadata = require('music-metadata');
const path = require('path');
const { createFileNodeFromBuffer } = require(`gatsby-source-filesystem`);

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "coffin-fits.firebaseapp.com",
  projectId: "coffin-fits",
  storageBucket: "coffin-fits.appspot.com",
  messagingSenderId: "277313431426",
  appId: "1:277313431426:web:909d06b931428037ae519b",
  measurementId: "G-3GMN5LZMND"
};

const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(firebaseApp);

// Create a reference under which you want to list
const listRef = ref(storage);

exports.sourceNodes = async ({  actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  // Get all buckets (albums)
  const { prefixes: albumRefs } = await listAll(listRef);

  // Map through each bucket and get the songs for each one
  const allSongRefPromises = albumRefs.map(async albumRef => {
    const { items: songRefs} = await listAll(albumRef);

    return songRefs;
  });
  const allSongRefs = await Promise.all(allSongRefPromises);

  // Flatten the buckets and get all the song URLs
  const allSongUrlPromises = allSongRefs.flat().map(songRef => getDownloadURL(songRef));
  const allSongUrls = await Promise.all(allSongUrlPromises);

  const allSongsWithMetadataPromises = allSongUrls.map(async songUrl => {
    const response = await axios.get(songUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data, "utf-8");
    const { common } = await musicMetadata.parseBuffer(buffer, 'audio/mpeg');

    return {
      url: songUrl,
      ...common,
    };
  });
  const allSongsWithMetadata = await Promise.all(allSongsWithMetadataPromises);

  const albums = allSongsWithMetadata.reduce((albums, song) => {
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
