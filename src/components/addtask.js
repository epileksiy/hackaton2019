import React from 'react';

class Addtask extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", description: "", sq: ""};
        this.render = this.render.bind(this);
        this.handleChangeDescription= this.handleChangeDescription.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeSq = this.handleChangeSq.bind(this);
        this.reg = this.reg.bind(this)
    }

    handleChangeDescription(e){
        this.setState({description: e.target.value});
    }

    handleChangeName(e){
        this.setState({name: e.target.value});
    }

    handleChangeSq(e){
        this.setState({sq: e.target.value});
    }

    reg() {
        var url = 'https://cors-anywhere.herokuapp.com/' + 'http://95.213.38.13:8000/addtask';
        let body = {
            'description': this.state.description,'name':this.state.name ,'square':this.state.sq
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
                            <h2><font color="white">Добавление проекта</font></h2></center>
                        </div>

                        <div className="pad">
                            <input type="text" className="form-control" placeholder="Название проекта" value={this.state.name}
                                   onChange={this.handleChangeName}></input>

                            <input type="text" className="form-control" placeholder="Описание" value={this.state.description}
                                   onChange={this.handleChangeDescription}></input>

                            <input type="text" className="form-control" placeholder="Площадка" value={this.state.sq}
                                   onChange={this.handleChangeSq}></input>
                        </div>
                        <button type="button" className="btn btn-outline-warning pad" onClick={this.reg()}>Добавить</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Addtask;