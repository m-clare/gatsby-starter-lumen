import { graphql, useStaticQuery } from "gatsby";

interface TagsQueryResult {
  allMdx: {
    group: Array<{
      fieldValue: string;
      totalCount: number;
    }>;
  };
}

const useTagsList = () => {
  const { allMdx } = useStaticQuery<TagsQueryResult>(
    graphql`
      query TagsListQuery {
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
    `,
  );

  return allMdx.group || [];
};

export default useTagsList;
