import React, { Component } from 'react';

class Loading extends Component {

    constructor() {
        super()
        this.state = {
            loadingText: "Loading"
        }
    }

    componentDidMount() {
        this.count = 0
        this.loadingInterval = setInterval(() => {
            if (this.count < 5) {
                this.setState({
                    loadingText: this.state.loadingText + "."
                })
                this.count++;
            } else {
                this.setState({
                    loadingText: "Loading"
                })
                this.count = 0
            }
        }, 200)
    }

    componentWillUnmount() {
        clearInterval(this.loadingInterval)
    }

    render() {
        return (
            <h1 className="loadingScreen">{this.state.loadingText}
                <p style={{ textAlign: "center", marginLeft: "-45vw" }}></p>
            </h1>
        )
    }
}

export default Loading;
