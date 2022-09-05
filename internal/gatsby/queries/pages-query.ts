import { CreatePagesArgs } from "gatsby";

import * as types from "../types";

export interface PagesQueryResult {
  allMdx: {
    edges?: Array<types.Edge>;
  };
}

const pagesQuery = async (graphql: CreatePagesArgs["graphql"]) => {
  const result = await graphql<PagesQueryResult>(`
    {
      allMdx(filter: { frontmatter: { draft: { ne: true } } }) {
        edges {
          node {
            frontmatter {
              template
            }
            internal {
              contentFilePath
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return result?.data?.allMdx?.edges ?? [];
};

export default pagesQuery;
