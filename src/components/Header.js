import React, { Component } from 'react';
import Clock from './Clock'
import Weathers from '../components/Weather'
import Gpro from './Geo'
export default class Header extends Component {
    render() {
        return (
          <div>
              <Weathers />
              <Gpro />
            <Clock />
          </div>
        );
    }
}