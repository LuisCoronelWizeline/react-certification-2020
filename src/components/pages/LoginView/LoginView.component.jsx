import React, { useState, useContext } from 'react';
import UserContext from '../../../context/user/userContext';
import Navbar from '../../Navbar/Navbar.component';

const LoginView = () => {

    const userContext = useContext(UserContext);

    const [textUser, setTextUser] = useState('');
    const [textPassword, setTextPassword] = useState(''); 

    const onChangeUser = e => {
        setTextUser(e.target.value);
        console.log('rigth now the placeholder should say: ' + textUser);
    }

    const onChangePassword = e => {
        setTextPassword(e.target.value);
        console.log('rigth now the placeholder should say: ' + textPassword);
    }

    const onSubmitLogin = e => {
        e.preventDefault();
        userContext.loginTheUser(textUser, textPassword);
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <form onSubmit={onSubmitLogin} className="col s12 center-align">
                        <div className="row center-align">
                            <div className="col s3"></div>
                            <div className="input-field col s6">
                                <input id="user" type="text" className="validate" value={textUser} required onChange={onChangeUser} />
                                <label htmlFor="user">User</label>
                            </div>
                        </div>
                        <div className="row center-align">
                            <div className="col s3"></div>
                            <div className="input-field col s6">
                                <input id="password" type="password" className="validate" value={textPassword} required onChange={onChangePassword}/>
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="row center-align">
                            <button className="waves-effect waves-light btn">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginView;
