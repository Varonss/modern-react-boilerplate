import React, { Component } from 'react';
//RHL only for front end development
// import './sass.scss';
import axios from 'axios';
import DataList from './components/data';

export default class App extends Component {

  constructor(props){
  super(props);
  this.state = {
    isLoaded: true,
      meta: {},
      hospital: '',
  }

  // this.filterData = this.filterData.bind(this);

}

//"http://localhost:3000/items"

componentDidMount() {
  axios.get('/items').then(res => {
    const { data } = res.data;
    this.setState({ hospital : data});
  });
}

// filterData(e){
//    (true === data.[{this.state.hospital.registered.1}]) {
//
//   }(;
//    break;
//   }


render() {

    var{isLoaded} = this.state;

    if(!isLoaded){
      return (<div>Loading...</div>);
    } else {
      return (
      <div className="App">
      <ul>
      </ul>
            {console.log(this.state)}
      </div>
  );
  }
}
}
