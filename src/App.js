import React, { Component } from 'react';
import LyricsPage from "./components/LyricsPage"
import{ProductProvider} from "./components/context"
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Lyrics from "./components/Lyrics"
import MainPage from "./components/MainPage"


class App extends Component {
  render() {
    return (
      <BrowserRouter>
 <Route path="/" component={LyricsPage} />
       

      <Switch>
      <Route  path="/dslfsk" component={ProductProvider}/>
<Route path="/lyrics" component={Lyrics} />
<Route exact path="/" component={MainPage} />

</Switch>
        </BrowserRouter>
    );
  }
}

export default App;
