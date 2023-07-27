import React, { Component } from 'react';
import "./PostContainer.css";
import Post from './Post';
import post_img from "../../../images/post.jpeg"

class PostContainer
 extends Component {
    
    state = { data: [] }

    getData=() => { //calling the rest from backend
        let json = [
            {
                // profile image, name, description
                // created_userid, profile_img, user_name, post

                "Post_ID": 1,
                "user_ID": 12345678,
                "user_img": "url....",
                "user_name": "Troy Hicks",
                "description": "Loved this wallpaper",
                "post_img": post_img,
                "like": 25
            },
            {
                "Post_ID": 2,
                "user_ID": 23456789,
                "user_img": "url....",
                "user_name": "Alex Wolfe",
                "description": "Crazy post this is....",
                "post_img": "",
                "like": 125
            }
        ]

        this.setState({data : json });
    }

    componentDidMount(){
        this.getData();
    }
    render() { 
        return ( 
            <div>
                {
                    this.state.data.map((item)=>(
                        <Post object={item}/>
                    ))
                }
            </div>
         );
    }
}
 
export default PostContainer
;