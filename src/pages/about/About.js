import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import './About.css'

import Layout from '../../components/Layout'
import SEO from '../../components/SEO'

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "southern-heights.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 672) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="About" />
      <div className="about">
        <div className="about__image-container">
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
          <p className="about__image-caption">
            From left: Lindsay Reyna, Patrick Friend, Chris Turpen, Ryan Mackey
          </p>
        </div>
        <div className="about__blurb-container">
          <p className="about__blurb">
            The Coffin Fits are a vaguely psychedelic sort of diet-goth™ garage
            rock band based in Austin, TX.
          </p>
          <p className="about__blurb">
            Formed by Chris Turpen as a solo project in 2015, several albums
            were released before he realized it would be way more fun with
            friends involved.
          </p>
          <p className="about__blurb">
            Once Lindsay Reyna and Patrick Friend relocated to from Atlanta to
            Austin and Colorado transplant Ryan Mackey joined the band, The
            Coffin Fits were properly born.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About
