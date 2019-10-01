import React from "react";
function Squares() {
    return(
        <div className="tasks">
            <h2><a href="/addsq" className="badge badge-light">Добавить площадку</a></h2>
            <h1>Доступные площадки:</h1>
            <ul>
                <li><font color="white"><h2>Площадка 1</h2></font></li>
                <li><font color="white"><h2>Площадка 2</h2></font></li>
                <li><font color="white"><h2>Площадка 3</h2></font></li>
            </ul>
        </div>
    )
}
export default Squares;