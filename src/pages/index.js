import React from 'react'

import Layout from '../components/Layout'
import YouTubeEmbed from '../components/YouTubeEmbed'
import SEO from '../components/SEO'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `100%`, marginBottom: `1.45rem` }}>
      <YouTubeEmbed />
    </div>
  </Layout>
)

export default IndexPage
