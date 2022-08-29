import { CreatePagesArgs } from "gatsby";

import * as types from "../types";

export interface PostsQueryResult {
  allMdx: {
    edges?: Array<types.Edge>;
  };
}

const postsQuery = async (graphql: CreatePagesArgs["graphql"]) => {
  const result = await graphql<PostsQueryResult>(`
    {
      allMdx(filter: { frontmatter: { draft: { ne: true } } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return result?.data?.allMdx;
};

export default postsQuery;
