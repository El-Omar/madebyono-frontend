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
      <div className="search">
        <input type="text" onChange={({ target }) => 
          setTimeout(setQuery(q => q = target.value.toLocaleLowerCase()), 250)} 
          value={query} />
      </div>
      <BlogList search={query} />
    </>
  );
};

export default Blog;