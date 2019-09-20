import React, { Component } from "react"
import axios from "axios"
import '../dist/style.css';

class CV extends Component {
    constructor() {
      super();
      this.state = {
        cv: []
      };
    }

    componentDidMount() {
        axios.get('./src/data/cv.json')
          .then(response => {
            this.setState({
              projects: response.data
            })
          })
      }

      render() {
        const cv = this.state.cv
        let cvList
    
        if (cv.length > 0) {
          cvList = cv.map(cv => {
            return (
              <div key={cv.id}>
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
            <div class="ui horizontal divider">
            </div>
          </div>
            <div className="ui stackable centered four column grid">
              {projectsList}
            </div>
          </div>
        )
      }
    }
    
    export default CV