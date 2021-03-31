import React, {useState} from 'react';
import '../../index.css'
import stateList from '../../mock/state.json';
import {useHistory} from "react-router";
import {useDispatch} from "react-redux";
import {signup} from "../../actions/auth";


const initialState = {
    firstName:'',
    lastName:'',
    userName:'',
    password:'',
    confirmPassword:'',
    Email:'',
    PhoneNumber:'',
    MobileNumber:'',
    state: '',
    country: ''
}

const Register = () =>{
       const [formData,setFormData] = useState(initialState);
       const history= useHistory();
       const dispatch = useDispatch();

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formData);

        dispatch(signup(formData, history));

    };

    const handleChange = (e) =>{
        setFormData({...formData,[e.target.name]:e.target.value})

    }

    const listState = stateList.listStates.map((item, key) =>
        <option key={key} value={item.name}>{item.name}</option>
    );
        return (
           <div className="pageCenter loginForm">
               <form onSubmit={handleSubmit}>
               <div className="row">
                   <label className="col-sm-2 col-form-label">Name</label>
                   <div className="col-sm-3 mb-1">
                    <input type="text" name="firstName" className="form-control" placeholder="First Name" onChange={handleChange} />
                   </div>
                   <div className="col-sm-3 mb-1">
                       <input type="text" name="lastName" className="form-control" placeholder="Last Name" onChange={handleChange} />
                   </div>
                   <div className="col-sm-3 mb-2">
                       <input type="text"  name="userName" className="form-control" placeholder="User Name" onChange={handleChange} />
                   </div>
               </div>
               <div className="row">
                   <label className="col-sm-2 col-form-label">Password</label>
                   <div className="col-sm-3 mb-2">
                       <input type="password" name="password" className="form-control" placeholder="Password" onChange={handleChange}/>
                   </div>
                   <div className="col-sm-3 mb-2">
                       <input type="password" name="confirmPassword" className="form-control" placeholder="Confirm Password" onChange={handleChange}/>
                   </div>
               </div>
               <div className="row">
                   <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                   <div className="col-sm-6 mb-2">
                       <input type="email" name="Email" className="form-control" placeholder="Email" onChange={handleChange}/>
                   </div>
               </div>
               <div className="row">
                   <label htmlFor="telephone" className="col-sm-2 col-form-label">Tel</label>
                   <div className="col-sm-3 mb-2">
                       <input type="text"  name="PhoneNumber" className="form-control" placeholder="PhoneNumber" onChange={handleChange}/>
                   </div>
                   <div className="col-sm-3 mb-2">
                       <input type="text"  name="MobileNumber" className="form-control" placeholder="MobileNumber" onChange={handleChange}/>
                   </div>
               </div>
               <div className="row">
                   <label htmlFor="staticEmail1" className="col-sm-2 col-form-label">State</label>
                   <div className="col-sm-6 mb-2">
                       <select className="custom-select"  name="state" id="inlineFormCustomSelect" onChange={handleChange}>
                               {listState}
                       </select>
                   </div>
               </div>
               <div className="row">
                   <label htmlFor="staticEmail1" className="col-sm-2 col-form-label">Country</label>
                   <div className="col-sm-6 mb-2">
                       <select className="custom-select"  name="country" id="inlineFormCustomSelect" onChange={handleChange}>
                           <option value="SriLanka">Sri Lanka</option>
                           <option value="India">India</option>
                       </select>
                   </div>
               </div>
               <div className="row">
                   <div className="col-sm-5 mb-2">
                   </div>
                   <div className="col-sm-4">
                       <button type="submit" className="button" >Submit</button>
                   </div>
               </div>
               </form>
           </div>
        );

};

export default Register;


