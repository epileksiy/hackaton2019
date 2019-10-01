import React from "react";
import Content from "./Content";
import Info from "./info";

class navigationPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {activePanel: "tasks"};
        this.changePanel = this.changePanel.bind(this);
    }

    changePanel(panel) {
        this.setState({activePanel: panel})
    }

    render() {
        return(
            <div className="page">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-1 navbar">
                                <nav className="navbar navbar-dark bg-inverse">
                                    <ul className="nav navbar-nav">
                                        <li className="nav-item">
                                            <a className="nav-link " ><font color="white">Меню</font></a>
                                        </li>
                                        <li className="nav-item">
                                            <a onClick={this.changePanel.bind(this,"home")} className="nav-link" href="#home">Домой</a>
                                        </li>
                                        <li className="nav-item">
                                            <a onClick={this.changePanel.bind(this,"profile")} className="nav-link" href="#profile">Профиль <span className="sr-only">(current)</span></a>
                                        </li>
                                        <li className="nav-item">
                                            <a onClick={this.changePanel.bind(this,"tasks")} className="nav-link" href="#tasks">Проекты</a>
                                        </li>
                                        <li className="nav-item">
                                            <a onClick={this.changePanel.bind(this,"map")} className="nav-link" href="#map">Карта</a>
                                        </li>
                                        <li className="nav-item">
                                            <a onClick={this.changePanel.bind(this,"squares")} className="nav-link" href="#squares">Площадки</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-sm-2 leftcont">
                                <Info panel={this.state.activePanel}/>
                            </div>
                            <div className="col-sm-8 content">
                                <Content panel={this.state.activePanel}/>
                            </div>
                            <div className="col-sm-1">
                            </div>

                        </div>
                    </div>
            </div>
        );
    }
}

export default navigationPanel;