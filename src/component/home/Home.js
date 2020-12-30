import React, { Component ,createRef  } from "react";
//import fil from '../../imgs/fil.mp3';
import "./home.css";
import { Link } from "react-router-dom";
import { Looding } from "../loadding/Looding";
class Home extends Component {
  heartcolorr = createRef();
  constructor(props) {
    super(props);
    this.like = React.createRef();
    this.state = {
      search: "",
    };
  }
  
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

  
  componentDidMount() {
    /*var inp = document.getElementById("#inp");
    
      window.onload = () => {
        inp.focus();
      };
    console.log(inp);
     */
  }

  render() {
    
    const {isopen} = this.props;
    let filtered = this.props.readers.filter((read) => {
      return read.name.indexOf(this.state.search) !== -1;
    });
    if (this.props.readers.length > 0) {
      return (
        <>
          
          <div className="pair_form">
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
          <div id="j" className={ isopen ? "home_pairant" : "home_pairant home_pairant_hidden"}>
            {filtered.map((reader) => {
              return (
                <div
                  key={reader.id}
                  style={{ color: "#fff" }}
                  dir="rtl"
                  className="parts"
                >
                  <div className="pair_main_peice">
                    <p>{reader.name}</p>
                    <p> سوره {reader.count}</p>
                    <p> روايه {reader.rewaya}</p>
                    <i
                    ref={this.like}
                     className="fas fa-heartbeat like" 
                     onClick={() => {
                      this.props.toggelLove(reader.id)}
                    }></i>
                  </div>
                  <div>
                    <Link to={`/${reader.id}`} >
                      <div className="pair_btns">
                        <span to={`/${reader.id}`}>
                          <i className="fas fa-play enter_ico"></i>
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      );
    }
    return <Looding />
  }
}

export default Home;
