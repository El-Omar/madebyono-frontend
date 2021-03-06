import Link from "next/link";
import Image from "next/image";
import path from "../../lib/path";

const ProjestList = ({ projects, filter }) => {
  
  if (projects && projects.length) {
    return projects.map(project => {
      let _className = ``;
      project.categories.map(({ category }) => _className += category.toLowerCase().replace(' ', '-') + ' ');
      _className.replace(/ /g, '').replace(/,/g, '');

      return (
        <article className={`w-50 work__wrapper ${_className}`} 
          key={ project.id } style={{ display: _className.includes(filter) || filter === "" ? 'block' : 'none' }}>
          <Link href={`/projects/${project.slug}/`}>
            <a>
              <div className="thumbnail thumbnail--3by4">
                <Image layout="fill" src={path(project.thumbnail.formats.small ? project.thumbnail.formats.small.url : project.thumbnail.formats.thumbnail.url)} />
              </div>
            </a>
          </Link>
        </article>
      )
    });
  } else {
    return <div className="w-100">
      <h2 className="no-results-found" style={{ paddingLeft: `8px` }}>No projects articles</h2>
    </div>
  }

};

export default ProjestList;
