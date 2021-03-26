import { useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Container as Styles } from "../styles/components/projectStyle";

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
  const [projects, setProjects] = useState([]);
  const { loading, error, data } = useQuery(QUERY);
  
  useEffect(() => {
    if (!loading && !error && data.projects) {
      setProjects(projects => projects = data.projects);
    }
  }, [loading, error, data]);

  const filterProjectsByCategory = category => {
    if (!category || category === "") {
      setProjects(projects => projects = data.projects);
      return;
    }

    const newProjects = data.projects.filter(project => (
      project.categories.length && project.categories.filter(c => c.category === category).length
    ));

    setProjects(projects => projects = newProjects);
  };

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
            {error && <h2>Error loading projects</h2>}
            {loading && <h1>Loading</h1>}
            {!error && !loading && 
              <>
                <Categories categories={data.categories} filter={filterProjectsByCategory} />
                <ProjectList projects={projects} />
              </>
            }
          </div>
        </div>
          
      </div>
    </Styles>
  );
};

export default Projects;