import React, { Component } from 'react';
import Clock from './Clock'
import Gpro from './Geo'
import Fart from './Editor'

export default class Header extends Component {
    render() {
        return (
          <div>
              <Fart />
              <Gpro />
                <Clock />
          </div>
        );
    }
}

