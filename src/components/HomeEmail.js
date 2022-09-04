import React from "react"
import "./HomeEmail.css"
import profile from "../images/profile.png"

const HomeEmail = () => {
return(
    <div>
        <h2 className="home-title">Recent emails</h2>
        <div className="email">
          <img src={profile} className="email-photo"/>
          <h4 className="email-txt">Hannah Morgan</h4>
          <h4 className="email-txt">Meeting scheduled</h4>
          <h4 className="email-txt">1:24 PM</h4>
        </div>
        <div className="email">
          <img src={profile} className="email-photo"/>
          <h4 className="email-txt">Megan Clark</h4>
          <h4 className="email-txt">Update on marketing campaign</h4>
          <h4 className="email-txt">12:32 PM</h4>
        </div>
        <div className="email">
          <img src={profile} className="email-photo"/>
          <h4 className="email-txt">Brandon Williams</h4>
          <h4 className="email-txt">Designly 2.0 is about to launch</h4>
          <h4 className="email-txt">Yesterday at 8:57 PM</h4>
        </div>
        <div className="email">
          <img src={profile} className="email-photo"/>
          <h4 className="email-txt">Reid Smith</h4>
          <h4 className="email-txt">My friend Julie loves Dappr!</h4>
          <h4 className="email-txt">Yesterday at 8:49 PM</h4>
        </div>
    </div>
    )
}

export default HomeEmail