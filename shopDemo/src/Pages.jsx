import React from "react"
import Shop from "./common/shops/Shop"

const Pages = ({setState,setRes,ShopData,addToCart,  shopItems, setBrandFilter,brandItems }) => {
  
  return (
    <>
      <Shop  setState={setState} setRes={setRes} ShopData={ShopData} shopItems={shopItems} addToCart={addToCart} setBrandFilter={setBrandFilter} brandItems={brandItems}/>
      
    </>
  )
}

export default Pages
