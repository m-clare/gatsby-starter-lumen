import React from "react";

import { graphql } from "gatsby";

import { Layout } from "@/components/Layout";
import { Page } from "@/components/Page";
import { Sidebar } from "@/components/Sidebar";
import { useSiteMetadata } from "@/hooks";
import { Node } from "@/types";
import { MDXProvider } from "@mdx-js/react";


interface Props {
  data: React.ReactNode;
  children: React.ReactNode;
}

const MdxPageTemplate: React.FC<Props> = ({ data, children }: Props) => {

  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { frontmatter } = data.mdx;
  const { title, description = "" } = frontmatter;
  const metaDescription = description || siteSubtitle;

  return (
    <Layout
      title={`${title} - ${siteTitle}`}
      description={metaDescription}
    >
      <Sidebar />
      <Page title={title}>
        <MDXProvider>{children}</MDXProvider>
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
        date
      }
    }
  }
`;

export default MdxPageTemplate;
