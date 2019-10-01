import React from "react";
function Tasks(){
    return(
        <div className="tasks">
            <h2><a href="/addtask" className="badge badge-light">Добавить проект</a></h2>
            <h1>Актуальные задачи: </h1>
            <ul>
                <li><font color="white"><h2>Покушать</h2></font></li>
                <li><font color="white"><h2>А потом помыть пол</h2></font></li>
                <li><font color="white"><h2>Насрать Егору в рот</h2></font></li>
            </ul>
        </div>
    )
}
export default Tasks;