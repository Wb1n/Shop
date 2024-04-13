import React from "react"
import Catg from "./Catg"
import ShopCart from "./ShopCart"
import "./style.css"

const Shop = ({ setState,setRes,ShopData, addToCart, shopItems, setBrandFilter,brandItems}) => {


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
