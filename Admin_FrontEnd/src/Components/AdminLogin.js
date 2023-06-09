import React,{useState,useContext} from 'react'
import {Loginuser} from '../service';

import { withRouter, useHistory } from 'react-router-dom';


 function  AdminLogin() {
// const {loginUser, setLoginUser} = useContext(loginpassData)
  const history = useHistory();
    function Handlelogin(){
        var mail = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        var reqdata = {
            "Email": mail,
            "Password": password,
            "role":1
        }
        
        Loginuser('user/login',reqdata).then((res) => {
            
            if(res && !res.error){
                localStorage.setItem('jwtoken',res.data.Token);
                localStorage.setItem('role',res.data.role)
                localStorage.setItem('superAdmin',res.data.SuperAdmin)
                localStorage.setItem('AdminAccess',res.data.AdminAccess)
                alert(res.message)
                   history.push({
                    pathname: (`/Teams`)
                })

            }else{
                alert(res.message);
            }
        })
    }
    return (
        <div>
            <nav class="navbar navbar-light bg-info">
                <a class="navbar-brand" href="#">
                    <img src="https://w7.pngwing.com/pngs/419/473/png-transparent-computer-icons-user-profile-login-user-heroes-sphere-black-thumbnail.png" width="30" height="30" class="d-inline-block align-top" alt="" />
                   Super Admin Login!
                </a>
            </nav>
            <h1>Super Admin Login</h1>
            <div className='container'>
                <div className='row'>
                    <div class="card text-center col-md-12 col-md-offset-6">
                        <div class="card-body ">

                            <form className='form-control form1'>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />

                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" class="form-control" id="password" placeholder="Password" />
                                </div>
                                <br />
                                <button type="button" class="btn btn-success" onClick={()=>Handlelogin()}>Login</button>
                            </form>


                        </div>

                    </div>
                </div>
            </div> 
           
        </div>
    )
}
export default withRouter(AdminLogin);
