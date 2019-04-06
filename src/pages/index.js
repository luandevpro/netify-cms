import React from 'react'
import { Link , graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({data}) =>  (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>v3</h1>
    <ol>
       {
          data.allMarkdownRemark.edges.map((node) => (
             <li key={node.node.frontmatter.slug}>
                <Link to={`/${node.node.frontmatter.slug}`}>{node.node.frontmatter.title}</Link>
                <p><span>{node.node.frontmatter.date}</span> {node.node.excerpt}</p>
             </li>
          ))
       }
    </ol>
  </Layout>
)

export default IndexPage

export const query = graphql`
   query AllPosts {
      allMarkdownRemark {
         edges {
            node {
               html
               excerpt(pruneLength: 200)
               frontmatter {
                  title
                  slug
                  date
               }
            }
         }
      }
   }
`