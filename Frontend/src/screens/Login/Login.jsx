import React, {useState} from 'react';
import '../../index.css';
import {useHistory} from "react-router";
import {useDispatch} from "react-redux";
import {signin} from "../../actions/auth";

const initial = {

    userName:'',
    password:''

}

const Login = () => {

    const [loginData,setLoginData] = useState(initial);
    const history= useHistory();
    const dispatch = useDispatch();

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(loginData);

        dispatch(signin(loginData, history));

    };

    const handleChange = (e) =>{
        setLoginData({...loginData,[e.target.name]:e.target.value})

    }

    return(
        <div className="pageCenter loginForm">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-sm-3"> </div>
                    <label htmlFor="username" className="col-sm-2 col-form-label">User Name:</label>
                    <div className="col-sm-3 mb-2">
                        <input type="text"  name="userName" className="form-control" placeholder="User Name" onChange={handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3"> </div>
                    <label htmlFor="password" className="col-sm-2 col-form-label">Password:</label>
                    <div className="col-sm-3 mb-2">
                        <input type="text"  name="password" className="form-control" placeholder="Password" onChange={handleChange}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 center mt-2">
                        <button type="submit" className="button">Login</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-4 mt-2"> </div>
                    <div className="col-sm-4 right">
                        <a href="/register">Register</a>
                    </div>
                    <div className="col-sm-4 mt-2"> </div>
                </div>

            </form>

        </div>
    );

};

export default Login;

