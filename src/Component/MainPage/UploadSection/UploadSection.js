import { Avatar, IconButton, Paper } from "@mui/material";
import React, { Component } from "react";
import "./UploadSection.css";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

import ListItemText from "@mui/material/ListItemText";
import ListItemAvater from "@mui/material/ListItemAvatar";
import ListItem from "@mui/material/ListItem";
import CloseIcon from "@mui/icons-material/Close";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

import {v4} from 'uuid';

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import live from "../../../images/video.png";
import image from "../../../images/image.png";
import feelings from "../../../images/feelings.png";
import ImageLayout from "../ImageLayout";

class UploadSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      // dialogOpen:false,
      uploadImage: null,
    };
  }
  handleClose = () => {
    this.setState({
      open: false,
    });
  };
  onClose = () => {
    this.setState({
      open: false,
    });
  };

  openDialog = (event) => {
    console.log("attempted to open Dialog box");
    this.setState({ open: true });
    if (event.target.files.length !== 0) {
      this.setState({
        uploadImage: URL.createObjectURL(event.target.files[0]),
      });
    }
    this.setState({image: event.target.files[0]});
  };

  uploadToFireBase = (event) => {
    const storage = getStorage();
    const storageRef = ref(storage, `images/${this.state.image.name + v4()}` );
    
    const uploadTask = uploadBytesResumable(storageRef, this.state.image);
    
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          case "success":
            alert("image uploaded");
            this.setState({open: false});
            window.location.reload();
            break;
          //no default
        }
      },
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
        });
      }
    );
  };

  render() {
    return (
      <div>
        {/* onClose={this.handleClose} */}
        <Dialog
          aria-labelledby="simple-dialog-title"
          className="upload__dialogbox"
          open={this.state.open}
        >
          <div className="dialog__header">
            <DialogTitle>Create Post</DialogTitle>
            <IconButton
              aria-label="close"
              onClick={this.onClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 12,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </div>

          <div className="dialog__userinfo">
            <ImageLayout
              image="https://scontent.ffcm1-2.fna.fbcdn.net/v/t39.30808-1/327561013_582471203324506_3040817152926035477_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=106&cb=99be929b-3346023f&ccb=1-7&_nc_sid=7206a8&_nc_ohc=mgx9rFCWT20AX_NdQpW&_nc_oc=AQlzm2E-z59BfMjPIMadS1Pipw49f-uoqjp21g4kq0pd3T6fC4QlUz4W2DPrKSGmUhI&_nc_ht=scontent.ffcm1-2.fna&oh=00_AfCltIWW_jBRVCRvxeTENd5e2BF4uS3nQ7F0q15AjsTJ0g&oe=64AE065A"
              text="Troy Hicks"
            />
          </div>

          <input
            type="text"
            className="upload__textbox"
            placeholder="What's on your mind, {user.name}"
          />
          <img
            src={this.state.uploadImage}
            className="upload__preview"
            alt=""
          />
          <input onClick={this.uploadToFireBase} type="button" value="Post" className="upload__button" />
        </Dialog>

        <Paper className="upload__container">
          <div className="upload__top">
            <div>
              <Avatar
                className="upload__img"
                src="https://scontent.ffcm1-2.fna.fbcdn.net/v/t39.30808-1/327561013_582471203324506_3040817152926035477_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=106&cb=99be929b-3346023f&ccb=1-7&_nc_sid=7206a8&_nc_ohc=mgx9rFCWT20AX_NdQpW&_nc_oc=AQlzm2E-z59BfMjPIMadS1Pipw49f-uoqjp21g4kq0pd3T6fC4QlUz4W2DPrKSGmUhI&_nc_ht=scontent.ffcm1-2.fna&oh=00_AfCltIWW_jBRVCRvxeTENd5e2BF4uS3nQ7F0q15AjsTJ0g&oe=64AE065A"
              />
            </div>
            <div>
              <input
                className="upload__box"
                placeholder="Whats on your mind?"
                type="text"
              />
            </div>
          </div>
          <div className="upload__bottom">
            <div className="upload__tabs">
              <img src={live} width="35px" alt="" />
              <div className="upload__text">Live Video</div>
            </div>
            <div className="upload__tabs">
              <label for="file-upload" className="upload__tabs">
                <img src={image} width="35px" alt="" />
                <div className="upload__text">Photo/Video</div>
              </label>
              <input type="file" id="file-upload" onChange={this.openDialog} />
            </div>
            <div className="upload__tabs">
              <img src={feelings} width="35px" alt="" />
              <div className="upload__text">Feeling/Activity</div>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default UploadSection;
