import React, { useEffect } from "react"
import { useState } from "react"
import "./style.css"
import axios from "axios"
import { TextField } from "@mui/material"
import Modal from "antd/es/modal/Modal"
import logo from "../../components/assets/images/logo.jpg"
const Home = () => {
    axios.defaults.baseURL = 'http://localhost:8080/api/v1';
    axios.defaults.headers.post ['Content-Type'] = 'application/json';
    const [visiable1,setVisiable1] = useState(false);
    const [pass,setPass] = useState(true)
    const User = {
        name:'',
        password:''
    }
    const check = ()=>{
      User.name = (document.getElementById('Name').value)
      User.password = document.getElementById('Password').value
      console.log('user',User)
      axios({
        method:'GET',
        url:'/login',
        params:User
  }).then(response=>{
    console.log('res',response.data)
    if(response.data !== ''){
      console.log("pass")
    setPass(true)
    localStorage.setItem("access-admin",JSON.stringify(response.data.token))
    window.open('/home','_self')

    return response;
    }else{
      console.log('unpass')
    setPass(false)
    }
   
  })
    }
    const login = ()=>{
      setVisiable1(true)
    }
    
    const tip = ()=>{
      if(pass === true){
        return null;
      }if(pass === false){
        return (
          <div className="tip">编号或口令错误</div>
        )
      }
    }
    const ok = ()=>{
      check();
    }
    const cancel = ()=>{
      setPass(true)
      setVisiable1(false)
    }
    return (
      <>
       <section className='head'>
        <div className='container d_flex'>
          <div className='left1 row'>
          <i> welcome to YesCom!</i>
          </div>
          <div className='right row RText'>
          <i className='fa fa-envelope'></i>
            <label> yescom868@gmail.com</label>
            <i className='fa fa-phone'></i>
            <label> 3665059897</label>
            <i>Whatsapp:</i>
            <label> 3665059897</label>
          </div>
        </div>
      </section>
         <div  className=" header">
        <div className="container max">
        <div className='logo L'>
          
          <img src={logo} alt='' />
          
          </div>
        <div className="login R">
          <div onClick={login}><i className='fa fa-user icon-circle' ></i><i>ME</i></div>
        
        </div>
        </div>
        
        </div>
        <section className='Home-items'>
            <div className="" onClick={login}>
            <img src="./images/banner-2.png" alt="" className="AdBox"></img>
            </div>
           
        </section>
        <Modal
            title={"请登录"}
            open={visiable1}
            onOk={ok}
            onCancel={cancel}
            
            destroyOnClose={true}
            >
          <div >
            <div className="textBox"><TextField className="customer-detailBox" required id="Name" label="ID" multiline
          maxRows={1}  fullWidth /></div>
            
            <div className="textBox"><TextField  className="customer-detailBox"  required id="Password" label="password" type="password"
          maxRows={1}  fullWidth  /></div>
            {tip()}
          </div>
            
                  </Modal>
      </>
    )
  }
  
  export default Home