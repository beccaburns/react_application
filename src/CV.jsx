import React, { Component } from "react"
import axios from "axios"
import CVCard from "./CVCard"
import '../dist/style.css'

class CV extends Component {
    constructor() {
      super();
      this.state = {
        cvs: []
      };
    }

    componentDidMount() {
        this.getCVList()   
    }
    
    getCVList() {
      axios.get('./src/data/CV.json')
          .then(response => {
            this.setState({
              cvs: response.data
            })
          })
      }

      render() {
        const cvs = this.state.cvs
        let cvList
    
        if (cvs.length > 0) {
          cvList = cvs.map(cv => {
            return (
              <div key={cv.id}>
                < CVCard cv={cv} />
              </div>
            )
          })
        }
       
        return(
          <div className="ui main container">
              <div className="column">
                  <h1 className="ui Header">CV</h1>
              </div>
              <div className="ui stackable two column grid">
                 <div className="ui stackable two column grid">
                      {cvList} 
                 </div> 
              </div>
          </div>
      )
    }
  } 
  export default CV 