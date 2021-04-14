import React from 'react'

const LoginView = () => {
    return (
        <div className="container">
            <div className="row">
                <form className="col s12 center-align">
                    <div className="row center-align">
                        <div className="col s3"></div>
                        <div className="input-field col s6">
                            <input id="user" type="text" className="validate" />
                            <label for="user">User</label>
                        </div>
                    </div>
                    <div className="row center-align">
                        <div className="col s3"></div>
                        <div className="input-field col s6">
                            <input id="password" type="password" className="validate" />
                            <label for="password">Password</label>
                        </div>
                    </div>
                    <div className="row center-align">
                        <a href="#1" className="waves-effect waves-light btn">Login</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginView;
