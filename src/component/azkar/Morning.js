import React, { Component } from 'react'
import Items from "../../dataFile/datamorning";
export default class Morning extends Component {
    render() {
        const {isopen} = this.props;
        const data = Items.map((item) => {
            return(
                <div key={item.id}>
                    <div>
                    <span className="num"> {item.num} عددالمرات </span>
                    <span className="num_id"> {item.id} </span>
                    <h2> {item.start} </h2>
                    <p> {item.content} </p>
                    <p> {item.end} </p>
                    </div>
                </div>
            )
        })
        return (
            <div className={ isopen ? "pair_morning" : "pair_morning morning_pairant_hidden"}>
                <h1><i className="fas fa-cloud-sun" style={{display:"block"}}></i>أذكار الصباح</h1>
                {data}
            </div>
        )
    }
}

