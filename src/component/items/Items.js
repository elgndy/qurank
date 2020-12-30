import React, { Component } from 'react'

export default class Items extends Component {
    render() {
        return (
            <div>
            <div className="home_pairant">               
                {this.props.data}
            </div> 
            </div> 
        )
    }
}
