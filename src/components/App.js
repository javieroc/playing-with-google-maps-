import React, { Component } from 'react';
import MyMap from './MyMap';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultCenter: null,
    };
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          defaultCenter: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
        });
      });
    }
  }

  render() {
    const { defaultCenter } = this.state;
    console.log('default center', defaultCenter);

    return <MyMap defaultCenter={defaultCenter} />;
  }
}

export default App;
