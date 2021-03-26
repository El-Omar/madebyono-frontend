import { useState, useEffect } from "react";
import BlogList from "../components/BlogList";
import animation from "../lib/blog";

const Blog = () => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    animation();
  });

  return (
    <>
      <BlogList search={query} />
    </>
  );
};

export default Blog;