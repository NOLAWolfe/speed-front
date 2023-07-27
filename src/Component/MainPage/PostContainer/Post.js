import React, { Component } from 'react';
import "./PostContainer.css";
import { Avatar, Paper} from '@mui/material';
import image from "../../../images/post.jpeg";
import like from "../../../images/like.png";
import likebutton from "../../../images/likebutton.png";
import commentbutton from "../../../images/comment.png";
import sharebutton from "../../../images/share.png";



class Post extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    
isImageAvailable=(data)=>{
    return data===""?false:true;
}

    render() { 
        return (         
            <div>
                <Paper className='post__container'>
                  {/* header */}
                  <div className='post__header'>
                    <div className='post_header_img'>
                        <Avatar className='post_img' src={this.props.object.user_img}/>
                    </div>
                    <div className="post__header_text">
                        {this.props.object.user_name}
                    </div>
                  </div>

                  {/* description */}
                  <div className='post__description'>
                    {this.props.object.description}
                  </div>

                  {/* image */}
                  <div className='post__image'>
                    {
                        this.isImageAvailable() ? <img src={this.props.object.post_img} width="600px" alt="" /> : <span></span>
                    }
                    <img src={this.props.object.post_img} width="600px" alt="" />
                  </div>
                  {/* like count */}
                  <div className="post__likeCountContainer">
                    <div className='post__like'>
                        <img className='post__img' src={like} alt="" />
                    </div>
                    <div className='post__likecount'>
                        {this.props.object.like}
                    </div>
                  </div>
                  {/* like share box */}
                  <div className="post__likeshare">
                    <div className='post__tab'>
                        <div className="post__tabfirst">
                            <img  className='post__tabimg' src={likebutton} alt="" />
                        </div>
                        <div className='post__tabletxt'>
                            Like
                        </div>
                    </div>
                    <div className='post__tab'>
                        <div className="post__tabfirst">
                            <img  className='post__tabimg' src={commentbutton} alt="" />
                        </div>
                        <div className='post__tabletxt'>
                            Comment
                        </div>
                    </div>
                    <div className='post__tab'>
                        <div className="post__tabfirst">
                            <img  className='post__tabimg' src={sharebutton} alt="" />
                        </div>
                        <div className='post__tabletxt'>
                            Share
                        </div>
                    </div>
                </div>
                  {/* comment box */}
                  <div className='upload__comment'>
                  <div className='upload__top'>
                    <div>
                        <Avatar className='upload__img' src='https://scontent.ffcm1-2.fna.fbcdn.net/v/t39.30808-1/327561013_582471203324506_3040817152926035477_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=106&cb=99be929b-3346023f&ccb=1-7&_nc_sid=7206a8&_nc_ohc=mgx9rFCWT20AX_NdQpW&_nc_oc=AQlzm2E-z59BfMjPIMadS1Pipw49f-uoqjp21g4kq0pd3T6fC4QlUz4W2DPrKSGmUhI&_nc_ht=scontent.ffcm1-2.fna&oh=00_AfCltIWW_jBRVCRvxeTENd5e2BF4uS3nQ7F0q15AjsTJ0g&oe=64AE065A'/>
                    </div>
                    <div>
                        <input className='upload__box' placeholder='Whats on your mind?' type="text" />
                    </div>
                </div>
                  </div>
                </Paper>
            </div>
         );
    }
}
 
export default Post;