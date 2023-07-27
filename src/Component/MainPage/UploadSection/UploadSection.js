import { Avatar, Paper } from '@mui/material';
import React, { Component } from 'react';
import "./UploadSection.css";

import live from "../../../images/video.png"
import image from "../../../images/image.png"
import feelings from "../../../images/feelings.png"

class UploadSection extends Component {
    
    state = {  }
    render() { 
        return ( <div>
            <Paper className='upload__container'>
                <div className='upload__top'>
                    <div>
                        <Avatar className='upload__img' src='https://scontent.ffcm1-2.fna.fbcdn.net/v/t39.30808-1/327561013_582471203324506_3040817152926035477_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=106&cb=99be929b-3346023f&ccb=1-7&_nc_sid=7206a8&_nc_ohc=mgx9rFCWT20AX_NdQpW&_nc_oc=AQlzm2E-z59BfMjPIMadS1Pipw49f-uoqjp21g4kq0pd3T6fC4QlUz4W2DPrKSGmUhI&_nc_ht=scontent.ffcm1-2.fna&oh=00_AfCltIWW_jBRVCRvxeTENd5e2BF4uS3nQ7F0q15AjsTJ0g&oe=64AE065A'/>
                    </div>
                    <div>
                        <input className='upload__box' placeholder='Whats on your mind?' type="text" />
                    </div>
                </div>
                <div className="upload__bottom">
                    <div className='upload__tabs'>
                        <img src={live}  width="35px" alt="" />
                        <div className='upload__text'>Live Video</div>
                    </div>
                    <div className='upload__tabs'>
                        <img src={image}  width="35px" alt="" />
                        <div className='upload__text'>Photo/Video</div>
                    </div>
                    <div className='upload__tabs'>
                        <img src={feelings}  width="35px" alt="" />
                        <div className='upload__text'>Feeling/Activity</div>
                    </div>
                </div>
            </Paper>
        </div> );
    }
}
 
export default UploadSection;