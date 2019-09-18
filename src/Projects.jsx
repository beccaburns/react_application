import React, { Component } from "react"
import axios from "axios"
import ProjectCard from "./ProjectCard"
import { UndrawCreativity } from 'react-undraw-illustrations';
import '../dist/style.css';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
          <Route exact path='/' component={Hello}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/projects' component={Projects}></Route>
      </Switch>
      <Footer />
    </ >
  )
};

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    axios.get('./src/data/projects.json')
      .then(response => {
        this.setState({
          projects: response.data
        })
      })
  }

  render() {
    const projects = this.state.projects
    let projectsList

    if (projects.length > 0) {
      projectsList = projects.map(project => {
        return (
          <div key={project.id}>
            <ProjectCard project={project} />
          </div>
        )
      })
    }
    return (
      <div className="ui main container">
        <div className="ui stackable two column grid">
          <div className="column">
          <center><img class="ui medium circular image"src="../src/img/projects.jpg"></img></center>
          </div>
          <div className="column">
            <h1>Projects</h1>
            <p>Here is a selection of some recent projects. For more up-to-date work you can visit my <a href="https://github.com/beccaburns">GitHub</a> profile.</p>
          </div>
        </div>
      <div className="ui stackable four column grid">
          {projectsList}
        </div>
      </div>
    )
  }
}

export default Projects