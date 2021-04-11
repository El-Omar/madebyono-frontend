import { useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Container as Styles } from "../styles/components/projectStyle";
import Head from "next/head";

import ProjectList from "../components/ProjectList";
import Categories from "../components/ProjectList/categories";

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
    categories {
      category
    }
  }
`;

const Projects = () => {
  const { loading, error, data } = useQuery(QUERY);
  const [filter, setFilter] = useState("");
  
  return (
    <Styles className="main__container">
      <Head>
        <title>Projects - Madebyono</title>
      </Head>
      <div className="container">
        <header className="page__heading">
          <h1>
            Discover our<br/>
            High-end designs.
          </h1>
        </header>

        <div className={`projects__wrapper ${filter !== "" ? 'filter ' + filter : ''}`}>
          <div className="col-row">
            {error && <h2>Error loading projects</h2>}
            {loading && <h1>Loading</h1>}
            {!error && !loading && 
              <>
                <Categories categories={data.categories} filter={setFilter} />
                <ProjectList projects={data.projects} filter={filter} />
              </>
            }
          </div>
        </div>
          
      </div>
    </Styles>
  );
};

export default Projects;