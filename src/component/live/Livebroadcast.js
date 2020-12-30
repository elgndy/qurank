import React, { Component } from "react";
import "./livebroadcast.css";
import axios from "axios";
import { Looding } from "../loadding/Looding";
export class Livebroadcast extends Component {
  state = {
    datalive: [],
    search: "",
    persons:[]
  };

  componentDidMount() {
    axios
      .get("https://api.mp3quran.net/radios/radio_arabic.json")
      .then((res) => {
        this.setState({
          datalive: res.data.radios,
        });
      });
  }

  gitsrc = (url) => {
    const urll = this.state.datalive.filter((ur) => ur.radio_url === url);
    const src = urll.map((sr) => sr.radio_url);
     this.props.liveUrll(src[0]);
  };

  handelsearch = (e) => {
    this.setState({
      search: e.target.value.substr(0, 20),
    });
  };
  handelDelete = () => {
    this.setState({
      search: "",
    });
  };

  handleOptionChange = (url ,person, option) => {
    const urll = this.state.datalive.filter((ur) => ur.radio_url === url);
    urll[0].is1Selected = false;
    person[option] = !person[option];
    this.setState([...this.state.persons])
    };


  render() {

    let filtered = this.state.datalive.filter((re) => {
        return re.name.indexOf(this.state.search) !== -1;
      });
    const { isopen } = this.props;
    if (this.state.datalive.length > 0) {
      return (
        <>
          <div className="pair_form">
            <form
              className={isopen ? "form" : "form audio_hidden"}
              onSubmit={(e) => e.preventDefault()}
            >
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

          <div id="pair_live" className={isopen ? "pair_live" : "pair_live live_pair_hidden"}>
            {filtered.map((radio) => {
              return (
                <div key={Math.random()} 
                onClick={() => this.handleOptionChange(radio.radio_url ,radio, 'is1Selected')}
                    className={!radio.is1Selected ? "" : 'select'}
                >
                  <p> {radio.name} </p>
                  <i
                    className="far fa-play-circle play"
                    onClick={() => this.gitsrc(radio.radio_url) }
                  ></i>
                </div>
              );
            })}
          </div>
        </>
      );
    }
    return <Looding />;
  }
}
