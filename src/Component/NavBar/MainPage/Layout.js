import React, { Component } from "react";
import "./MainPage.css";
import Grid from '@mui/material/Grid';
import LeftSide from "./LeftSidePanel/LeftSide";
import StatusBar from "./StatusBar/StatusBar";
import UploadSection from "./UploadSection/UploadSection";
import PostContainer from "./PostContainer/PostContainer";
import RightSide from "./RightSidePanel/RightSide";

class Layout extends Component {
    // const styles = (theme) => ({
    //     root: {
    //       // Match [md, ∞)
    //       //       [900px, ∞)
    //       [theme.breakpoints.up('md')]: {
    //         display: none,
    //       },
    //     },
    //   }); 

    state = {  }
    render() { 
        return ( 
            <div className="mainpage__container">
                <Grid container>
                    <Grid item xs= {0} sm={0} md={3} lg={3} >
                        <LeftSide />
                    </Grid>
                    <Grid item xs= {12} sm={9} md={6} lg={6} >
                        <div className="middleContainer">

                            <StatusBar />
                            <UploadSection />
                            <PostContainer />
                        </div>
                    </Grid>
                    <Grid item xs= {0} sm={3} md={3} lg={3}>
                        <RightSide/>
                    </Grid>
                </Grid>
            </div>
         );
    }
}
 
export default Layout;