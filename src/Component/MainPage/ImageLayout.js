import React, { Component } from 'react';
import { Avatar } from '@mui/material';

class ImageLayout extends Component {
    
    state = {  }
    render() { 
        return ( 
            <div className='imagelayout__container'>
                <div className='imagelayout__imglay'>
                    <Avatar className='imagelayout__img' src={this.props.image}/>
                </div>
                <div className='imagelayout__text'>
                    {this.props.text}
                </div>
            </div>
         );
    }
}
 
export default ImageLayout;