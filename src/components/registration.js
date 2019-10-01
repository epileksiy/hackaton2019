import React from 'react';

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {surname: "", name: "", patronymic: "", Email: "", password: ""};
        this.render = this.render.bind(this);
        this.handleChangeSurname = this.handleChangeSurname.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePatronymic = this.handleChangePatronymic.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.reg = this.reg.bind(this)
    }

    handleChangeSurname(e){
        this.setState({surname: e.target.value});
    }

    handleChangeName(e){
        this.setState({name: e.target.value});
    }

    handleChangePatronymic(e){
        this.setState({patronymic: e.target.value});
    }

    handleChangeEmail(e){
        this.setState({email: e.target.value});
    }

    handleChangePassword(e){
        this.setState({password: e.target.value});
    }

    reg() {
        var url = 'https://cors-anywhere.herokuapp.com/' + 'http://95.213.38.13:8000/home';
        let body = {
            'fio': this.state.surname + " " + this.state.name + " " + this.state.patronymic,
            'email': this.state.Email,
            'password': this.state.password
        };
        fetch(url, {
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
                        <div><center>
                            <h2><font color="white">Регистрация</font></h2></center>
                        </div>

                        <div className="pad">
                            <input type="text" className="form-control" placeholder="Фамилия" value={this.state.surname}
                                   onChange={this.handleChangeSurname}></input>

                            <input type="text" className="form-control" placeholder="Имя" value={this.state.name}
                                   onChange={this.handleChangeName}></input>

                            <input type="text" className="form-control" placeholder="Отчество" value={this.state.patronymic}
                                   onChange={this.handleChangePatronymic}></input>
                        </div>

                        <input type="text" className="form-control" placeholder="Почта" value={this.state.email}
                               onChange={this.handleChangeEmail}></input>

                        <input type="text" className="form-control" placeholder="Пароль" value={this.state.password}
                               onChange={this.handleChangePassword}></input>

                        <button type="button" className="btn btn-outline-warning pad" onClick={this.reg()}>Зарегистрироваться</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Registration;