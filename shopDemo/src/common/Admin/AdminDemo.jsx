import React, { useEffect, useState } from "react"
import "./style.css"
import axios from "axios"
import  {Modal}  from "antd"
import { TextField } from "@mui/material"
import { Link } from "react-router-dom"
import logo from "../../components/assets/images/logo.svg"
import { message } from "antd"
const AdminDemo = () => {
  const [data,setData]= useState([]);
  const [state,setState] = useState(0);
  
  // 编辑弹窗
  const [visiable,setVisiable] = useState(false);
  // 删除弹窗
  const [visiable1,setVisiable1] = useState(false);
  // 添加弹窗
  const[visiable2,setVisiable2] = useState(false);
  const[visiable3,setVisiable3] = useState(false);
  const[visiable4,setVisiable4] = useState(false);  
  const[visiable5,setVisiable5] = useState(false);

  const[value,setValue] = useState(0)
  const[mname,setmname] = useState(0)
  const[mbrand,setmbrand] = useState(0)
  const[mprice,setmprice] = useState(0)
  const[mqty,setmqty] = useState(0)

  const[Otime,setOtime] = useState(0)
  const[Oname,setOname] = useState(0)
  const[Onumber,setOnumbe] = useState(0)
  const[Oaddress,setOaddress] = useState(0)
  const[Otfn,setOtfn] = useState(0)
  const[Oproduct,setOproduct] = useState([])
  const[Sproduct,setSproduct] = useState([])
  const[messageApi, contextHolder] = message.useMessage();
  const [inputValue,setInputValue] = useState('null')
  
  const[change,setChange] = useState(0)
  const changeValue =change

  useEffect(()=>{
    var access = JSON.parse(localStorage.getItem('access-admin'))
    console.log('token',access)
    axios({
      method:'GET',
      url:'/check',
      headers:{
        'token':access
      }
    }).then(response=>{
      console.log("chenck",response)
      if(response.data !== null){

        if(response.data !==true){
          window.location.href="/login"
        }
        
        console.log(response.data)
      }else{
        window.location.href="/login"
      }
      
    })
  },[])
  
  useEffect(()=>{
    if(state===1||state===3){
      getProductData();
    }if(state===2||state===4){
      getOrdersData();
    }
    
  },[change])

  useEffect(()=>{
    if(state === 1||state ===3){
      if(value !== 0){axios({
      method:'get',
      url:'/shopItem'+"/"+value
      }).then(res => {
      setObj(res.data)
      console.log("obj",res.data)
      })
    }}
    else return null
    
  },[value])
  const setInput=()=>{
    console.log(state)
    
      if(state===3){
        setState(1);
      }if(state===4){
        setState(2)
          }
    
    var input = document.getElementById("searchInPut").value
    setInputValue(input)
    console.log(input)
  }
  const [obj,setObj] = useState({
      id:'',
      name:'',
      brand:'',
      img:'',
      price:'',
      qty:''
  })
  const userInfo={
      id:1,
      name:'null',
      brand:'null',
      img:'null',
      price:'',
      qty:''

}
  const orderInfo={
      id:1,
      time:'',
      name:'null',
      number:'null',
      address:'null',
      product:'123',
      tfn:'123'
  }
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Remove success ',
    });
    
   
  };
  // 修改商品内容
  const onOK = () =>{
    
    put();
    closeModal();
  };
  // 删除商品或库存内容
  const onOK1=()=>{
    remove();     
    closeModal();

  }
  // 增加库存内容
  const onOK2=()=>{
    userInfo.name=document.getElementById('addName').value
    userInfo.brand=document.getElementById('addBrand').value
    userInfo.price=parseInt(document.getElementById('addPrice').value)
    userInfo.qty=parseInt(document.getElementById('addQty').value)
    console.log(userInfo)
    add();
    closeModal();
  }
  // 添加订单内容
  const onOK3=()=>{
    orderInfo.time=document.getElementById('time1').value
    orderInfo.name=document.getElementById('name1').value
    orderInfo.number=document.getElementById('number1').value
    orderInfo.address=document.getElementById('address1').value
    orderInfo.tfn=document.getElementById('tfn1').value
    orderInfo.product=document.getElementById('product1').value
    add();
    closeModal();
  }
  // 修改订单内容
  const onOK4=()=>{
    put();
    closeModal();
  }
  const onOK5=()=>{
    
    window.print()
    closeModal();
  }
  const closeModal = () =>{
    
    console.log("close",state)
    setVisiable(false)
    setVisiable1(false)
    setVisiable2(false)
    setVisiable3(false)
    setVisiable4(false)
    setVisiable5(false)
  }
  
  const openModal = () =>{setVisiable(true)}
  const openModal1 = () =>{setVisiable1(true)}
  const openModal2 = () =>{setVisiable2(true)}
  const openModal3 = () =>{setVisiable3(true)}
  const openModal4 = () =>{setVisiable4(true)}
  
  const openModal5 = () =>{setVisiable5(true)}
 
  // 删除方法
  const remove =()=>{
    console.log('remove',state)
    if(state===1||state===3){
      axios({
        method:'delete',
        url:'/shopItems'+"/"+value
        }).then(res => {
          setChange(change+1)
        console.log(res)
        })
    }if(state===2||state===4){
      
      axios({
        method:'delete',
        url:'/ordersdata'+"/"+value
        }).then(res => {
          setChange(change+1)
        console.log(res) 
        })
      }
    
    success();
  }
  // 添加方法
  const add =()=>{
    if(state===1||state===3){
      // 添加库存方法
      
      axios({
        
        method:'POST',
        url:'/shopItems',
        data: userInfo
        
      }).then(response => {
        setChange(change+1)
        console.log('/a', response.data)
        getProductData();
        return response.data
      }, error => {
        console.log('错误', error.message)
      })

    }if(state===2||state===4){
      axios({
        
        method:'POST',
        url:'/orders',
        data: orderInfo
        
      }).then(response => {
        console.log('/a', response.data)
        setChange(change+1)
        getOrdersData();
        return response.data
      }, error => {
        console.log('错误', error.message)
      })
    }
    
  }
  //修改方法
  const put =()=>{
    if(state===1){
    axios({
      method:'PUT',
      url:'/shopItems',
      data: {
        id:value,
        name:document.getElementById('modifyName').value,
        brand:document.getElementById('modifyBrand').value,
        price:document.getElementById('modifyPrice').value,
        qty:document.getElementById('modifyQty').value,
        img:obj.img
        
      }
      
    }).then(response => {
      console.log('/a', response.data)
      setChange(change+1)
      return response.data
    }, error => {
      console.log('错误', error.message)
    })
  }if(state===2){
    axios({
        
      method:'PUT',
      url:'/orders',
      data: {
        id:value,
        time:document.getElementById('modifyTime1').value,
        name:document.getElementById('modifyName1').value,
        number:document.getElementById('modifyNumber1').value,
        address:document.getElementById('modifyAddress1').value,
        product:document.getElementById('modifyProduct1').value,
        tfn:document.getElementById('modifyTFN1').value,
      }
      
    }).then(response => {
      console.log('/a', response.data)
      setChange(change+1)
      return response.data
    }, error => {
      console.log('错误', error.message)
    })
  
  }
}
// 搜索方法
  const search = ()=>{

    if(inputValue!==null){
      if(state===1){
      axios({
        method:'get',
        url:'/search'+"/"+inputValue
        }).then(res => {
        setSproduct(res.data)
        console.log(res.data)
        })
      setState(3)
    }if(state===2){
      axios({
        method:'get',
        url:'/searchOrders'+"/"+inputValue
        }).then(res => {
        setSproduct(res.data)
        console.log(res.data)
        })
      setState(4)
    }
  }
}
 
  // 内容数据界面
      function set(){
        // console.log('product',p)
        console.log('当前state',state)
        if(state===1){
          
          var data1=
          data.map((id,i)=>{
           
            const removeButton=()=>{
              const value1 = id.id
              setValue(value1)
              openModal1();
            }
            const modifyButton=()=>{
              const value1 = id.id;
              const name = id.name;
              const brand = id.brand;
              const price = id.price;
              const qty = id.qty;
              
              setValue(value1)
              setmname(name)
              setmbrand(brand)
              setmprice(price)
              setmqty(qty)
              openModal();

            }
            return(
                <div className="dataBox" key={i} >
                  <div className="idbox" >{id.id}</div>
                  <div className="namebox" >{id.name}</div>        
                  <div className="ibox" >{id.price}</div>        
                  <div className="ibox" >{id.brand}</div>        
                  <div className="ibox" >{id.qty}</div>
                  <button className="removeCart" onClick={modifyButton} style={{cursor: "pointer"}}><i className="fa-solid ">\</i></button>
                  <button className="removeCart" onClick={removeButton} style={{cursor: "pointer"}}><i className="fa-solid fa-xmark"></i></button>
                  
                  </div>
          )});
          return( data1);
        }
      if(state===2){
        var data2=
        data.map((id,i)=>{
          const removeButton=()=>{
            const value1 = id.id
            setValue(value1)
            openModal1();
          }
          const modifyButton=()=>{
            const value1 = id.id;
            const time = id.time;
            const name = id.name;
            const number = id.number;
            const address = id.address;
            const tfn = id.tfn;
            const product = id.product;
            
            setValue(value1)
            setOtime(time)
            setOname(name)
            setOnumbe(number)
            setOaddress(address)
            setOtfn(tfn)
            setOproduct(product)

            
            openModal4();
  
          }
          
          const printButton=()=>{
            const value1 = id.id;
            const time = id.time;
            const name = id.name;
            const number = id.number;
            const address = id.address;
            const tfn = id.tfn;
            const product = JSON.parse(id.product);
            console.log('product',JSON.parse(id.product))
            setValue(value1)
            setOtime(time)
            setOname(name)
            setOnumbe(number)
            setOaddress(address)
            setOtfn(tfn)
            setOproduct(product)
            openModal5()
          }
          const p = (id.product)
          console.log(id, p)
          
         

            const pro = JSON.parse(p)
      
            
            
          
          // console.log("p",p)
          // console.log("pro",pro)

            // const product1=  pro.map((i)=>{
            //   return (<div className="productContent">•{i}</div>)
            // })
         
          
          
          return(
          <div className="dataBox" key={i} >
            <div className="idbox" >{id.id}</div>
            <div className="timebox" >{id.time}</div>        
            <div className="namebox" >{id.name}</div>        
            <div className="numberbox" >{id.number}</div>        
            <div className="addressbox">{id.address}</div>     
            <div className="tfnbox" >{id.tfn}</div>     
            {/* <div className="productbox" >{product1}</div> */}
            <button className="removeCart" onClick={modifyButton} style={{cursor: "pointer"}}><i className="fa-solid " >\</i></button>
            <button className="removeCart"  onClick={removeButton} style={{cursor: "pointer"}}><i className="fa-solid fa-xmark" ></i></button>
            <button className="removeCart" onClick={printButton} style={{cursor: "pointer"}}><i className="fa-solid ">p</i></button>
                
        </div>
          )
        });
        return(data2);
      }
    
      if(state===3){
        // 查找库存界面
        
        var data3=Sproduct.map((id,i)=>{
          
           
            const removeButton=()=>{
              const value1 = id.id
              setValue(value1)
              openModal1();
            }
            const modifyButton=()=>{
              const value1 = id.id;
              const name = id.name;
              const brand = id.brand;
              const price = id.price;
              const qty = id.qty;
              
              setValue(value1)
              setmname(name)
              setmbrand(brand)
              setmprice(price)
              setmqty(qty)

              
              openModal();

            }
            return(
                <div className="dataBox" key={i} >
                  <div className="idbox" >{id.id}</div>
                  <div className="namebox" >{id.name}</div>        
                  <div className="ibox" >{id.price}</div>        
                  <div className="ibox" >{id.brand}</div>        
                  <div className="ibox" >{id.qty}</div>
                  <button className="removeCart" onClick={modifyButton} style={{cursor: "pointer"}}><i className="fa-solid " >\</i></button>
                  <button className="removeCart" onClick={removeButton} style={{cursor: "pointer"}}><i className="fa-solid fa-xmark"></i></button>
                </div>
          )});
      return (data3)
      }
      if(state===4){
      var data4=
      Sproduct.map((id,i)=>{
          const removeButton=()=>{
            const value1 = id.id
            setValue(value1)
            openModal1();
          }
          const modifyButton=()=>{
            const value1 = id.id;
            const time = id.time;
            const name = id.name;
            const number = id.number;
            const address = id.address;
            const tfn = id.tfn;
            const product = id.product;
            
            setValue(value1)
            setOtime(time)
            setOname(name)
            setOnumbe(number)
            setOaddress(address)
            setOtfn(tfn)
            setOproduct(product)

            
            openModal4();
  
          }
          return(
          <div className="dataBox" key={i}>
            <div className="idbox" >{id.id}</div>
            <div className="namebox" >{id.time}</div>        
            <div className="ibox" >{id.name}</div>        
            <div className="namebox" >{id.number}</div>        
            <div className="namebox">{id.address}</div>     
            <div className="namebox" >{id.tfn}</div>     
            <div className="namebox" >{id.product}</div>
            <button className="removeCart" onClick={modifyButton} style={{cursor: "pointer"}}><i className="fa-solid ">\</i></button>
            <button className="removeCart"  onClick={removeButton} style={{cursor: "pointer"}}><i className="fa-solid fa-xmark"></i></button>
        </div>
          )
        });
        return(data4);
      }
    }
  // 标题界面
  const setTitle = ()=>{
    if(state===1||state===3){
    return(
    <div>
      
      <div className="search-box f_flex"><i className='fa fa-search'></i><input id="searchInPut" onInput={setInput}></input><span onClick={search} style={{cursor: "pointer"}}>search</span></div>
      <div className="title">    
      <div className="idbox" >id</div>
      <div className="namebox"  >name</div>
      <div className="ibox" >price</div>
      <div className="ibox">brand</div>
      <div className="ibox" >qty</div>
      
      <button className="addButton" onClick={openModal2} style={{cursor: "pointer"}}>+</button>
    </div>
    </div>
    
    
  )}if(state===2||state===4){
    return(
      <div>
        <div className="search-box f_flex"><i className='fa fa-search'></i><input id="searchInPut" onInput={setInput}></input><span onClick={search} style={{cursor: "pointer"}}>search</span></div>
        <div  className="title">    
      <div className="idbox" >id</div>
      <div className="timebox" >time</div>
      <div className="namebox" >name</div>
      <div className="numberbox" >number</div>
      <div className="addressbox" >address</div>
      <div className="tfnbox" >tfn</div>
      <div className="productbox" >product</div>
      <button className="addButton" onClick={openModal3} style={{cursor: "pointer"}}>+</button>
    </div>
      </div>
      
  )}else{return null}}
  // 获取产品数据
  const getProductData=()=>{
    console.log("getProduct",state)
    setInputValue(null)
    setState(1)
    axios(
        {url: '/shopItem',})
        .then(response => {
            console.log('/a', response.data)
            setData(response.data)
            
            return response.data
        }, error => {
            console.log('错误啊', error.message)
        })
}
  // 获取订单数据
  const getOrdersData=()=>{
  setInputValue(null)
  console.log("getorder",state)
  setState(2);
  axios(
      {url: '/orderdata',})
      .then(response => {
          console.log('/a', response.data)
          setData(response.data)
          
          return response.data
      }, error => {
          console.log('错误啊', error.message)
      })
}
console.log(change)

    
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
        <section className='admin-items'>
          <div className='adminContainer'>
          {contextHolder}
            <div className='menu'>
                
                <div className="menu-item"  >用户</div>
                <div className="menu-item" onClick={getProductData} style={{cursor: "pointer"}}>库存</div>
                <div className="menu-item" onClick={getOrdersData} style={{cursor: "pointer"}}>订单</div>
                
              
            </div>
            <div className='detail h'>
              <div className="">{setTitle()}</div>
              <div className='content'>
                {set()}
                
                </div>
                <Modal
                  title="修改商品内容"
                  open={visiable}
                  onOk={onOK}
                  onCancel={closeModal}
                  destroyOnClose={true}
                  >
                    <div className="productDetail">
                      <div className="contentBox"> 
                      <TextField className="customer-detailBox" required id="modifyName" label="Name" multiline
          maxRows={1}  fullWidth defaultValue={mname}/></div>  
                      <div className="contentBox"> 
                      <TextField className="customer-detailBox" required id="modifyPrice" label="price" multiline
          maxRows={1}  fullWidth defaultValue={mprice}/></div>  
                      <div className="contentBox"> 
                      <TextField className="customer-detailBox" required id="modifyBrand" label="brand" multiline
          maxRows={1}  fullWidth defaultValue={mbrand}/></div>  
                      <div className="contentBox"> 
                      <TextField className="customer-detailBox" required id="modifyQty" label="qty" multiline
          maxRows={1}  fullWidth defaultValue={mqty}/></div>  
                     
                      </div>
                  </Modal>
                <Modal
                  title="添加库存内容"
                  open={visiable2}
                  onOk={onOK2}
                  onCancel={closeModal}
                  destroyOnClose={true}
                  
                  > 
                       <div className="productDetail">                 
                      <div className="contentBox"> 
                      <TextField className="customer-detailBox" required id="addName" label="Name" multiline
          maxRows={1}  fullWidth /></div>  
                      <div className="contentBox"> 
                      <TextField className="customer-detailBox" required id="addPrice" label="price" multiline
          maxRows={1}  fullWidth /></div>  
                      <div className="contentBox"> 
                      <TextField className="customer-detailBox" required id="addBrand" label="brand" multiline
          maxRows={1}  fullWidth /></div>  
                      <div className="contentBox"> 
                      <TextField className="customer-detailBox" required id="addQty" label="qty" multiline
          maxRows={1}  fullWidth /></div>  
                     </div>  
                      
                  </Modal>
                <Modal
                  title="添加订单内容"
                  open={visiable3}
                  onOk={onOK3}
                  onCancel={closeModal}
                  destroyOnClose={true}
                  header={null}
                  >
                    <div className="productDetail">
                      
                    <div className="contentBox">
                      <TextField className="customer-detailBox" required id="time1" label="time" multiline
          maxRows={1}  fullWidth /> </div>  <div className="contentBox">       
                      <TextField className="customer-detailBox" required id="name1" label="Name" multiline
          maxRows={1}  fullWidth /> </div>  <div className="contentBox">
                      <TextField className="customer-detailBox" required id="number1" label="number" multiline
          maxRows={1}  fullWidth /> </div>  <div className="contentBox">  
                      <TextField className="customer-detailBox" required id="address1" label="address" multiline
          maxRows={1}  fullWidth /></div>  <div className="contentBox"> 
                      <TextField className="customer-detailBox" required id="tfn1" label="tfn" multiline
          maxRows={1}  fullWidth /></div>  <div className="contentBox"> 
                      <TextField className="customer-detailBox" required id="product1" label="product" multiline
          maxRows={1}  fullWidth /></div> 

                    </div>
                  </Modal>
                <Modal
            title={"提示"}
            open={visiable1}
            onOk={onOK1}
            onCancel={closeModal}
            destroyOnClose={true}
            >
              <p>确认删除？</p>
                  </Modal>
                <Modal
            title={"修改订单内容"}
            open={visiable4}
            onOk={onOK4}
            onCancel={closeModal}
            destroyOnClose={true}
            >
            <div className="productDetail">
                      
            <div className="contentBox">         
            <TextField id="modifyTime1" className="customer-detailBox " required  label="time" multiline
