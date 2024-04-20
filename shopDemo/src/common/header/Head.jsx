import React, { useState } from "react"
import { useTranslation } from 'react-i18next';
const Head = () => {
  const [language,setLanguage] = useState("zh-CN")
  // console.log('language',language)
  // const MyComponent =()=> {
  //   const { t, i18n } = useTranslation();
  //   return <h1>{t('Welcome to React')}</h1>
  // }
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          {/* {MyComponent} */}
          {/* 语言切换 */}
          <div className='left1'>
            <div className="language" style={{dcursor: "pointer"}} onClick={()=>{setLanguage("en-US")}}>
              <img src="/images/flag/en.png" alt="en"  ></img>
            <label >EN</label></div>
            <div className="language" style={{cursor: "pointer"}} onClick={()=>{setLanguage("it-IT")}}>
              <img src="/images/flag/it.png" alt="it"  ></img>
            <label >IT</label></div>
            <div className="language" style={{cursor: "pointer"}} onClick={()=>{setLanguage("zh-CN")}}>
              <img src="/images/flag/cn.png" alt="cn"></img>
            <label >CN</label></div>
            
          </div>
          <div className='right1 RText'>
            <i className='fa fa-envelope'></i>
            <label> yescom868@gmail.com</label>
            <i className='fa fa-phone'></i>
            <label> 3665059897</label>
            <i>Whatsapp:</i>
            <label> 3665059897</label>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
