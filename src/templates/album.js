import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import Player from '../components/Player'

import './album.css'

const Album = ({ pageContext, data }) => {
  const { id, name, year, tracks } = pageContext

  return (
    <Layout>
      <div className="album__container">
        <div className="album__meta-container">
          <h1>{name}</h1>
          <div className="album__art-container">
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
          </div>
        </div>
        <div className="album__player-container">
          <Player tracks={tracks} />
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
