import React, { useState, useEffect } from "react";
import "./render.css";
import axios from "./axios";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton } from "@material-ui/core";
function Video({ email, username }) {
  const [seed, setseed] = useState("");
  useEffect(() => {
    var bgColor = ["#1ec891", "#ff725e", "#ffd05b", "#0960eb", "#eb0909"];
    setseed(bgColor[Math.floor(Math.random() * bgColor.length)]);
  },[]);
  const handleVideoPress = async (event) => {
    var mail = event.currentTarget.value;
    var res = await axios.delete('delete_existing_user',{
      email: mail,
    });
    if (res.data.status === "Error") {
      alert(res.data.message);
    } else {
      alert(res.data.message);
    }
  };

  return (
    <div className="username">
      <div
        className="circle top left"
        style={{ background: seed, color: "white" }}
      >
        <p className="text">{username[0].toUpperCase()}</p>
      </div>
      <div className="name ntop nleft">
        <p>{username}</p>
      </div>
      <div className="delete dleft dtop">
        <IconButton type="submit" value={email} onClick={handleVideoPress}>
          <DeleteIcon></DeleteIcon>
        </IconButton>
      </div>
    </div>
  );
}

export default Video;