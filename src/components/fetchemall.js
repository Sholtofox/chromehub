import React, { Component } from 'react';

export default class Fetchemall extends Component {
    constructor() {
        super();
        this.state = {
            somedata: []
        }
    }


componentDidMount() {
    fetch('https://randomuser.me/api/?results=500')
    .then(results => {
        return results.json();
    }).then(data => {
        let somedata = data.results.map((pic) => {
            return (
                <div key= {pic.results}>
                <img src={pic.picture.medium} />
                </div>
            )
        })
        this.setState({pictures: pictures})
    })
}

render() {
    return <div>
    {this.state.pictures}
    </div>;
}
}