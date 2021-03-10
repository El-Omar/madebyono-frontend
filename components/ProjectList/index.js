import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import Link from "next/link";
import Image from "next/image";

// import {
//   Button,
//   Card,
//   CardBody,
//   CardImg,
//   CardText,
//   CardTitle,
//   Col,
//   Row,
//   Container
// } from "reactstrap";

import getDate from "../../lib/getDate";
import { Container as Styles } from "../../styles/components/projectStyle";

const QUERY = gql`
  {
    projects(sort: "createdAt:DESC") {
      id
      title
      slug
      thumbnail {
        url
      }
      button
      categories {
        category
      }
    }
  }
`;

const ProjestList = () => {
  const { loading, error, data } = useQuery(QUERY);
  if (error) return "Error loading projects";
  if (loading) return <h2>Loading...</h2>;

  if (data.projects && data.projects.length) {
    return (
      <Styles className="main__container">
        <div className="container">
          <header className="page__heading">
            <h1>
              Discover our<br/>
              High-end designs.
            </h1>
          </header>
          <div className="projects__wrapper">
            <div className="col-row">
              {
                data.projects.map(project => (
                  <article className="w-50 work__wrapper" key={ project.id }>
                    <Link href={`/projects/${project.slug}/`}>
                      <a>
                        <div className="thumbnail thumbnail--3by4">
                          <img src={`${process.env.NEXT_PUBLIC_API_URL}${project.thumbnail.url}`} />
                        </div>
                      </a>
                    </Link>
                  </article>
                ))
              }
            </div>
          </div>
        </div>
      </Styles>
    );
  } else {
    return <h2>No projects articles</h2>
  }

};

export default ProjestList;
