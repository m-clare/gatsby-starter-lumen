import React from "react";

import { MDXProvider } from "@mdx-js/react";
import { graphql } from "gatsby";

import { Layout } from "@/components/Layout";
import { Page } from "@/components/Page";
import { Sidebar } from "@/components/Sidebar";
import { useSiteMetadata } from "@/hooks";
import { Node } from "@/types";

interface Props {
  data: Node;
  children: React.ReactNode;
}

const PageTemplate: React.FC<Props> = ({ data, children }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { frontmatter } = data.mdx;
  const { title, description = "" } = frontmatter;
  const metaDescription = description || siteSubtitle;

  return (
    <Layout title={`${title} - ${siteTitle}`} description={metaDescription}>
      <Sidebar />
      <Page title={title}>
        <MDXProvider>{children}</MDXProvider>
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
        date
        description
        socialImage
      }
    }
  }
`;

export default PageTemplate;
