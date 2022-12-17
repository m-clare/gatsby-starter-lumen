import React from "react";

import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";

import { VisualLayout } from "@/components/VisualLayout";
import { useSiteMetadata } from "@/hooks";
import { Node } from "@/types";

interface Props {
  data: node;
  children: React.ReactNode;
}

const DataVizTemplate: React.FC<Props> = ({ data, children }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { frontmatter } = data.mdx;
  const { title, description = "" } = frontmatter;
  const metaDescription = description || siteSubtitle;

  return (
    <VisualLayout
      title={`${title} - ${siteTitle}`}
      description={metaDescription}
    >
      <MDXProvider>{children}</MDXProvider>
    </VisualLayout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      fields {
        slug
      }
      frontmatter {
        date
        description
        tags
        title
      }
    }
  }
`;

export default DataVizTemplate;
