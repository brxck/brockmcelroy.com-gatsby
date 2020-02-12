import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Navigation from './Navigation'
import Social from './Social'
import { StaticQuery, graphql } from 'gatsby'
import 'normalize.css'
import '../styles/global.scss'
import '../styles/typography.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: `Brock McElroy is a full stack web developer finding robust, accessible solutions.`,
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Navigation />
        <div>
          <div>{children}</div>
          <div />
        </div>
        <Social />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
