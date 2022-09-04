import React from "react"
import "./Nav.css"

import logo from "../images/logo.png"
import home from "../images/home.png"
import statistic from "../images/statistic.png"
import finance from "../images/finance.png"
import mail from "../images/mail.png"
import meeting from "../images/meeting.png"
import document from "../images/document.png"
import money from "../images/money.png"
import settings from "../images/settings.png"
import profile from "../images/profile.png"

const Nav = () => {
    return(
        <div className="nav">
        <img src={logo} className="Logo"/>
        <div className="nav-menu">
          <div className="nav-icons">
            <img src={home}/>
            <img src={statistic}/>
            <img src={finance}/>
            <img src={mail}/>
            <img src={meeting}/>
            <img src={document}/>
            <img src={money}/>
          </div>
          <div>
            <img className="nav-setting" src={settings}/>
            <img src={profile} className="profile-photo"/>
          </div>
        </div>
        </div>
    )
}

export default Nav