import React, { FC } from "react";

// css import
import styles from "./styles/Blog.module.css";
import Title from "../atoms/Title";


const Blog: React.FC = () => {
  return (
    <div className={styles.blog}>
            <Title id={0} idtext="blog" text="Blog" align="center" />
            blog area
            横スクロール実装
    </div>
  )
}

export default Blog;