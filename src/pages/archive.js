import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostPreview from '../components/PostPreview'
import CardGrid from '../components/CardGrid'

const Archive = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <header>
        <h1 style={{ textAlign: 'center' }}>archive</h1>
      </header>
      <main>
        <CardGrid>
          {posts.map(({ node }) => (
            <PostPreview key={node.id} post={node} />
          ))}
        </CardGrid>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            tags
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default Archive