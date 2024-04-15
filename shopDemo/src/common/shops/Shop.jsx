import React from "react"
import Catg from "./Catg"
import ShopCart from "./ShopCart"
import { useEffect } from "react"
import axios from "axios"
import "./style.css"

const Shop = ({ setBrandData,setShopData,setState,setRes,ShopData, addToCart, shopItems, setBrandFilter,brandItems}) => {

  useEffect(() => {
    var access = JSON.parse(localStorage.getItem('access-admin'))
    axios({
      method:'GET',
      url:'/check',
      headers:{
        'token':access
      }
    }).then(response=>{
      console.log("chenck",response)
      if(response.data !== false){
        axios(
          {url: '/shopItem',method:'get'})
          .then(response => {
              console.log('/a', response.data)
              setShopData(response.data)
              
              return response.data
          }, error => {
              console.log('错误啊', error.message)
          })
        axios(
            {url: '/branddata',method:'get'})
            .then(response => {
                console.log('/a', response.data)
                setBrandData(response.data)
                
                return response.data
            }, error => {
                console.log('错误啊', error.message)
            }) 
        console.log(response.data)
      }else{
        alert("请重新登录")
        
          window.open('/','_self')
        
      }
      
    })
    
      
 }, [])


  return (
    <>
      <section className='shop background'>
        <div className='container d_flex'>
          <Catg setState={setState} setRes={setRes} setBrandFilter={setBrandFilter} brandItems={brandItems} />

          <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                <h2 >All Products</h2>
              </div>
              
            </div>
            <div className='product-content  grid1'>
              <ShopCart  ShopData={ShopData} addToCart={addToCart} shopItems={shopItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop
