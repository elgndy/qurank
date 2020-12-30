import React, { Component } from "react";
import "./seb7a.css";
import click from "../../imgs/click3.mp3";
export default class Seb7a extends Component {
  state = {
    counter: 0,
    counterdef: 0,
  };

  handelClick = () => {
    setTimeout(() => {
      window.localStorage.setItem("all", this.state.counterdef + 1);
      this.setState({
        counter: this.state.counter + 1,
        counterdef: JSON.parse(window.localStorage.getItem("all")),
      });
    document.getElementById("seb7a_effect").classList.remove("effect_seb7a");
    }, 300);

    document.getElementById("audios").play();
    document.getElementById("seb7a_effect").classList.add("effect_seb7a");
  };
  handelEmpty = () => {
    this.setState({
      counter: 0,
    });
  };

  render() {
    return (
      <>
        <div
          className={this.props.isopen ? "sorry_div" : "sorry_div sorry_hidden"}
        >
          <span> عفوا... لايتوفر هذا التطبيق الا في شاشات التليفون </span>
        </div>
        <div className="seb7a">
          {" "}
          <h2>السبحه</h2>
          <span
            id="seb7a_effect"
            onClick={this.handelClick}
            className="main_seb7a"
          >
            سبح
          </span>
          <span onClick={this.handelEmpty} className="child_seb7a">
            انهاء
          </span>
          <p> العدد {this.state.counter} </p>
          <p> العدد الكلي {window.localStorage.getItem("all")} </p>
          <audio id="audios">
            <source src={click} />
          </audio>
        </div>
      </>
    );
  }
}
