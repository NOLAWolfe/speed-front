
import React, { Component } from 'react';
import "./StatusBar.css";
import {Paper} from '@mui/material';

class Status
 extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
        <div className='statusbar__status'>
            <Paper className='statusbar__paper'/>
        </div> );
    }
}
 
export default Status;