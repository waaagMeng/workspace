import React, { Component } from 'react';
import Header from './Header.js'
import Search from './Search.js'
import Results from './Results.js'
class Main extends Component {
    constructor() {
        super();
        this.state = {
            beers: [],
            loading: true
        }
    }
    componentDidMount() {
        const params = this.props.match.params || {}; // /  /search/:searchterm
        const searchterm = params.searchterm || undefined;
        this.loadBeers(searchterm);
    }
    loadBeers(searchterm="hops") {
        fetch(`http://api.react.beer/v2/search?q=${searchterm}&type=beer`)
        .then(data => data.json())
        .then(data => {
            console.log(data);
        })
    }
    state = {  }
    render() { 
        return  (
            <div className="wrapper">
                <Header siteName="Beer me!"/>
                <Search />
                <Results beers={this.state.beers} loading={this.state.loading} />
            </div>
        )
    }
}
 
export default Main;