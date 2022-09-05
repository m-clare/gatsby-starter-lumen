import React from "react";

import { Link } from "gatsby";

import type { Node } from "@/types";

import { Author } from "./Author";
import { Content } from "./Content";
import { Meta } from "./Meta";
import { Tags } from "./Tags";

import * as styles from "./Post.module.scss";

interface Props {
  post: Node;
  children: React.ReactNode;
}

const Post: React.FC<Props> = ({ post, children }: Props) => {
  const { tagSlugs } = post.fields;
  const { tags, title, date } = post.frontmatter;

  return (
    <div className={styles.post}>
      <Link className={styles.button} to="/">
        All Articles
      </Link>

      <div className={styles.content}>
        <Content title={title}>{children}</Content>
      </div>

      <div className={styles.footer}>
        <Meta date={date} />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <Author />
      </div>
    </div>
  );
};

export default Post;
