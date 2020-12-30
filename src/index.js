import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//document.getElementById('kk').siblings

var links = document.querySelectorAll(".list_side a");
var icon = document.querySelector(".toggel_icon");
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", () => {
    icon.click();
  });
}

var nav = document.getElementById("nav_pair");

window.onscroll = () => {
  if (window.pageYOffset > 300) {
    nav.classList.add("bac_dark");
  } else {
    nav.classList.remove("bac_dark");
  }
};



var lodding_screen = document.querySelector(".lodded");

window.onload = () => {
  lodding_screen.style.display = "none"
}







