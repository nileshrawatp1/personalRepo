import React, { Component } from 'react';

class ChangeMessage extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Hello New Visitor'
        }
    }

    MessageChanged(){
        this.setState({
            message: 'Thanks For Subscribing'
        })
    }

    render() {
        return (
            <div>
                <h3>{this.state.message}</h3>
                <button onClick={() => this.MessageChanged()}>Subscribe</button>
            </div>
        )
    }
}
export default ChangeMessage