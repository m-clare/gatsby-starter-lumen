import { graphql, useStaticQuery } from "gatsby";

interface CategoriesQueryResult {
  allMdx: {
    group: Array<{
      fieldValue: string;
      totalCount: number;
    }>;
  };
}

const useCategoriesList = () => {
  const { allMdx } = useStaticQuery<CategoriesQueryResult>(
    graphql`
      query CategoriesListQuery {
        allMdx(
          filter: {
            frontmatter: { template: { eq: "post" }, draft: { ne: true } }
          }
        ) {
          group(field: frontmatter___category) {
            fieldValue
            totalCount
          }
        }
      }
    `,
  );

  return allMdx.group ?? [];
};

export default useCategoriesList;