maxRows={1}  fullWidth defaultValue={Otime}/> </div>           
            <div className="contentBox"> 
            <TextField id="modifyName1" className="customer-detailBox" required  label="Name" multiline
maxRows={1}  fullWidth defaultValue={Oname}/> </div>
            <div className="contentBox"> 
            <TextField required id="modifyNumber1" className="customer-detailBox"  label="number" multiline
maxRows={1}  fullWidth defaultValue={Onumber}/> </div>
              <div className="contentBox">       
            <TextField id="modifyAddress1" className="customer-detailBox" required  label="address" multiline
maxRows={1}  fullWidth defaultValue={Oaddress}/></div>  
            <div className="contentBox">  
            <TextField id="modifyTFN1" className="customer-detailBox" required  label="tfn" multiline
maxRows={1}  fullWidth defaultValue={Otfn}/></div>  
            <div className="contentBox">  
            <TextField id="modifyProduct1" className="customer-detailBox" required  label="product" multiline
maxRows={1}  fullWidth defaultValue={Oproduct}/></div>  

          </div>
                  </Modal>
                  <Modal
            title={null}
            open={visiable5}
            onOk={onOK5}
            onCancel={closeModal}
            closable={false}
            destroyOnClose={true}
            wrapClassName={'web'}
            footer={null}
            >
            <div className="productDetail" onClick={onOK5}>
            
            <div className="contentBox">------------------------------</div>
            <div className="contentBox">YesCon</div>
            <div className="contentBox">------------------------------</div>
            <div className="contentBox1">id:{value}<div className="contentBox1">{Otime}</div></div>
            <div className="contentBox1">name:{Oname}</div>
            <div className="contentBox1">number:{Onumber}</div>
            <div className="contentBox1">tfn:{Otfn}</div>  
            <div className="contentBox1">address:{Oaddress}</div> 
            <div className="contentBox">------------------------------</div>
              {Oproduct.map((index)=>{
              
              return (<div className="contentBox2">•{index}</div>)
            }
            
              
            )} 
            

          </div>
                  </Modal>
              </div>  
          </div>
        </section>
      </>
    )
  }
  
  export default AdminDemo