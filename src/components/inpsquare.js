import React from 'react';

class Inpsquare extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", description: "", geo: ""};
        this.render = this.render.bind(this);
        this.handleChangeDescription= this.handleChangeDescription.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeGeo = this.handleChangeGeo.bind(this);
        this.reg = this.reg.bind(this)
    }

    handleChangeDescription(e){
        this.setState({description: e.target.value});
    }

    handleChangeName(e){
        this.setState({name: e.target.value});
    }

    handleChangeGeo(e){
        this.setState({geo: e.target.value});
    }

    reg() {
        var url = 'https://cors-anywhere.herokuapp.com/' + 'http://95.213.38.13:8000/addsq';
        let body = {
            'description': this.state.description,'name':this.state.name ,'geo':this.state.geo
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
                            <h2><font color="white">Добавление площадки</font></h2></center>
                        </div>

                        <div className="pad">
                            <input type="text" className="form-control" placeholder="Название" value={this.state.name}
                                   onChange={this.handleChangeName}></input>

                            <input type="text" className="form-control" placeholder="Описание" value={this.state.description}
                                   onChange={this.handleChangeDescription}></input>

                            <input type="text" className="form-control" placeholder="Геометка" value={this.state.geo}
                                   onChange={this.handleChangeGeo}></input>
                        </div>
                        <button type="button" className="btn btn-outline-warning pad" onClick={this.reg()}>Добавить</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Inpsquare;