import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import BlogList from "../../components/BlogList";
import Head from "next/head";

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

const Blog = () => {
  const { loading, error, data } = useQuery(QUERY);

  return (
    <Container className="main__container">
      <Head>
        <title>Blog - Madebyono</title>
      </Head>
      <div className="container">
        <header className="title">
          <h1>
            <span className="title--collabs">Blogs</span>
          </h1>
        </header>
      </div>

      {error && <div className="w-100">
        <span className="no-results-found">Failed to load the shop</span>
      </div>}

      {loading && <div className="container"><div className="col-row">
        <div className="w-50">
          <div className="loading-box"></div>
        </div>
        <div className="w-50">
          <div className="loading-box"></div>
        </div>
      </div></div>}

      {!error && !loading && <>
        <BlogList articles={data.blogs} />
      </>}
      
    </Container>
  );
};

export default Blog;