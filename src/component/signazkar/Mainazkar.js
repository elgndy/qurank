import React, { Component } from "react";
import "./mainazkar.css";
import { Link } from "react-router-dom";
export class Mainazkar extends Component {
  render() {
    const { isopen } = this.props;
    return (
      <>
        <div className={isopen ? "main_azkar" : "main_azkar azkar_hidden"}>
          <Link to="/morninng">
            {" "}
            <div className="mornning same">
              <i className="fas fa-cloud-sun"></i>
              أذكار الصباح
            </div>
          </Link>
          <Link to="/night">
            <div className="night same">
              <i className="fas fa-cloud-moon"></i>
              أذكار المساء
            </div>
          </Link>
          <div className="full_veiw">
          <Link to="/walkup">
              <div className="same">
                <i className="fab fa-algolia"></i>
                أذكار الاستيقاظ
              </div>
            </Link>
            

            <Link to="/sleep">
              {" "}
              <div className="same">
                <i className="fas fa-bed"></i>
                أذكار النوم
              </div>
            </Link>
            <Link to="/afterpray">
              {" "}
              <div className="same">
                <i className="fas fa-pray"></i>
                بعد الصلاه
              </div>
            </Link>
            <Link to="/difrant">
              <div className="same">
                <i className="fas fa-allergies"></i>
                أذكار متفرقه
              </div>
            </Link>
          </div>
        </div>
      </>
    );
  }
}
