import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

import './music.css'

const Music = ({ data }) => {
  return (
    <Layout>
      <SEO title="Music" />
      <div className="music">
        {data.allAlbum.edges.map(album => {
          const albumArt = data.allFile.edges.find(
            file => file.node.parent?.id === album.node.id
          )

          return (
            <Link
              key={album.node.id}
              to={`/${album.node.path}`}
              className="music__link"
            >
              <Img fluid={albumArt.node.placeholderImage.fluid} />
              <span className="music__link-name">{album.node.name}</span>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allAlbum {
      edges {
        node {
          id
          name
          path
        }
      }
    }
    allFile {
      edges {
        node {
          parent {
            id
          }
          placeholderImage: childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Music
