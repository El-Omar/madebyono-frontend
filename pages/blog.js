import { useState, useEffect } from "react";
import BlogList from "../components/BlogList";
import animation from "../lib/blog";
import Head from "next/head";

const Blog = () => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    animation();
  });

  return (
    <>
      <Head>
        <title>Blog - Madebyono</title>
      </Head>
      <BlogList search={query} />
    </>
  );
};

export default Blog;