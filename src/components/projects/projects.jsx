import data from "../../data"
import Project from "./project"
function Projects(){  
    return (
      <>
        {data.map(project => <Project key={project.title} project={project}/>)}
      </>      
    )
  
}


export default Projects