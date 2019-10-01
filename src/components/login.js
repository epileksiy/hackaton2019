import React from "react";
import Router from "react-router";
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: "", password: ""};
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.hook = this.hook.bind(this);
    }

    handleChangeEmail(e) {
        this.setState({email: e.target.value});
    }

    handleChangePassword(e) {
        this.setState({password: e.target.value});
    }

    hook(post){
        var url = 'https://cors-anywhere.herokuapp.com/' + `http://95.213.38.13:8000/${post}`;
        let body = {
            'email': this.state.email,
            'password': this.state.password
        };

        fetch(url, {
            credentials: "same-origin",
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(res => res.json())
            .then(response => console.log('Успех:', JSON.stringify(response)))
            .catch(error => console.error('Ошибка:', error));
    }

    render() {
        return (
            <div className="regWindow">
                <div className="window">
                    <div>
                        <div className="centerlog">
                            <h2>Авторизация</h2>
                        </div>
                        <div className="pad">
                            <input type="text" value = {this.email} className="form-control" placeholder="Логин"
                                   onChange={this.handleChangeEmail}></input>
                            <input type="text" value = {this.password} className="form-control" placeholder="Пароль"
                                   onChange={this.handleChangePassword}></input>
                        </div>
                        <button type="button" className="btn btn-outline-warning pad" onClick={this.hook({post:"/login"})}>Войти</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;