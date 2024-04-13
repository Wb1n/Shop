import React from "react"
import "./style.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import { Input } from "@mui/material"
import { useState } from "react"
import Modal from "antd/es/modal/Modal"
import axios from "axios"
const Login = () => {
    const User = {
      name:"",
      password:""
    }


    const [visiable1,setVisiable1] = useState(false);
    const login=(prop)=>{
      User.name = (document.getElementById('userName').value)
      User.password = document.getElementById('password').value
      console.log('user',User);
      axios({
          method:'GET',
          url:'/login',
          params:User
    }).then(response=>{
      console.log('res',response.data)
      if(response.data !== ''){
      localStorage.setItem("access-admin",JSON.stringify(response.data.token))
      window.open('/admin','_self')
      return response;
    }
      openModal1();
      console.log("error")
      return null;
    })
      
    }
    
  const openModal1 = () =>{setVisiable1(true)}
    const closeModal = () =>{
    
      
      setVisiable1(false)
    }
    const onOK1=()=>{    
      closeModal();
  
    }
    
    return (
      <>
        <section className='login-items'>
          <div className='container d_flex'>
            <div className='login-total product'>
              <div className='login-data'>请登录</div>
              <div className="userinfo">
                <div className="d_flex">
                  <div className="userName">账号:</div><Input id="userName" type="text"></Input>
                </div>
                <div className="d_flex">
                  <div className="password">密码:</div><Input id="password" type="password" ></Input>
                  </div>
              </div>
              <div className="d_flex">
                <div>
                  <button className="login_button" onClick={login}>Login</button>
                </div>
              </div>
              
              </div>
              <Modal
            title={"提示"}
            open={visiable1}
            onOk={onOK1}
            onCancel={closeModal}
            >
              <p>密码错误</p>
                  </Modal>
          </div>
        </section>
      </>
    )
  }
  
  export default Login