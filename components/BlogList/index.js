import { useEffect, useRef } from "react";
import Link from "next/link";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import getDate from "../../lib/getDate";
import path from "../../lib/path";

const BlogList = ({ articles }) => {
  const $articles = useRef([]);

  useEffect(() => {
    $articles.current.forEach($article => {
      const $img = $article.querySelector('.project__thumbnail img');
      const $title = $article.querySelector('.project__title');
      const $year = $article.querySelector('.project__year');

      gsap.timeline({
        scrollTrigger: {
          trigger: $img,
          scrub: true,
        }
      })
      .to($img, {
        translateY: '20%',
      });

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

  return ( 
    <>
      {
        articles.map((blog, i) => (
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
    </>
  );
};

export default BlogList;
