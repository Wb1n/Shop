import React, { useState } from "react"
import "./style.css"
import { Link } from "react-router-dom"
import logo from "../../components/assets/images/logo.jpg"
import Select from "./Select"
import Content from "./Content"
const AdminDemo = () => {
const [select,setSelect] = useState('')
    return (
      <>
        <div className="header container ">
          <div className='logo'><Link to='/home'><img src={logo} alt=''/></Link></div>
        </div>
        <section className='admin-items'>
          <div className='adminContainer'>
            <div className='menu'>
            <Select setSelect={setSelect}></Select>
            </div>
            <div className='detail h'>
            <Content select={select}></Content>
            </div>  
          </div>
        </section>
      </>
    )
  }
  
  export default AdminDemo