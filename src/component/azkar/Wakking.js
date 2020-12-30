import React, { Component } from 'react'
import Items from "../../dataFile/datawalkingup";
export default class Afterpray extends Component {
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
                <h1 className="night4"><i className="fab fa-algolia" style={{display:"block"}}></i> اذكار الأستيقاظ </h1>
                {data}
            </div>
        )
    }
}