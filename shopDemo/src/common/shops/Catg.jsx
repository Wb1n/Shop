import React, { useState,useEffect } from "react"
import axios from "axios"
import { Menu } from 'antd';


const Catg = ({ setState,setRes}) => {
  const [searchObj,setObj] = useState("undefined all")
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  useEffect(()=>{
    if(searchObj !== "undefined all"){ 
      axios({
      method:'get',
      url:'/search/'+searchObj
      }).then(res => {
      setRes(res.data)
      setState(1)
      })}else{
        setState(0);
      }

   
  },[searchObj])
  const items = [
    
    getItem('apple', 'apple', null , [
      getItem('screen','apple screen'),
      getItem('battery','apple battery'),
      getItem('charging port','apple charging port'),
      getItem('back cover','apple back cover')
    ]),
    getItem('samsung', 'samsung', null , [
      getItem('screen','samsung screen'),
      getItem('battery','samsung battery'),
      getItem('charging port','samsung charging port'),
      getItem('back cover','samsung back cover')
    ]),
    getItem('huawei', 'huawei', null , [
      getItem('screen','huawei screen'),
      getItem('battery','huawei battery'),
      getItem('charging port','huawei charging port'),
      getItem('back cover','huawei back cover')
    ]),
    getItem('vivo', 'vivo', null , [
      getItem('screen','vivo screen'),
      getItem('battery','vivo battery'),
      getItem('charging port','vivo charging port'),
      getItem('back cover','vivo back cover')
    ]),
    getItem('oppo', 'oppo', null , [
      getItem('screen','oppo screen'),
      getItem('battery','oppo battery'),
      getItem('charging port','oppo charging port'),
      getItem('back cover','oppo back cover')
    ]),
    getItem('xiaomi', 'xiaomi', null , [
      getItem('screen','xiaomi screen'),
      getItem('battery','xiaomi battery'),
      getItem('charging port','xiaomi charging port'),
      getItem('back cover','xiaomi back cover')
    ]),
    getItem('redmi', 'redmi', null , [
      getItem('screen','redmi screen'),
      getItem('battery','redmi battery'),
      getItem('charging port','redmi charging port'),
      getItem('back cover','redmi back cover')
    ]),
  getItem('all product','all')
  ];
  function onclick1(e){
    // console.log(e)
    // console.log(e.keyPath)
    var value = e.keyPath[0];
    // console.log(value)
    setObj(value)
  }
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1 >Brands </h1>
        </div>
        <Menu
          mode="inline"
          defaultOpenKeys={['apple']}
          defaultSelectedKeys={['apple']}
          onClick={onclick1}
          style={{ minWidth: 130, flex: "auto"}}
          items={items}
        />

        
        
        
      </div>
    </>
  )
}

export default Catg
