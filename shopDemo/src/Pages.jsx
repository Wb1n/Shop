import React from "react"
import Shop from "./common/shops/Shop"

const Pages = ({setBrandData,setShopData, setState,setRes,ShopData,addToCart,  shopItems, setBrandFilter,brandItems }) => {
  
  return (
    <>
      <Shop setBrandData={setBrandData} setShopData={setShopData} setState={setState} setRes={setRes} ShopData={ShopData} shopItems={shopItems} addToCart={addToCart} setBrandFilter={setBrandFilter} brandItems={brandItems}/>
      
    </>
  )
}

export default Pages
