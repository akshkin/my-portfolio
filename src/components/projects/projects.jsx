import data from "../../data"
import Project from "./project"
function Projects(){  
    return (
      <>
        {data.map(project => <Project project={project}/>)}
      </>      
    )
  
}


export default Projects