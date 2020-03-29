import React from 'react'

import HeroImage from '../components/HeroImage'
import SEO from '../components/SEO'

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <div style={{ maxWidth: `100%`, marginBottom: `1.45rem` }}>
      <HeroImage />
    </div>
  </>
)

export default IndexPage
