import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Pages from "./Pages"
import AdminDemo from "./common/Admin/AdminDemo"
import Orders from "./common/Orders/Orders"
import Login from "./common/Login/Login"
import Cart from "./common/Cart/Cart"
import Home from "./common/Home/Home"
import axios from "axios"
import { useEffect } from "react"

function App() {
  axios.defaults.baseURL = 'http://localhost:8080/api/v1';
  axios.defaults.headers.post ['Content-Type'] = 'application/json';
  
  const [state,setState] = useState(0)
  const [brandData,setBrandData]=useState([])
  const [CartItem, setCartItem] = useState([])
  const [ShopData,setShopData] = useState([])
  const [res,setRes] = useState([])
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
        }
        
      })
      
        
   }, [])
   
  const addToCart = (product) => {
    
    const productExit = CartItem.find((item) => item.id === product.id)
    
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
      
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  const decreaseQty = (product) => {
   
    const productExit = CartItem.find((item) => item.id === product.id)

    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }
  const removeQty = (product) => {    
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    
  }

  // filter brands
  const [brandFilter, setBrandFilter] = useState(undefined)

  let filteredShopItems
  if (!brandFilter) {
    if(state===0){
      filteredShopItems = ShopData
    }else{
      filteredShopItems = res
    }
    
  } else {
    // Array.filter
    console.log(brandFilter)
    filteredShopItems = ShopData.filter((item) => {
      // string.includes
      console.log(item, item.brand, brandFilter, item.brand.includes(brandFilter))
      return item.brand.includes(brandFilter)
    })
    console.log(ShopData, filteredShopItems)
  }

  return (
    <>
      <Router>
        
          
          
        
        <Switch>
          <Route path='/' exact>
            
           <Home></Home>
          </Route>

          <Route path='/home' exact>
            <Header setState={setState} setRes={setRes} CartItem={CartItem} />
            <Pages setState={setState} setRes={setRes} CartItem={CartItem} ShopData={filteredShopItems} addToCart={addToCart}  setBrandFilter={setBrandFilter} brandItems={brandData} />
          
          </Route>
          <Route path='/cart' exact>
            <Cart  CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} removeQty={removeQty}/>
          </Route>
          
          <Route path='/orders' exact>
            <Orders CartItem={CartItem}/>
          </Route>
          
          <Route path='/login' exact>
            <Login />
          </Route>

          <Route path='/admin'>
              <AdminDemo  />
            </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
