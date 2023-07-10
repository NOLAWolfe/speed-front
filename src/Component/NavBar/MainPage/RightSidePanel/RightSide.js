import React, { Component } from 'react';
import "./RightSide.css";
import ImageLayout from '../ImageLayout';
class RightSide extends Component {
    
    state = {  data:[] }
    getData=()=>{
        let jsondata = [
            {
                "id":1,
                "image": "https://scontent.ffcm1-2.fna.fbcdn.net/v/t39.30808-1/317675238_703590234464507_1698036519759628041_n.jpg?stp=c378.265.588.588a_dst-jpg_s120x120&_nc_cat=101&cb=99be929b-3346023f&ccb=1-7&_nc_sid=c6021c&_nc_ohc=OOSMO1EDNN8AX803SFP&_nc_ht=scontent.ffcm1-2.fna&oh=00_AfCg_AQcn9YslQ6SfELnwINThJ_U2OEgI_kpcCXW2ZgAfQ&oe=64B1BC7D",
                "text":"Stephen Curry"
            },
            {
                "id":2,
                "image":"https://scontent.ffcm1-1.fna.fbcdn.net/v/t39.30808-1/229237388_371264771031091_9168532870548562954_n.jpg?stp=dst-jpg_p120x120&_nc_cat=1&cb=99be929b-3346023f&ccb=1-7&_nc_sid=c6021c&_nc_ohc=cHdOIOV46I4AX_4Eveh&_nc_ht=scontent.ffcm1-1.fna&oh=00_AfArJhoVI3Tuo9r-gX_288PNO7YwJz1gYjyNiIepEl5JLQ&oe=64B1F6FF",
                "text":"Lebron James"
            },
            {
                "id":3,
                "image":"https://scontent.ffcm1-1.fna.fbcdn.net/v/t39.30808-1/319088510_698682068288702_8894199277318412480_n.jpg?stp=c76.0.120.120a_dst-jpg_p120x120&_nc_cat=100&cb=99be929b-3346023f&ccb=1-7&_nc_sid=c6021c&_nc_ohc=IwNmNgs0lK0AX_FkE_v&_nc_oc=AQnZji9SXkOiwgfnnpRDLog5LeWYuARmMP_hMfnlbfcIPyFO_dQvYlmswprv4apSt7Xs6h9hIoGL0vS8UHfRSXH3&_nc_ht=scontent.ffcm1-1.fna&oh=00_AfBwcbgffWF31ibZMo-IJzxt9PPOXJnotqs1U2lEPkRbvg&oe=64B08D21",
                "text":"SZA"
            },
            {
                "id":4,
                "image":"https://scontent.ffcm1-1.fna.fbcdn.net/v/t39.30808-1/289814811_586609189488303_3546382424054967327_n.jpg?stp=dst-jpg_p120x120&_nc_cat=1&cb=99be929b-3346023f&ccb=1-7&_nc_sid=c6021c&_nc_ohc=tMhCrH6zJwYAX8a7V_g&_nc_ht=scontent.ffcm1-1.fna&oh=00_AfBaKUozbSb95i1AVHkPjkAquTKUg0imjX6f8xsoLSi-4g&oe=64B1FE21",
                "text":"Kevin Hart"
            },
            {
                "id":5,
                "image":"https://scontent.ffcm1-2.fna.fbcdn.net/v/t1.6435-1/156932480_277967830359543_9115426162265437300_n.jpg?stp=dst-jpg_p120x120&_nc_cat=106&cb=99be929b-3346023f&ccb=1-7&_nc_sid=c6021c&_nc_ohc=HfOtThtUz8YAX_Npfan&_nc_ht=scontent.ffcm1-2.fna&oh=00_AfDGmRUNnu3ywrQjEQaJrONozlvxVh-QaOW5Z9BX1gJ8dg&oe=64D3C8B2",
                "text":"Drew Brees"
            },
            {
                "id":6,
                "image":"https://scontent.ffcm1-2.fna.fbcdn.net/v/t39.30808-1/331009977_1577828015975915_3406791739297939020_n.jpg?stp=dst-jpg_p120x120&_nc_cat=105&cb=99be929b-3346023f&ccb=1-7&_nc_sid=7206a8&_nc_ohc=is2z_NTarakAX8AKUw_&_nc_ht=scontent.ffcm1-2.fna&oh=00_AfC5EaQckkTli_PWsctWdhmw89ymxtIsBL7Q14NkQwZyFg&oe=64B0E725",
                "text":"Isaac Varzim"
            },
        ];
        this.setState({data: jsondata});
     }

     componentDidMount() {
         this.getData();
     }
    render() { 
        return ( 
            <div>
                <div className="rightside__container">
                
                    <div className="rightside__header">
                        Contacts
                    </div>
                    <div className="rightside__content">
                        <div>
                            <ImageLayout image="https://scontent.ffcm1-2.fna.fbcdn.net/v/t39.30808-1/327561013_582471203324506_3040817152926035477_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=106&cb=99be929b-3346023f&ccb=1-7&_nc_sid=7206a8&_nc_ohc=mgx9rFCWT20AX_NdQpW&_nc_oc=AQlzm2E-z59BfMjPIMadS1Pipw49f-uoqjp21g4kq0pd3T6fC4QlUz4W2DPrKSGmUhI&_nc_ht=scontent.ffcm1-2.fna&oh=00_AfCltIWW_jBRVCRvxeTENd5e2BF4uS3nQ7F0q15AjsTJ0g&oe=64AE065A" text="Troy Hicks"/>
                            {
                                this.state.data.map( (item) =>(
                                    <ImageLayout image={item.image} text={item.text}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
                
            </div>
         );
    }
}
 
export default RightSide;