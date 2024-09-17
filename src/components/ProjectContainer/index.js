import './index.css'

const ProjectContainer = props => {
  const {projectData} = props
  const {name, imageUrl} = projectData

  return (
    <div className="project-container">
      <img src={imageUrl} alt={name} className="project-image" />
      <p className="project-header">{name}</p>
    </div>
  )
}
export default ProjectContainer
