import React, { Component } from 'react';
import Clock from './Clock'
import Gpro from './Geo'
export default class Header extends Component {
    render() {
        return (
          <div>
              <Gpro />
                <Clock />
          </div>
        );
    }
}

