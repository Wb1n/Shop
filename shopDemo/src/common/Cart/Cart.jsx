import React ,{ useState } from "react"
import "./style.css"
import { Link } from "react-router-dom"

import logo from "../../components/assets/images/logo.svg"
import  {Modal}  from "antd"

const Cart = ({ CartItem, addToCart, decreaseQty, removeQty }) => {
  
  const [visiable,setVisiable] = useState(false);
  // Stpe: 7   calucate total of items
  const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)
  const onOK = () =>{
    
    console.log("编写on")
    closeModal();
  };
  const closeModal = () =>{
    
    console.log("close")
    setVisiable(false)
  };
  const openModal = () =>{setVisiable(true)}
 
  
  const isPass =()=>{
    if(CartItem.length !== 0 ){
    return(
      <Link to='/orders'>
                <div className='order d_flex'>  
                    <div className='orderWord'>Order</div>  
                    </div>    
                </Link>
    )}else{
      return(
        <div  onClick={openModal}>
                <div className='order d_flex'>  
                    <div className='orderWord' style={{cursor: "pointer"}}>Order</div>  
                    </div>    
                </div>
      )}
      
    
  }
  // prodcut qty total
  return (
    <>
      <div  className=" header">
        <div className="container ">
        <div className='logo'>
          <Link to='/home'>
          <img src={logo} alt='' />
          </Link>
          </div>
        </div>
        
        </div>
      <section className='cart-items'>
        
        <div className='container d_flex'>
          
          <Modal 
          title="提示"
          open={visiable}
          onOk={onOK}
          onCancel={closeModal}>
            <p>
            The cart is empty!!
            </p>
            
          </Modal>
          {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

          <div className='cart-details'>
            <div className="returnButton">
              <Link to="/home">
                <div className="left"> </div>
              </Link>
            </div>
            {CartItem.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}

            {/* yasma hami le cart item lai display garaaxa */}
            {CartItem.map((item) => {
              const productQty = item.price * item.qty

              return (
                <div className='cart-list product d_flex' key={item.id}>
                  {/* <div className='img'>
                    <img src={item.cover} alt='' />
                  </div> */}
                  <div className='cart-details'>
                    <h3>{item.name}</h3>
                    <h4>
                      ${item.price}.00 * {item.qty}
                      <span>${productQty}.00</span>
                    </h4>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart'>
                      <button className='removeCart' onClick={() =>removeQty(item)}>
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div>
                    {/* stpe: 5 
                    product ko qty lai inc ra des garne
                    */}
                    <div className='cartControl d_flex'>
                      <button className='incCart' onClick={() => addToCart(item)}>
                        <i className='fa-solid fa-plus'></i>
                      </button>
                      <button className='desCart' onClick={() => decreaseQty(item)}>
                        <i className='fa-solid fa-minus'></i>
                      </button>
                    </div>
                  </div>

                  <div className='cart-item-price'></div>
                </div>
              )
            })}
          </div>

          <div className='cart-total product'>
            <h2>Summary</h2>
            <div className=' price d_flex'>
              <h4>Total Price :</h4>
              <h3>${totalPrice}.00</h3>
            </div>
            
                
                {isPass()}       
         </div>
        </div>
      </section>
    </>
  )
}

export default Cart
