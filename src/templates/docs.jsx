import React from "react";
import { graphql } from "gatsby"
import renderAst from "../utils/renderAst";
import "./docs.module.scss";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <h1 className="title">{post.frontmatter.title}</h1>
      <p className="lead">{post.frontmatter.description}</p>
      {renderAst(post.htmlAst)}
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
        description
      }
    }
  }
`;