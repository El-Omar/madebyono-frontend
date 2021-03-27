import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import Link from "next/link";
import Image from "next/image";

import getDate from "../../lib/getDate";
import path from "../../lib/path";

import { Container } from "../../styles/components/blogStyle";

const QUERY = gql`
  {
    blogs(sort: "createdAt:DESC") {
      id
      title
      createdAt
      thumbnail {
        url
      }
      text
      button
    }
  }
`;

const BlogList = props => {
  const { loading, error, data } = useQuery(QUERY);

  if (error) return "Error loading blog articles";
  if (loading) return <h2>Loading...</h2>;

  if (data.blogs && data.blogs.length) {
    const searchQuery = [...data.blogs.filter((blog) => 
      blog.title.toLowerCase().includes(props.search.trim())
    )];


    if (searchQuery.length !== 0) {
      return (
        <Container className="main__container">
          <header className="title">
            <h1>
              <span className="title--collabs">Blogs</span>
              {/* <span className="title--projects"> &amp;<br />Projects</span> */}
            </h1>
          </header>
          {
            searchQuery.map(blog => (
              <div className="project__wrap" key={ blog.id }>
                <Link href={`/blog/${blog.id}/`}>
                  <a className="cover--link"></a>
                </Link>
                <article className="project" key={ blog.id }>
                  <header className="project__header">
                    <strong className="project__year">{ getDate(blog.createdAt) }</strong>
                    <h2 className="project__title">{ blog.title }</h2>
                  </header>
                  <div className="project__thumbnail">
                    <img src={path(blog.thumbnail.url)} />
                  </div>
                </article>
              </div>
            ))
          }
        </Container>
      );
    } else {
      return <h2>No blog articles</h2>
    }
  }

  return <h5>Add blog items</h5>
};

export default BlogList;
