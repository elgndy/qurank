import React, { Component, Fragment } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Nav from "./component/navbar/Nav";
import Fav from "./component/Fav/Fav";

import Home from "./component/home/Home";
import axios from "axios";
import Audi from "./component/audio_page/Audi_page";
import {Mainazkar} from "./component/signazkar/Mainazkar";
import { Livebroadcast } from "./component/live/Livebroadcast";
import Afterpray from "./component/azkar/Afterpray";
import Morning from "./component/azkar/Morning";
import Night from "./component/azkar/Night";
import Sleep from "./component/azkar/Sleep";
import Walkking from "./component/azkar/Wakking";
import Offall from "./component/azkar/Offall";
import Seb7a from "./component/shb7a/Seb7a";
import "./media.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedReaders: [],
      videoURI: null,
      live: null,
      ele: null,
      isopen: false,
      darkmood: false,
      favItem: [],
      islove: false,
    };
  }

  handelTogglSideBar = () => {
    this.setState({
      isopen: !this.state.isopen,
    });
  };
  componentDidMount() {
    axios.get("https://qurani-api.herokuapp.com/api/reciters/").then((res) => {
      this.setState({
        loadedReaders: res.data,
      });
      /*setTimeout(() => {
        this.setState({
          isopen: false,
        });
      }, 1000);*/
    });
  }

  videoPlayerURI = (videoURI) => {
    this.setState({ videoURI });
  };

  liveurl = (live) => {
    this.setState({ live });
  };

  elementCopy = (ele) => {
    this.setState({ ele });
  };

  textCopy = (textlive) => {
    this.setState({ textlive });
  };

  toggeldark = () => {
    this.setState({
      darkmood: !this.state.darkmood,
    });
    localStorage.setItem("dark", JSON.stringify(this.state.darkmood));
  };

  toggelLove = (idd) => {
    this.setState({
      islove:!this.state.islove
    })
    const obj = this.state.loadedReaders.filter((id) => {
      return id.id === idd
    })
    this.state.favItem.push(obj)
    localStorage.setItem("fav", JSON.stringify(this.state.favItem));
   alert("هل تريد اضافه هذا القارئ الي المفضله")
  }
  render() {
    return (
      <Fragment>
        <div className="lodded">
        <div className="lm"></div>
        </div>
        <div
          className={
            localStorage.getItem("dark") === "true" ? "darkmood" : "app"
          }
        >
          <Nav
            toggeldark={this.toggeldark}
            videoURI={this.state.videoURI}
            live={this.state.live}
            ele={this.state.ele}
            isopen={this.state.isopen}
            handelTogglSideBar={this.handelTogglSideBar}
          />
          <Switch>
            <Route path="/" exact>
              <Home
                readers={this.state.loadedReaders}
                isopen={this.state.isopen}
                islove={this.state.islove}
                toggelLove={this.toggelLove}
              />
            </Route>
            <Route exact path="/livecast">
              <Livebroadcast
                liveUrll={this.liveurl}
                isopen={this.state.isopen}
              />
            </Route>
            <Route path="/azkar" >
              <Mainazkar 
              isopen={this.state.isopen}
              />
            </Route>
            <Route path="/morninng">
              <Morning
              isopen={this.state.isopen}
              />
            </Route>
            <Route path="/night">
              <Night 
              isopen={this.state.isopen}
              />
            </Route>
            <Route path="/afterpray">
              <Afterpray
                isopen={this.state.isopen}
              />
            </Route>
            <Route path="/sleep">
              <Sleep 
                isopen={this.state.isopen}
              />
            </Route>
            <Route path="/walkup">
              <Walkking 
              isopen={this.state.isopen}
              />
            </Route>
            <Route path="/difrant">
              <Offall 
              isopen={this.state.isopen}
               />
            </Route>
            <Route path="/fav">
              <Fav  
              isopen={this.state.islove}
              favItem={this.state.favItem} />
            </Route>
            <Route path="/seb7a">
              <Seb7a isopen={this.state.isopen} />
            </Route>
            <Route exact path="/:id">
              <Audi
                videoURI={this.videoPlayerURI}
                elementCopy={this.elementCopy}
                isopen={this.state.isopen}
              />
            </Route>
          </Switch>
        </div>
      </Fragment>
    );
  }
}

export default App;
