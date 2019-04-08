import React, { Component } from 'react'


const Context=React.createContext()
const Consumer=Context.Consumer
   class ProductProvider extends Component { 

state={mylist:[],url:"https://cors-anywhere.herokuapp.com/api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=usa&apikey=" 
 ,lyrics:"", input:"",searchtrack:[],search:false}


    async getMyLyric(){
      const api="cdaf252d903f7fc0be239c6e9760b39e"	
 const getit=await fetch(`${this.state.url}${api}`)           
       const data=await getit.json() ;console.log(data)
this.setState({mylist:data.message.body.track_list})
    
    }
componentDidMount(){ this.getMyLyric()    } 
 
handleChange=(event)=>{ this.setState({input:event.target.value})  ; console.log(this.state.input) }
handleSubmit=(e)=>{e.preventDefault()
   this.setState({url:`https://cors-anywhere.herokuapp.com/api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.input}&page_size=3&page=1&s_track_rating=desc&apikey=`,search:true
  ,input:"" },
()=>{this.getMyLyric()})
}
  
 viewLyrics=async (id)=>{ 
  
  const getit=await fetch(`https://cors-anywhere.herokuapp.com/api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=cdaf252d903f7fc0be239c6e9760b39e`)           
const data=await getit.json() ;
this.setState({lyrics:data.message.body.lyrics.lyrics_body}  ) 
console.log(this.state)
}
 


    render() { 
  

    return (
     
<Context.Provider value={{...this.state,lyricsfunc:this.viewLyrics,handleChange:this.handleChange,
handleSubmit:this.handleSubmit}} >
  {this.props.children}



   </Context.Provider>
   
    )
  }
}
export {ProductProvider,Consumer} 