import React from "react"
import "./PersonalInfo.css"

import wallet from "../images/wallet.png"
import chart from "../images/chart.png"
import clock from "../images/clock.png"
import creditcart from "../images/creditcart.png"

const PersonalInfo = () => {
    return(
        <div className="personal-info">
        <h2>Good morning, James!</h2>
        <div className="pi-block">
          <div className="pi-block-img"><img src={wallet}/></div>
          <div className="pi-block-txt">
            <h1>$143,624</h1>
            <h4>Your bank balance</h4>
          </div>
        </div>
        <div className="pi-block">
          <div className="pi-block-img"><img src={chart}/></div>
          <div className="pi-block-txt">
            <h1>1240</h1>
            <h4>Uncategorized transactions</h4>
          </div>
        </div>
        <div className="pi-block">
          <div className="pi-block-img"><img src={clock}/></div>
          <div className="pi-block-txt">
            <h1>147</h1>
            <h4>Employees working today</h4>
          </div>
        </div>
        <div className="pi-block">
          <div className="pi-block-img"><img src={creditcart}/></div>
          <div className="pi-block-txt">
            <h1>$3,287.49</h1>
            <h4>This week's card spending</h4>
          </div>
        </div>

      <div className="pi-statistic">
        <div className="statistic-container">
          <h3>New clients</h3>
          <div className="statistic-block">
            <h1>54</h1>
            <h4 className="nc-percentage">+18.7%</h4>
          </div>
        </div>
          <div className="statistic-container">
            <h3>Invoices overdue</h3>
            <div className="statistic-block">
              <h1>6</h1>
              <h4 className="io-percentage">+2.7%</h4>
              </div>
          </div>
        </div>
      </div>
    )
}

export default PersonalInfo