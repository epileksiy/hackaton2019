import React from "react";
function Profile(){
    return(
        <div className="container">
            <div className="row">
                    <div className="col-sm-6 profile">
                        <div className="text2">
                        <h2>
                            <p>Фамилия</p>
                            <p>Имя</p>
                            <p>01.10.2000</p>
                            <p>volonterspb@gmail.com</p>
                            <p  className="badge badge-light"><a href="https:/vk.com">Ссылка вк</a></p>
                            <p>88005553535</p>
                            <p>Карма: </p>
                            <progress value="40" max="100"></progress>
                        </h2>
                        </div>
                    </div>
                    <div className="col-sm-6 image">

                    </div>
            </div>
        </div>
    )
}
export default Profile;