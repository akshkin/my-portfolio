function Project({project}){
  const {title, imageUrl, Description, builtWith, sourceCode, liveDemo} = project
  return (
    <div key={title} className="card">
      <div className="img-container">
        <img src={imageUrl} className="card-img" alt={`${project.title} screenshot`} />
      </div>
      <div className="card-decription">                        
          <h3>{title}</h3>
          <p>{Description}</p>
          <p><span className="accent-color">Technologies used:</span> {builtWith}</p>
          <a href={sourceCode} rel="noreferrer" target="_blank" className="btn">Source Code</a>
          <a href={liveDemo} rel="noreferrer" target="_blank" className="btn">Live Demo</a>
       </div>
  </div>)
}

export default Project