import React from "react"
import "./HomeTodo.css"

import home from "../images/home.png"
import meeting from "../images/meeting.png"
import money from "../images/money.png"

const HomeTodo = () => {
    return(
        <div>
        <h2 className="home-title">Your to-Do list</h2>
        <div className="home-todo">
          <div className="todo-task">
            <div className="home-todo-img"><img src={home}/></div>
            <div className="todo-task-txt">
              <h3>Run payroll</h3>
              <h4 className="task-subtitle">Mar 4 at 6:00 pm</h4>
            </div>
          </div>
          <div className="todo-task">
            <div className="home-todo-img"><img src={money}/></div>
            <div className="todo-task-txt">
              <h3>Review time off request</h3>
              <h4 className="task-subtitle">Mar 7 at 6:00</h4>
            </div>
          </div>
          <div className="todo-task">
            <div className="home-todo-img"><img src={meeting}/></div>
            <div className="todo-task-txt">
              <h3>Sign board resolution</h3>
              <h4 className="task-subtitle">Mar 12 at 6:00 pm</h4>
            </div>
          </div>
        </div>
      </div>
    )
}

export default HomeTodo