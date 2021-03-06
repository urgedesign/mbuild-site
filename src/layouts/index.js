import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import '../../node_modules/normalize-css/normalize.css'
import './index.css'
import '../_redirects'

const Layout = ({ children, data }) => (
  <div className="wrapper">
    <Helmet
      script={[
        {
          src:
            'https://cdn.curator.io/published/5b300f7b-494b-4c8d-af08-8eed7064c3f6.js',
          async: true,
          defer: true,
        },
      ]}
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
    <div className="content">{children()}</div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
