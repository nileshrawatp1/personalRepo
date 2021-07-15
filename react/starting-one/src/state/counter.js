import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    // ! ------- - Second Param is called the callback Func - ---------
    addCounter() {
        // this.setState({
        //     count: this.state.count + 1
        // },
        //     () => { // ? Second Param which fit after setState
        //         console.log('Callback Value : ', this.state.count);
        //     })

        // ? ------ - To Add Five we need to use a func with previous value - -----
        this.setState((prevCount) => ({
            count: prevCount.count + 1
        }), () => {
            console.log('Five Added : ', this.state.count);
        })
    }

    // ? ------- - Add Five Times - ------------
    addFive() {
        this.addCounter()
        this.addCounter()
        this.addCounter()
        this.addCounter()
        this.addCounter()
    }


    render() {
        return (
            <div>
                <br />
                <div>Count is : {this.state.count}</div>
                <button onClick={() => this.addFive()}>Add Counter</button>
            </div>
        )
    }
}

export default Counter
