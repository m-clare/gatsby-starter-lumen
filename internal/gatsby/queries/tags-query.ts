import { CreatePagesArgs } from "gatsby";

interface TagsQueryResult {
  allMdx: {
    group: Array<{
      fieldValue: string;
      totalCount: number;
    }>;
  };
}

const tagsQuery = async (graphql: CreatePagesArgs["graphql"]) => {
  const result = await graphql<TagsQueryResult>(`
    {
      allMdx(
        filter: {
          frontmatter: { template: { eq: "post" }, draft: { ne: true } }
        }
      ) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  return result?.data?.allMdx?.group || [];
};

export default tagsQuery;
