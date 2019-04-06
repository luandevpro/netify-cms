import React from 'react'
import Layout from "../components/layout";
import { graphql } from "gatsby";

const PostLayout = ({data}) => console.log(data) || (
   <Layout>
      <div>{data.markdownRemark.frontmatter.title}</div>
      <div dangerouslySetInnerHTML={{
         __html: data.markdownRemark.html
      }}/>
   </Layout>
)

export const query = graphql`
  query BlogPostByPath($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        slug
        title
      }
    }
  }
`

export default  PostLayout