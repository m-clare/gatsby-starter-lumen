import { CreatePagesArgs } from "gatsby";

interface CategoriesQueryResult {
  allMdx: {
    group: Array<{
      fieldValue: string;
      totalCount: number;
    }>;
  };
}

const categoriesQuery = async (graphql: CreatePagesArgs["graphql"]) => {
  const result = await graphql<CategoriesQueryResult>(`
    {
      allMdx(
        filter: {
          frontmatter: { template: { eq: "post" }, draft: { ne: true } }
        }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        group(field: frontmatter___category) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  return result?.data?.allMdx?.group ?? [];
};

export default categoriesQuery;
