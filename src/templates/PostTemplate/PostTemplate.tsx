import React from "react";

import { MDXProvider } from "@mdx-js/react";
import { graphql } from "gatsby";

import { Layout } from "@/components/Layout";
import { Post } from "@/components/Post";
import { useSiteMetadata } from "@/hooks";
import { Node } from "@/types";

interface Props {
  data: Node;
  children: React.ReactNode;
}

const PostTemplate: React.FC<Props> = ({ data, children }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { frontmatter } = data.mdx;
  const { title, description = "", socialImage } = frontmatter;
  const metaDescription = description || siteSubtitle;

  return (
    <Layout
      title={`${title} - ${siteTitle}`}
      description={metaDescription}
      socialImage={socialImage}
    >
      <Post post={data.mdx}>
        <MDXProvider>{children}</MDXProvider>
      </Post>
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        date
        description
        tags
        title
        socialImage
      }
    }
  }
`;

export default PostTemplate;
