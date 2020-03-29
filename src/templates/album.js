import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Player from '../components/Player'

import './album.css'

const Album = ({ pageContext, data }) => {
  const { id, name, year, tracks } = pageContext

  return (
    <>
      <div className="album__page-container">
        <h1>{name}</h1>
        <div className="album__container">
          <div className="album__art"> 
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
          </div>
          <div className="album__audio-player">
            <Player tracks={tracks} />
          </div>
        </div>
      </div>
    </>
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
