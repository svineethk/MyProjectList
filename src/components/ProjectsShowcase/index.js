import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import ProjectContainer from '../ProjectContainer'

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

const apiConstantStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class ProjectsShowcase extends Component {
  state = {
    projectData: [],
    apiStatus: apiConstantStatus.initial,
    activeTabId: categoriesList[0].id,
  }

  componentDidMount() {
    this.getProjectDetails()
  }

  getProjectDetails = async () => {
    const {activeTabId} = this.state
    this.setState({apiStatus: apiConstantStatus.inProgress})

    const projectsApiUrl = `https://apis.ccbp.in/ps/projects?category=${activeTabId}`

    const response = await fetch(projectsApiUrl)
    if (response.ok === true) {
      const responseData = await response.json()
      const updatedResponseData = responseData.projects.map(eachProject => ({
        id: eachProject.id,
        name: eachProject.name,
        imageUrl: eachProject.image_url,
      }))
      this.setState({
        apiStatus: apiConstantStatus.success,
        projectData: updatedResponseData,
      })
    } else {
      this.setState({apiStatus: apiConstantStatus.failure})
    }
  }

  onChangeCategory = event => {
    this.setState({activeTabId: event.target.value}, this.getProjectDetails)
  }

  onClickRetryButton = () => {
    this.setState(
      {apiStatus: apiConstantStatus.inProgress},
      this.getProjectDetails,
    )
  }

  getProjectSuccess = () => {
    const {projectData, activeTabId} = this.state

    return (
      <div className="app-container">
        <div className="header-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/projects-showcase/website-logo-img.png"
            alt="website logo"
            className="website-logo"
          />
        </div>
        <select
          value={activeTabId}
          onChange={this.onChangeCategory}
          className="option-element"
        >
          {categoriesList.map(eachCategory => (
            <option key={eachCategory.id} value={eachCategory.id}>
              {eachCategory.displayText}
            </option>
          ))}
        </select>
        <ul className="content-container">
          {projectData.map(eachProjectData => (
            <li key={eachProjectData.id}>
              <ProjectContainer projectData={eachProjectData} />
            </li>
          ))}
        </ul>
      </div>
    )
  }

  getProjectFailure = () => {
    const {activeTabId} = this.state

    return (
      <div className="app-container">
        <div className="header-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/projects-showcase/website-logo-img.png"
            alt="website logo"
            className="website-logo"
          />
        </div>
        <select
          value={activeTabId}
          onChange={this.onChangeCategory}
          className="option-element"
        >
          {categoriesList.map(eachCategory => (
            <option key={eachCategory.id} value={eachCategory.id}>
              {eachCategory.displayText}
            </option>
          ))}
        </select>
        <div className="failure-content-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
            alt="failure view"
            className="failure-logo"
          />
          <h1 className="failure-header">Oops! Something Went Wrong</h1>
          <p className="failure-paragraph">
            We cannot seem to find the page you are looking for.
          </p>
          <button
            type="button"
            className="retry-button"
            onClick={this.onClickRetryButton}
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  getProjectInProgress = () => {
    const {activeTabId} = this.state

    return (
      <div className="app-container">
        <div className="header-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/projects-showcase/website-logo-img.png"
            alt="website logo"
            className="website-logo"
          />
        </div>
        <select
          value={activeTabId}
          onChange={this.onChangeCategory}
          className="option-element"
        >
          {categoriesList.map(eachCategory => (
            <option key={eachCategory.id} value={eachCategory.id}>
              {eachCategory.displayText}
            </option>
          ))}
        </select>
        <div className="progress-content-container">
          <div data-testid="loader">
            <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstantStatus.success:
        return this.getProjectSuccess()
      case apiConstantStatus.failure:
        return this.getProjectFailure()
      case apiConstantStatus.inProgress:
        return this.getProjectInProgress()
      default:
        return null
    }
  }
}

export default ProjectsShowcase
