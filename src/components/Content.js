import React from "react";
import Home from "./Home";
import Profile from "./profile";
import Tasks from "./Tasks";
import Map from"./Map";
import Squares from "./Squares";

class Content extends React.Component {

    activePanel(props) {
        if (this.props.panel === "home") {
            return (
                <div className="center">
                    <Home/>
                </div>
            )
        }
        else if (this.props.panel === "profile") {
            return (
                <div>
                    <Profile/>
                </div>
            )
        }
        else if (this.props.panel === "tasks") {
            return (
                <div>
                    <Tasks/>
                </div>
            )
        }
        else if (this.props.panel === "map") {
            return (
                <div>
                    <Map/>
                </div>
            )
        }
        else if (this.props.panel === "squares") {
            return (
                <div>
                    <Squares/>
                </div>
            )
        }
        else{
            return(
                <div>
                    <p>А тут ничего нет.</p>
                    <p>{this.props.panel}</p>
                </div>
            )
            }
    }
    render(){
        return(
            <div>
                {this.activePanel()}
            </div>
        );
    }
}

export default Content;
