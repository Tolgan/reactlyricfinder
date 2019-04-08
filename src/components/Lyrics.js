import React, { Component } from 'react'
import {Consumer} from "./context"
import {Link} from "react-router-dom"
export default class Lyrics extends Component {
  


  render(){
    return (
      
      <Consumer> 
      
       
    {value=> 
<React.Fragment>
      
      <div className="container">
        <div className="row">
         


         
      <div className="col-md-6 mx-auto mt-5 ">
   <p> {value.lyrics  } 
       </p> <hr/>
       <Link to="/">
      <button className="btn-warning mt-5 mr-auto"> Back to Main Page</button>
      </Link>
       </div>
        </div>
      </div>
       </React.Fragment>  }

   
        </Consumer>



     
    )
  }
}
