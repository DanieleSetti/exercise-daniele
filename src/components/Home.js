import React from "react"
import "./Home.css"
import HomeRevenue from "./HomeRevenue.js"
import HomeEmail from "./HomeEmail.js"
import HomeTodo from "./HomeTodo.js"

const Home = () => {
    return(
    <div className="home">

      <HomeRevenue />

      <HomeEmail />

      <HomeTodo />
    </div>
    )
}

export default Home