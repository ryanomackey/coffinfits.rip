import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import Tracks from '../components/Tracks'

import './album.css'

const Album = ({ pageContext, data }) => {
  const { name, tracks } = pageContext

  return (
    <Layout>
      <div className="album__page-container">
        <h1>{name}</h1>
        <div className="album__container">
          <div className="album__art">
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
          </div>
          <div className="album__audio-player">
            <Tracks album={name} tracks={tracks.map(track => ({ ...track, album: name, art: data.placeholderImage.childImageSharp.fluid }))} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query AlbumArt($id: String) {
    placeholderImage: file(parent: { id: { eq: $id } }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Album
