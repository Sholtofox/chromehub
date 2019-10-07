import React, { Component } from 'react';
import Gpro from './Geo'
import Editor from './Editor'
import Crypto from './Crypto'

export default class Header extends Component {
    render() {
        return (
          <div id='header'>
          <Crypto/>
            <Editor />
            <Gpro />
          </div>
        );
    }
}

