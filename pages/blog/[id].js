import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Link from "next/link";
import Head from "next/head";
import marked from "marked";

import { Styles } from "../../styles/components/productDetailStyle";
import path from "../../lib/path";

const GET_BLOG_DETAIL = gql`
  query($id: ID!) {
    blog(id: $id) {
      id
      title
      createdAt
      slogan
      thumbnail {
        url
      }
      text
      button  
    }
  }
`;

const BlogDetail = () => {
  const router = useRouter();
  const { id } = router.query; 
  const { loading, error, data } = useQuery(GET_BLOG_DETAIL, {
    variables: { id: id },
  });

  if (error) return (
    <div className="container">
      <div className="col-row">
        <div className="w-50">
          <span className="no-results-found">Failed to load</span>
        </div>
      </div>
    </div>
  );

  if (loading) return (
    <div className="container">
      <div className="col-row">
        <div className="w-50">
          <div className="loading-box"></div>
        </div>
      </div>
    </div>
  );

  if (data.blog) {
    const { blog } = data;
    
    return (
      <Styles>
        <Head>
          <title>{blog.title} - Madebyono</title>
        </Head>
        <div className="main__container">
          <div className="container">
            <h1 className="page__heading text-center">{blog.title}</h1>
            <strong className="page__subtitle">{ blog.slogan }</strong>
            <Link href="/blog">
              <a className="back-to-overview">
                <i className="icon icon--back"></i>
                <strong>Back to blog</strong>
              </a>
            </Link>
            <div className="thumbnail thumbnail--9by16">
              <img src={path(blog.thumbnail.url)} />
            </div>
            <div className="col-row">
              <div className="w-100">
                { blog.text && <div className="description">
                  <div className="marked" dangerouslySetInnerHTML={{ __html: marked(blog.text) }}></div>
                </div> }
              </div>
            </div>
          </div>
        </div>
      </Styles>
    );
  }
  return <h1>Blog</h1>;

};

export default BlogDetail;