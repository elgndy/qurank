import React, { Component } from "react";
import "./nav.css";
import myphoto from "../../imgs/myphoto.png";
import { Link } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import quran from "../../imgs/logo9.png";
//import song from "../../imgs/song.png"
import { Col, Row, Container } from "react-bootstrap";
export default class Nav extends Component {
  state = {
    issid: true,
  };

  videoURI = () => {
    if (this.props.videoURI) {
      return this.props.videoURI;
    }
    return "https://server10.mp3quran.net/ajm/128/001.mp3";
  };

  checklocal = () => {
    if(JSON.parse(window.localStorage.getItem("fav"))){
      return;
    }else{
      alert("يجب اضافه عنصر علي الاقل لقائمه المفضله")
    }
    // ? "" : 
  }

  render() {
    const { isopen } = this.props;
    return (
      <>
        <div className="nav_pair" id="nav_pair">
          <div className="contanir">
            <Container>
              <Row>
                <Col>
                  <Link to="/" className="logo">
                    <img src={quran} alt="quran" className="logo_icon" />
                  </Link>
                </Col>
                <Col>
                  <div className="info">
                    <div className="pair_bars">
                      <i
                        className="fa fa-bars toggel_icon"
                        onClick={() => this.props.handelTogglSideBar()}
                      ></i>
                    </div>

                    <label className="label">
                      <i
                        className="far fa-moon"
                        style={
                          localStorage.getItem("dark") === "false"
                            ? { color: "#eee" }
                            : { color: "#aaa" }
                        }
                      ></i>
                      <input
                        type="checkbox"
                        className="input"
                        onClick={() => this.props.toggeldark()}
                      />
                      <span className="check_span"></span>

                      <i
                        className="fas fa-sun"
                        style={
                          localStorage.getItem("dark") === "true"
                            ? { color: "rgb(255, 187, 42)" }
                            : { color: "#555" }
                        }
                      ></i>
                    </label>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div className="bac_main_home">
          <div className="cover"></div>
          <div>
            <h1>القرأن الكريم</h1>
            <p>القرأن الكريم للأستماع والتحميل لجميع القراء حول العالم</p>
          </div>
        </div>
        <div
          className={isopen ? "nav_pairant" : "nav_pairant nav_pairant_hidden"}
        >
          <ReactAudioPlayer
            id="player"
            src={
              window.location.pathname === "/livecast"
                ? this.props.live
                : this.videoURI()
            }
            autoPlay
            controls
          ></ReactAudioPlayer>

          <footer>
            {this.props.ele
              ? this.props.ele.map((res) => (
                  <div key={res.id} className="coloneelement">
                    <div>
                      <p> سوره: {res.name}</p>
                    </div>
                  </div>
                ))
              : ""}
            <div className="pair_desk">
              <p className="develop">
                {" "}
                Developed By{" "}
                <a
                  href="https://www.facebook.com/profile.php?id=100005963350820"
                  target="blank"
                >
                  Mohamed Elgndy
                </a>{" "}
                <i className="fa fa-heart"></i>
              </p>
              <a
                href="https://www.facebook.com/profile.php?id=100005963350820"
                target="blank"
                className="pair_photo"
              >
                <img
                  src={myphoto}
                  className="photo"
                  width="40px"
                  height="40px"
                  alt="me"
                />
              </a>
            </div>
          </footer>
        </div>

        <ul className={isopen ? "list_side" : "hidden list_side"}>
          <Link to="/">
            <li>
              جميع القراء <i className="fas fa-mosque icon"></i>
            </li>
          </Link>
          <Link to="/livecast">
            <li>
              {" "}
              البث المباشر<i className="fas fa-signal"></i>
            </li>
          </Link>
          <Link to="/azkar">
            <li>
              {" "}
              ادعيه واذكار <i className="fas fa-praying-hands"></i>
            </li>
          </Link>
          <Link to="/seb7a">
            <li>
              السبحه <i className="fab fa-affiliatetheme"></i>
            </li>
          </Link>
          <Link
            to={JSON.parse(window.localStorage.getItem("fav")) ? "/fav" : "/"}
          >
            <li
              onClick={ this.checklocal}
            >
              القراء المفضلون <i onClick={ this.checklocal} className="far fa-grin-hearts"></i>
            </li>
          </Link>
          <p
            className={this.videoURI ? "go-up_icon ainmatio" : "go_up_icon"}
          ></p>
        </ul>
      </>
    );
  }
}
