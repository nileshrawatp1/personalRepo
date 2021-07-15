import React, { Component } from 'react';

class LearnClassProps extends Component {
    render() {
        return (
            <div>
                <h2>Welcome {this.props.name} you are a good { this.props.working}</h2>
                {/* ! ==== = For The Childs of  tag = ===== */}
                { this.props.children }
            </div>
        )
    }
}

export default LearnClassProps