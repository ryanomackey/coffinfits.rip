import React from 'react'

import Layout from '../components/Layout';
import HeroImage from '../components/HeroImage'
import SEO from '../components/SEO'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `100%`, marginBottom: `1.45rem` }}>
      <HeroImage />
    </div>
  </Layout>
)

export default IndexPage
