import { useEffect } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Link from "next/link";

import { Styles } from '../../styles/components/projectDetailsStyle';
import carousel from '../../lib/carousel';

const GET_PROJECT_DETAIL = gql`
  query($slug: String!) {
    projects(where: {slug: $slug}) {
      id
      title
      slug
      thumbnail {
        url
      }
      images {
        url
      }
      button
      categories {
        category
      }
    	text
    }
  }
`;

const ProjectDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { loading, error, data } = useQuery(GET_PROJECT_DETAIL, {
    variables: { slug: slug },
  });

  if (!loading && !data?.projects?.length) {
    router.push("/projects");
  }
 
  useEffect(() => {
    carousel();
  },);

  if (error) return <h1>Error loading project detail</h1>
  if (loading) return <h1>Loading</h1>
  
  const [project] = data.projects;


  if (project) {
    return (
     <Styles>
        <article className="project__images">
          <div className="slider__wrap">
          <div className={`slide slide-active`} data-id="1">
            <div className="slide__img" style={{ backgroundImage: "url(" + process.env.NEXT_PUBLIC_API_URL + project.thumbnail.url + ")" }}></div>
          </div>
          { project.images.map((img, i) => (
            <div key={i} className={`slide`} data-id={i + 2}>
              <div className="slide__img" style={{ backgroundImage: "url(" + process.env.NEXT_PUBLIC_API_URL + img.url + ")" }}></div>
            </div>
          )) }

            <div className="slider__controllers">
              <strong data-action="prev" className="slider__btn slider__controllers__next"></strong>
              <strong data-action="next" className="slider__btn slider__controllers__previous"></strong>
            </div>
          </div>

          <div className="slider__dots"></div>
        </article>

        <article className="project__content">
          <Link href={`/projects`}><a className="back-arrow">Back</a></Link>
          <header className="project__content-header">
            <h2 className="project__content-title">{ project.title }</h2>
            <strong className="project__content-type">
              { project.categories.map((category, i) => (
                <span key={i}>{ category.category} {project.categories.length - 1 !== i ? " - " : ""}</span>
              )) }
            </strong>
          </header>

          <p className="project__content-desc">
            { project.text }
          </p>
          <a href={ project.button } 
            target="_blank" rel="noopener noreferrer"
            className="project__content-link">More</a>
        </article>
      </Styles>
    )
  }

  return <h1>Loading</h1>

};

export default ProjectDetail;