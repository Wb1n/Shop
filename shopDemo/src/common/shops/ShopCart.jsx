import React from "react"
import { message } from "antd"

const ShopCart = ({ ShopData, addToCart }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Add success ',
    });
  };
  
  
  return (
    <>
      {
      ShopData.map((shopItems, index) => {
        return (
          
          <div className='box' key={index}>
            {contextHolder}
            <div className='product mtop'>
              <div className='img'>
                
                <img src={shopItems.img} alt='' />
                
              </div>
              <div className='product-details'>
                <h3>{shopItems.name}</h3>
                
                <div className='price'>
                  <h4>${shopItems.price}.00 </h4>
                  {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                  <button onClick={
                    () => {addToCart(shopItems)
                    success()}
                    }>
                    <i className='fa fa-plus'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ShopCart
