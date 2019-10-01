import React from "react";
import Nav from"./Nav"
class Info extends React.Component {

    infopanel(props) {
        if (this.props.panel == "home") {
            return (
                <div>
                    <h2> Сервис </h2>
                    <p> Книжка волонтера </p>
                </div>
            )
        }
        else if (this.props.panel == "profile") {
            return (
                <div>
                    <h2> Профиль </h2>
                    <p> Книжка волонтера </p>
                </div>
            )
        }
        else if (this.props.panel == "tasks") {
            return (
                <div>
                    <h2> Задачи </h2>
                    <p> Книжка волонтера </p>
                </div>
            )
        }
        else if (this.props.panel == "map") {
            return (
                <div>
                    <h2> Карта </h2>
                    <p> Книжка волонтера </p>
                </div>
            )
        }
        else if (this.props.panel == "squares") {
            return (
                <div>
                    <h2> Площадки </h2>
                    <p> Книжка волонтера </p>
                </div>
            )
        }
        else{
            return (
                <div>
                    <h2> Ого </h2>
                    <p> Пасхалочка </p>
                </div>
            )
        }
    }
    render(){
        return(
            <div>
                {this.infopanel()}
            </div>
        );
    }
}
export default Info;