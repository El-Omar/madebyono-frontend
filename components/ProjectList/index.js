import Link from "next/link";
import Image from "next/image";

import path from "../../lib/path";

const ProjestList = ({ projects }) => {
  
  if (projects && projects.length) {
    return (
      projects.map(project => (
        <article className="w-50 work__wrapper" key={ project.id }>
          <Link href={`/projects/${project.slug}/`}>
            <a>
              <div className="thumbnail thumbnail--3by4">
                <img src={path(project.thumbnail.url)} />
              </div>
            </a>
          </Link>
        </article>
      ))
    );
  } else {
    return <div className="w-100">
      <h2 className="no-results-found" style={{ paddingLeft: `8px` }}>No projects articles</h2>
    </div>
  }

};

export default ProjestList;
