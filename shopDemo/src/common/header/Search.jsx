import React, { useState } from "react"
import logo from "../../components/assets/images/logo.jpg"
import { Link } from "react-router-dom"
import axios from "axios"
const Search = ({ setState,setRes, CartItem }) => {
  // fixed Header
  const totalQty = CartItem.reduce((price,item) => price +item.qty , 0)
    window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })
  
  const [inputValue,setValue] = useState()
  const setInput=()=>{
    var input = document.getElementById("searchInPut").value
    setValue(input)
    setState(0)
    // console.log(input)
  }
  // 搜索方法
  const search=()=>{

    axios({
      method:'get',
      url:'/search'+"/"+inputValue
      }).then(res => {
      setRes(res.data)
      setState(1)
      // console.log(res)
      })

  }
  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
          <Link to='/home'>
          <img src={logo} alt='' />
          </Link>
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input id="searchInPut" onChange={setInput} type='text' placeholder='Search and hit enter...' />
            <span onClick={search} style={{cursor: "pointer"}}>Search</span>
          </div>

          <div className='icon f_flex width'>
            {/* <div className='login'><Link to='/login'>
              <i className='fa fa-user icon-circle'></i>
              </Link>
              </div> */}
            
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{CartItem.length === 0 ? "" : totalQty}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
