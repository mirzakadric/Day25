import React, { Component } from "react";

class GetRequestAsyncAwait extends Component {
    constructor(props){
        super(props);
        this.state = {
            totalReactPackages: null
        };
    }
    render() {
        const {totalReactPackages} = this.state;
        return(
            <div className="card text-center m-3">
                <h5 className="card-header">GET Request with Async/Await</h5>
                <div className="card-body">Total packages: {totalReactPackages}</div>
            </div>
        );
        
    }
    componentDidMount() {
        const response = await fetch('https://api.npms.io/v2/search?q=react');
        const data = response.json();
        this.setState({totalReactPackages: data.total});
    }
}

export default GetRequestAsyncAwait;