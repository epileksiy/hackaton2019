import React from 'react';

class ProfileWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {phone: "", vk: "", placeOfWork: "", specialty: "", languages: "", experience: "", experienceWithChildren: "",
        skills: "", expectations: "", contraindications: "", photo: ""};
        this.render = this.render.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleChangeVk = this.handleChangeVk.bind(this);
        this.handleChangePlaceOfWork = this.handleChangePlaceOfWork.bind(this);
        this.handleChangeSpecialty = this.handleChangeSpecialty.bind(this);
        this.handleChangeLanguages = this.handleChangeLanguages.bind(this);
        this.handleChangeExperience = this.handleChangeExperience.bind(this);
        this.handleChangeChildren = this.handleChangeChildren.bind(this);
        this.handleChangeSkills = this.handleChangeSkills.bind(this);
        this.handleChangeExpectations = this.handleChangeExpectations.bind(this);
        this.handleChangeContraindications = this.handleChangeContraindications.bind(this);
        this.handleChangePhoto = this.handleChangePhoto.bind(this);
    }

    handleChangePhone(e){
        console.log(e.target.name);
        this.setState({phone: e.target.value})
    }

    handleChangeVk(e){
        console.log(e.target.name);
        this.setState({vk: e.target.value})
    }

    handleChangePlaceOfWork(e){
        console.log(e.target.name);
        this.setState({placeOfWork: e.target.value})
    }

    handleChangeSpecialty(e){
        console.log(e.target.name);
        this.setState({specialty: e.target.value})
    }

    handleChangeLanguages(e){
        console.log(e.target.name);
        this.setState({languages: e.target.value})
    }

    handleChangeExperience(e){
        console.log(e.target.name);
        this.setState({experience: e.target.value})
    }

    handleChangeChildren(e){
        console.log(e.target.name);
        this.setState({children: e.target.value})
    }

    handleChangeSkills(e){
        console.log(e.target.name);
        this.setState({skills: e.target.value})
    }

    handleChangeExpectations(e){
        console.log(e.target.name);
        this.setState({expectations: e.target.value})
    }

    handleChangeContraindications(e){
        console.log(e.target.name);
        this.setState({contraindications: e.target.value})
    }

    handleChangePhoto(e){
        console.log(e.target.name);
        this.setState({photo: e.target.value})
    }


render() {
    return (
        <div class="regWindow">
            <div className="window">
                <div>
                    <div className="center">
                        <h2>Анкета волонтера</h2>
                    </div>

                    <div className="pad">
                        <input type="text" className="form-control" placeholder="Номер телефона" value={this.state.surname}
                               onChange={this.handleChangePhone}></input>
                        <input type="text" className="form-control" placeholder="Ссылка на страницу Вконтакте" value={this.state.surname}
                               onChange={this.handleChangeVk}></input>
                        <input type="text" className="form-control" placeholder="Место работы/учебы" value={this.state.surname}
                               onChange={this.handleChangePlaceOfWork}></input>
                        <input type="text" className="form-control" placeholder="Специальность" value={this.state.surname}
                               onChange={this.handleChangeSpecialty}></input>
                        <input type="text" className="form-control" placeholder="Какими языками владеете ?" value={this.state.surname}
                               onChange={this.handleChangeLanguages}></input>
                        <input type="text" className="form-control" placeholder="Опыт волонтерства" value={this.state.surname}
                               onChange={this.handleChangeExperience}></input>
                        <input type="text" className="form-control" placeholder="Есть ли у вас опыт работы с детьми?" value={this.state.surname}
                               onChange={this.handleChangeChildren}></input>
                        <input type="text" className="form-control" placeholder="Какие дополнительные навыки могут быть полезны в сотрудничестве с Политехом?" value={this.state.surname}
                               onChange={this.handleChangeSkills}></input>
                        <input type="text" className="form-control" placeholder="Какие ожидания у вас от волонтерства в проектах Политехнического музея?" value={this.state.surname}
                               onChange={this.handleChangeExpectations}></input>
                        <input type="text" className="form-control" placeholder="Есть ли у Вас медицинские противопоказания, аллергия, в т.ч. на животных?" value={this.state.surname}
                               onChange={this.handleChangeContraindications}></input>
                        <input type="text" className="form-control" placeholder="Ссылка на Ваше фото" value={this.state.surname}
                               onChange={this.handleChangePhoto}></input>

                    </div>
                    <button type="button" className="btn btn-outline-warning pad">Зарегистрироваться</button>
                </div>
            </div>
        </div>
    );
}
}
export default ProfileWindow;