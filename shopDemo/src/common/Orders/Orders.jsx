import React ,{useState,useEffect }from "react"
import "./style.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import { TextField} from "@mui/material"
import  {Modal}  from "antd"
import moment from "moment"
import axios from "axios"
import logo from "../../components/assets/images/logo.jpg"


const Orders = ({CartItem}) => {
  
  const [visiable,setVisiable] = useState(false);
  const [visiable1,setVisiable1] = useState(false);
  const [visiable2,setVisiable2] = useState(false);
  const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)
  const time = moment().format("YYYY-MM-DD HH:mm:ss")
  const [user,setUser] =useState({
    id:1,
    time:time,
    name:'null',
    number:'null',
    address:'null',
    product:'null',
    tfn:'null'
  })
  // 添加订单方法
const add =(order)=>{
  // 1.添加用户
    
    





    
    // console.log('call add', user)
    console.log('call add order', order)
    axios({
      
      method:'POST',
      url:'/orders',
      data: order
    }).then(response => {
      openModal();
      console.log('/a', response.data)
      return response.data
    }, error => {
      openModal2();
      console.log('错误', error.message)
    })

  
}
const onOK=()=>{
  setVisiable1(false);
}
const onOK1=()=>{
  setVisiable2(false);
}

const oncancel=()=>{
  setVisiable1(false);
}
const oncancel1=()=>{
  setVisiable2(false);
}
const product = (CartItem.map((item)=>{
  var name= item.name
  var qty = item.qty
  var price = item.price*item.qty
  
  return(
    name+'*'+qty+"="+price
    
  )
}) )
  // const customerData = [];

const Confirm =()=>{
  
  localStorage.removeItem("userInfo");
  user.name = document.getElementById("name1").value
  user.number = document.getElementById("number1").value
  user.tfn = document.getElementById("tfn1").value
  user.address = document.getElementById("address1").value   
  localStorage.setItem("userInfo",JSON.stringify(user));
  if(user.name!==''&&user.number!==''&&user.tfn!==''&&user.address!==''){
    const order ={
    time:time,
    name:user.name,
    number:user.number,
    tfn:user.tfn,
    address:user.address,
    product:JSON.stringify(product)
    
    }
  setUser(order)
  console.log('product',order.product)
  // console.log('confirm', order)
  add(order)
  
}
  else{
    openModal1();

  }
  
}
const openModal = () =>{setVisiable(true)}
const openModal1 = () =>{setVisiable1(true)}
const openModal2 = () =>{setVisiable2(true)}
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
      
    }else{
      alert("please log in again")
      
        window.open('/','_self')
      
    }
    
  })
  
    
}, [])
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
      <section className='orders-items'>
        <div className='container d_flex'>
          <div className='orders-total product'>
            <div className="returnButton1">
              <Link to="/cart">
                <div className="left"> </div>
              </Link>
            </div>
            <div className=' orders-title'>Orders</div> 
            <div className='customer-data'>
              {time}
              <div className='container d_flex qw'>
              <TextField id="name1" className="customer-detailBox" required  label="Name" multiline
          maxRows={1} autoComplete="given-name" fullWidth  defaultValue={JSON.parse(localStorage.getItem('userInfo'))?.name} InputLabelProps={{ shrink: true }}/>
              <TextField  id="number1" className="customer-detailBox" required  label="Number" multiline
          maxRows={1} autoComplete="tel" fullWidth defaultValue={JSON.parse(localStorage.getItem('userInfo'))?.number} InputLabelProps={{ shrink: true }}/>
              <TextField  id="tfn1" className="customer-detailBox" required  label="TFN" multiline
          maxRows={1} fullWidth defaultValue={JSON.parse(localStorage.getItem('userInfo'))?.tfn} InputLabelProps={{ shrink: true }}/>
              </div>
              <div className='container d_flex qw'>
              <TextField id="address1" className="customer-detailBox" required  label="Address" multiline
          maxRows={3} autoComplete="street-address"  fullWidth defaultValue={JSON.parse(localStorage.getItem('userInfo'))?.address} InputLabelProps={{ shrink: true }}/>
              
              </div>

            </div>
            <div className='orders-data'>
            {CartItem.map((item) => {
              const productQty = item.price * item.qty
              return (
                <div  key={item.id}>
                 
                  <div className='d_flex'>
                    <div className='item-name'>{item.name}</div>
                    <div className='item-price'>
                      ${item.price}.00 * {item.qty}
                      <span>${productQty}.00</span>
                    </div>
                  </div>
                </div>
              )
            })}
            <span>${totalPrice}.00</span>
            </div>
            <div onClick={Confirm}>
            <div className="confirm" style={{cursor: "pointer"}}>CONFIRM</div>
            </div>
            
            </div>
            <Modal 
            open={visiable}
            maskClosable={false}
            closable={false}
            header = {null}
            footer={null}>
              <div className="modal-content">
                <div className='success-data'>Success!</div>
                <div className='success-data1'>thanks!</div>
                <Link to="/home"  className="successButton">Continue</Link>
                </div>
                      
              
              
              </Modal>
              <Modal 
            open={visiable1}
            header = {null}
            onOk={onOK}
            onCancel={oncancel}>
              <div className="modal-content">
                <div className='success-data'>请填写完整信息!</div>
                </div>
                </Modal> 
                <Modal 
            open={visiable2}
            header = {null}
            onOk={onOK1}
            onCancel={oncancel1}>
              <div className="modal-content">
                <div className='success-data'>error!</div>
                </div>
                </Modal> 
        </div>
      </section>
    </>
  )
}

export default Orders
