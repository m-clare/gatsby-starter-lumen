import { CreatePagesArgs } from "gatsby";

import * as types from "../types";

export interface PagesQueryResult {
  allMdx: {
    edges?: Array<types.Edge>;
  };
}

const mdxPagesQuery = async (graphql: CreatePagesArgs["graphql"]) => {
  const result = await graphql<PagesQueryResult>(`
    {
      allMdx(filter: { frontmatter: { draft: { ne: true } } }) {
        edges {
          node {
            frontmatter {
              template
              slug
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `);
  return result?.data?.allMdx?.edges ?? [];
};

export default mdxPagesQuery;
