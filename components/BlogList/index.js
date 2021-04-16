import { useEffect, useRef } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Link from "next/link";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import getDate from "../../lib/getDate";
import path from "../../lib/path";

import { Container } from "../../styles/components/blogStyle";
import Rellax from 'rellax';

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
  const $articles = useRef([]);

  useEffect(() => {
    if (window.innerWidth > 768) {
      new Rellax(".project__thumbnail img", {
        center: true
      });
    }
  }, []);
 
  useEffect(() => {
    $articles.current.forEach($article => {
      const $title = $article.querySelector('.project__title');
      const $year = $article.querySelector('.project__year');

      gsap.timeline({
        scrollTrigger: {
          trigger: $article,
          start: "top 80%",
        }
      })
      .to($title, {
        autoAlpha: 1, 
        translateY: 0,
      }).to($year, {
        autoAlpha: 1, 
        translateY: 0,
        delay: -.1
      });
    });
  });

  if (error) return "Error loading blog articles";
  if (loading) return <h2>Loading...</h2>;


  if (data.blogs && data.blogs.length) {
    const searchQuery = [...data.blogs.filter((blog) => 
      blog.title.toLowerCase().includes(props.search.trim())
    )];

    if (searchQuery.length !== 0) {
      return (
        <Container className="main__container">
          <div className="container">
            <header className="title">
              <h1>
                <span className="title--collabs">Blogs</span>
              </h1>
            </header>
          </div>
          {
            searchQuery.map((blog, i) => (
              <div className="project__wrap" key={ blog.id } ref={el => $articles.current[i] = el}>
                <Link href={`/blog/${blog.id}/`}>
                  <a className="cover--link"></a>
                </Link>
                <article className="project" key={ blog.id }>
                  <header className="project__header">
                    <strong className="project__year">{ getDate(blog.createdAt) }</strong>
                    <h2 className="project__title">{ blog.title }</h2>
                  </header>
                  <div className="project__thumbnail">
                    <img data-rellax-speed="-1" data-rellax-percentage="0.5" alt={blog.title} src={path(blog.thumbnail.url)} />
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
