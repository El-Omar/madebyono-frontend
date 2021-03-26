import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Link from "next/link";

import { Styles } from "../../styles/components/productDetailStyle";

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

  if (error) return "Error Loading Dishes";
  if (loading) return <h1>Loading ...</h1>;

  if (data.blog) {
    const { blog } = data;
    
    return (
      <Styles>
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
              <img src={`${process.env.NEXT_PUBLIC_API_URL}${blog.thumbnail.url}`} />
            </div>
            <div className="col-row">
              <div className="w-100">
                <p className="description">
                  { blog.text }
                </p>
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