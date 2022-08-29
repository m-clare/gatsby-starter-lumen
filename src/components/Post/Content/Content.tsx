import React from "react";

import { MDXRenderer } from "gatsby-plugin-mdx";

import * as styles from "./Content.module.scss";

interface Props {
  title: string;
  body: string;
}

const Content: React.FC<Props> = ({ body, title }: Props) => (
  <div className={styles.content}>
    <h1 className={styles.title}>{title}</h1>
    <div className={styles.body}>
      <MDXRenderer>{body}</MDXRenderer>
    </div>
  </div>
);

export default Content;
