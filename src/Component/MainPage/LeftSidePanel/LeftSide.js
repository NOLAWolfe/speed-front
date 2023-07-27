import React, { Component } from 'react';
import "./LeftSide.css";
import ImageLayout from '../ImageLayout';
import covid from "../../../images/covid.png";
import groups from '../../../images/groups.png';
import memories from '../../../images/memories.png';
import admanager from '../../../images/admanager.png';
import ads from '../../../images/ads.png';
import blood from '../../../images/blood.png';
import business from '../../../images/business.png';
import messengerkids from '../../../images/messengerkids.png';

class LeftSide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data :[]
        }
    }
    

     getData=()=>{
        let jsondata = [
            {
                "id":1,
                "image": covid,
                "text":"Covid-19 Information Centre"
            },
            {
                "id":2,
                "image":groups,
                "text":"Friends"
            },
            {
                "id":3,
                "image":memories,
                "text":"Memories"
            },
            {
                "id":4,
                "image":admanager,
                "text":"Ad Manager"
            },
            {
                "id":5,
                "image":ads,
                "text":"Ad Centre"
            },
            {
                "id":6,
                "image":blood,
                "text":"Blood Donations"
            },
            {
                "id":7,
                "image":business,
                "text":"Business Manager"
            },
            {
                "id":8,
                "image":messengerkids,
                "text":"Messenger Kids"
            }
        ];
        this.setState({data: jsondata});
     }

     componentDidMount() {
         this.getData();
     }

    render() { 
        return ( 
            <div>

                <ImageLayout image="https://scontent.ffcm1-2.fna.fbcdn.net/v/t39.30808-1/327561013_582471203324506_3040817152926035477_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=106&cb=99be929b-3346023f&ccb=1-7&_nc_sid=7206a8&_nc_ohc=mgx9rFCWT20AX_NdQpW&_nc_oc=AQlzm2E-z59BfMjPIMadS1Pipw49f-uoqjp21g4kq0pd3T6fC4QlUz4W2DPrKSGmUhI&_nc_ht=scontent.ffcm1-2.fna&oh=00_AfCltIWW_jBRVCRvxeTENd5e2BF4uS3nQ7F0q15AjsTJ0g&oe=64AE065A" text="Troy Hicks"/>
                {
                    this.state.data.map( (item) =>(
                        <ImageLayout image={item.image} text={item.text}/>
                    ))
                }
            </div>
         );
    }
}
 
export default LeftSide;
