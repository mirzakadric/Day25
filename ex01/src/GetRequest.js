import React, { Component } from "react";

class GetRequest extends Component {
    constructor(props){
        super(props);
        this.state = {
            totalReactPackages: null
        };
    }
    render() {
        return(
            <div className="card text-center m-3">
                <h5 className="card-header">Simple GET request</h5>
                <div className="card-body">Total packages: {totalReactPackages}</div>
            </div>
        )
        
    }
    componentDidMount() {
        fetch('https://api.npms.io/v2/search?q=react')
        .then(response => response.json())
        .then(data => this.setState({totalReactPackages: data.total}));
    }
}

export default GetRequest;