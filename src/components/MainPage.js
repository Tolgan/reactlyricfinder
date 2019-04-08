import React, { Component } from 'react'
import {Consumer} from "./context"
import {Link} from "react-router-dom"

export default class MainPage extends Component {
  render() {
    return ( <Consumer>
    {value=>         
    
    <React.Fragment>
    <div className="container">
    <div className="row ">
      <div className="col-md-6 mx-auto ">
      {value.search ?
    <header className="text-center mt-5 text-title text-success">Search Results </header> : 
<header className="text-center display-4 mt-5 text-title text-info">TOP 10 TRACKS </header>
    }
<form onSubmit={value.handleSubmit} >
<div className="input-group ">
<input type="text" className="form-control" placeholder="Enter Track Name" onChange={value.handleChange} value={value.input} /> 
<div className="input-group-append">

<button className="bg-light btn-light"><i className="fas fa-search text-primary "></i> </button> 

</div>
</div>
</form>

      </div>
    </div>
    <div className="row">
{value.mylist.length===0  ? 
<div className="col-md-8 mx-auto text-center mt-5">
<h1 className="text-title lead text-danger text-capitalize "> Sorry, No Results Found  </h1>

</div>

     :  value.mylist.map(item=> { 
   return  <div className="col-md-4 d-flex mx-auto  " key={item.track.track_id} >
  
   
<div className="card my-3 p-3 w-100">
<div className="card-body my-auto">
 <h3 className="card-title"> {item.track.artist_name} </h3>
<h4><i className="fas fa-music"></i>
<strong>Track: </strong>  {item.track.track_name}  </h4>
<h4><i className="fab fa-spotify"></i><strong>Album:</strong>   {item.track.album_name}</h4>
</div>
<div className="align-self-end mx-auto">
<Link to="/lyrics">
<button className="btn btn-primary btn-block text-center " onClick={()=>value.lyricsfunc(item.track.track_id)} >
> View Lyrics </button>
</Link>

</div>
</div>
    </div> }
)  
} 


  
   </div>  
   </div> 
   </React.Fragment> }
   </Consumer>
    )
  }
}
