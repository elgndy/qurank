import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./fav.css"

export default class Fav extends Component {

 

    render() {
      //const filtration = this.props.favItem.map(ele => ele.map(e => console.log(e.id)))
      //const fil = this.props.favItem.map(o => o.filter(id => id.id !== id))
        const allfav = JSON.parse(window.localStorage.getItem("fav")).map((fav) => fav.map(f => {
            return(
                <div
                  key={f.id}
                  style={{ color: "#fff" }}
                  dir="rtl"
                  className="parts"
                >
                  <div className="pair_main_peice">
                    <p>{f.name}</p>
                    <p> سوره {f.count}</p>
                    <p> روايه {f.rewaya}</p>        
                  </div>
                  <div>
                    <Link to={`/${f.id}`} >
                      <div className="pair_btns">
                        <span to={`/${f.id}`}>
                          <i className="fas fa-play enter_ico"></i>
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
            )
        } ))
        return (
            <div className={ this.props.isopen ? "home_pairant fav_pairant" : "fav_pairant home_pairant home_pairant_hidden"}>
                
                {allfav}
            </div>
        )
    }
}
