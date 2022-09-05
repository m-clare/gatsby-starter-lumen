import React from "react";

import * as styles from "./Content.module.scss";

interface Props {
  title: string;
  children: React.ReactNode;
}

const Content: React.FC<Props> = ({ title, children }: Props) => (
  <div className={styles.content}>
    <h1 className={styles.title}>{title}</h1>
    <div className={styles.body}>{children}</div>
  </div>
);

export default Content;
