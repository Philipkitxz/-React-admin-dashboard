import React from "react";
import './Tobar.css'
import {Language, NotificationsNone, Settings} from '@material-ui/icons'
import {Link} from "react-router-dom"

const Tobar = () => {
  return <div className="tobar">
      <div className="topbarWrapper">
        <div className="topLeft">
             <Link to="/" className="link">
             <span className="logo">Madooh</span>
             </Link>
           </div>
        <div className="topRight">
          <div className="topbarIconsContainer">
            <NotificationsNone/>
              <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconsContainer">
            <Language/>
              <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconsContainer">
            <Settings/>
          </div>
            <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="" className="topAvatar" />
        </div>
      </div>
  </div>;
};

export default Tobar;
