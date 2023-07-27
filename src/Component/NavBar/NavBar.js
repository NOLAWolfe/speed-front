import React, { Component } from 'react';
import "./NavBar.css";
import Grid from '@mui/material/Grid';
import spdlogo from "../../images/favicon 2.ico";
import home from "../../images/home.svg";
import page from "../../images/pages.svg";
import watch from "../../images/watch.svg";
import market from "../../images/market.svg";
import group from "../../images/groups.svg";
import { Avatar, IconButton } from '@mui/material';
import {getAuth,signOut} from "firebase/auth";
import LogoutIcon from '@mui/icons-material/Logout';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signIn: true,
        }
    }

    logoutMethod = () => {
        if(this.state.signIn) this.setState({signIn: false});
    }

    signOutMethod =()=>{
        const auth = getAuth();
        signOut(auth)
          .then(() => {
            this.state.signIn = false;
            localStorage.removeItem("user");
            // window.localStorage.clear();
            window.location.reload();
          })
          .catch((error) => {
          })
          .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    }

    render() { 
        return ( 
            <div>
                <Grid container className='navbar__main'>
                    {/* totall summation value of grid should be 12 */}
{/* r xs 6 sm 6 md 3 lg 3*/}
{/* m xs hide, md hide, md 6, lg 6 */}
{/* l xs 6 sm 6 md 3 lg 3*/}
                    <Grid item xs = {6} sm={6} md={3} lg={3}>
                        <div className="navbar__leftBar">
                            <img className='navbar__logo' src={spdlogo} width="40px " alt=''/>
                            <input className="navbar__search" type="text" placeholder='Search The Speed'></input>
                        </div>
                    </Grid>

                    <Grid item sx={{display: {xs: 'none', sm: 'none', md:'block', lg:'block'}}}md={6} lg={6}>
                        <div className="navbar__container">
                            <div className="navbar__tabs active">
                                <img src={home} height="35px" width="35px" alt="" />
                            </div>
                            <div className="navbar__tabs">
                                <img src={page} height="35px" width="35px" alt="" />
                            </div>
                            <div className="navbar__tabs">
                                <img src={watch} height="35px" width="35px" alt="" />
                            </div>
                            <div className="navbar__tabs">
                                <img src={market} height="35px" width="35px" alt="" />
                            </div>
                            <div className="navbar__tabs">
                                <img src={group} height="35px" width="35px" alt="" />
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={6} sm={6} md={3} lg={3}>
                        <div className="navbar__rightcontainer">
                            <div className="navbar__righttab">
                                <Avatar className='navbar__rightimg' src="https://scontent.ffcm1-2.fna.fbcdn.net/v/t39.30808-1/327561013_582471203324506_3040817152926035477_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=106&cb=99be929b-3346023f&ccb=1-7&_nc_sid=7206a8&_nc_ohc=mgx9rFCWT20AX_NdQpW&_nc_oc=AQlzm2E-z59BfMjPIMadS1Pipw49f-uoqjp21g4kq0pd3T6fC4QlUz4W2DPrKSGmUhI&_nc_ht=scontent.ffcm1-2.fna&oh=00_AfCltIWW_jBRVCRvxeTENd5e2BF4uS3nQ7F0q15AjsTJ0g&oe=64AE065A"/>
                                <div className="navbar__profilename">Troy</div>
                                <div className="navbar__rightbutton">
                                    <IconButton aria-label="logout" onClick={this.signOutMethod}> 
                                        <LogoutIcon/> 
                                    </IconButton>     
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div> 
        );
    }
}
 
export default NavBar;