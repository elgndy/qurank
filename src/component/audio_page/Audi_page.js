import React, { Component } from "react";
import "./audio.css";
import axios from "axios";
import { Looding } from "../loadding/Looding";

export default class Audi extends Component {
  state = {
    dataa: [],
    headdata: [],
    isopen: false,
    search: "",
  };
  componentDidMount() {
    axios
      .get(
        `https://qurani-api.herokuapp.com/api/reciters${window.location.pathname}`
      )
      .then((res) => {
        this.setState({
          dataa: res.data.surasData,
          headdata: res.data,
        });
      });
  }

  videoPlayerURI = (id) => {
    const url = this.state.dataa.filter((ur) => ur.id === id);
    const src = url.map((sr) => sr.url);
    this.props.videoURI(src[0]);
    this.props.elementCopy(url);
  };

  handelDelete = () => {
    this.setState({
      search: "",
    });
  };
  handelsearch = (e) => {
    this.setState({
      search: e.target.value.substr(0, 20),
    });
  };

  render() {
    let filtered = this.state.dataa.filter((re) => {
      return re.name.indexOf(this.state.search) !== -1;
    });
  const {isopen} = this.props;
    const all = filtered.map((res) => {
      return (
        <div key={res.id}>
          <div>
            <p className="suranum1"> {res.name}</p>
            <p className="suranum2">
              {" "}
              {res.id} رقم السوره
            </p>
            <span className="down"></span>
            <section className="pair_audio_control">
              <span
                className="audio"
                data-url={res.url}
                onClick={() => this.videoPlayerURI(res.id)}
              >
                <i className="far fa-play-circle play"></i>
              </span>
            </section>
          </div>
        </div>
      );
    });
    if (this.state.dataa.length > 0) {
      return (
        
        <>
          <div className="pair_form" id="form">
            <form className={isopen ? "form" : "form audio_hidden"} onSubmit={(e) => e.preventDefault()}>
              <i className="fa fa-search icon_search"></i>
              <i
                className="fas fa-backspace icon_search xx"
                onClick={this.handelDelete}
              ></i>
              <input
                id="inp"
                type="text"
                placeholder="اسم القارئ"
                value={this.state.search}
                onChange={this.handelsearch}
              />
            </form>
          </div>

          <div className={isopen ? "pair_all" : "pair_all audio_hidden"}>
            
            {
              
              <div className="infos">
                <div className="center2">
                <p>
                  <span>{this.state.headdata.count}</span> {" "}
                   <i className="fas fa-database"></i>
                </p>
               
                <p>
                  <span>{this.state.headdata.rewaya}</span> {" "}
                   <i className="fas fa-book-open"></i>
                </p>
                <p>
                  <span>{this.state.headdata.name}</span> {" "}
                <i className="fas fa-user-tie"></i> 
                </p>
              </div>
              </div>
            }
            
            <div className="clear"></div>
            <div className={isopen ? "pair_audio" : "pair_audio_grid pair_audio "}>{all}</div>
            
          </div>
        </>
      );
    }
    return <Looding />
  }
}
