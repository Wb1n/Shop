import React, { useEffect, useState } from "react"
import axios from "axios"
import  {Modal}  from "antd"
import { TextField } from "@mui/material"
const Product = ({})=> {   
    const [data,setData] = useState([''])
    //  编辑弹窗
    const [visiable,setVisiable] = useState(false);
    //  删除弹窗
    const [visiable1,setVisiable1] = useState(false);
    //  添加弹窗
    const[visiable2,setVisiable2] = useState(false)
    const openModal = () =>{setVisiable(true)}
    const openModal1 = () =>{setVisiable1(true)}
    const openModal2 = () =>{setVisiable2(true)}
    const [amount,setAmount]=useState(0)
    const[current_data,setCurrent_data] = useState({
        id:'',
        name:'',
        price:'',
        brand:'',
        qty:'',
        img:''

    })
    useEffect(()=>{
       
        //获取数据
        axios(
            {url: '/shopItem',})
            .then(response => {
                setData(response.data)
                return response.data
            }, error => {
                console.log('错误啊', error.message)
            })
        },[amount])
    const add =()=>{
        current_data.name=document.getElementById('addName').value
        current_data.brand=document.getElementById('addBrand').value
        current_data.price=parseInt(document.getElementById('addPrice').value)
        current_data.qty=parseInt(document.getElementById('addQty').value)
          axios({
            method:'POST',
            url:'/shopItems',
            data: current_data
        }).then(response => {
            console.log('/a', response.data)
            setVisiable2(false)
            setAmount(amount+1)
            return response.data
          }, error => {
            console.log('错误', error.message)
          }) 
}
    const put =()=>{
    axios({
      method:'PUT',
      url:'/shopItems',
      data: {
        id:current_data.id,
        name:document.getElementById('modifyName').value,
        brand:document.getElementById('modifyBrand').value,
        price:document.getElementById('modifyPrice').value,
        qty:document.getElementById('modifyQty').value,
        img:current_data.img}
    }).then(response => {
      console.log('/a', response.data)
      setVisiable(false)
      setAmount(amount+1)
      return response.data
    }, error => {
      console.log('错误', error.message)
    })
}
    const remove =()=>{
    axios({
      method:'delete',
      url:'/shopItems'+"/"+current_data.id
      }).then(res => {
        setVisiable1(false)
        setAmount(amount+1)
        console.log(res)
      })
}
    const search = ()=>{
        
        var input = document.getElementById("searchInPut").value
    if(input!==null){
        axios({
            method:'get',
            url:'/search'+"/"+input
        }).then(res => {
            setData(res.data)
            console.log(res.data)
        })
  }
}
    function content(){
        var d =data.map((id,i)=>{
                const removeButton=()=>{
                    
                setCurrent_data(id)
                openModal1();
                }
                const modifyButton=()=>{
                setCurrent_data(id)
                openModal();
  
                }
            return (
                <div className="dataBox" key={i} >
                   <div className="idbox" >{id.id}</div>
                   <div className="namebox" >{id.name}</div>        
                   <div className="ibox" >{id.price}</div>        
                   <div className="ibox" >{id.brand}</div>        
                   <div className="ibox" >{id.qty}</div>
                   <button className="removeCart" onClick={modifyButton} style={{cursor: "pointer"}}><i className="fa-solid ">\</i></button>
                   <button className="removeCart" onClick={removeButton} style={{cursor: "pointer"}}><i className="fa-solid fa-xmark"></i></button>
                  
                   </div>
        )})
        
        return (
        <div>
            {/* type */}
            <div>
                <div className="search-box f_flex"><i className='fa fa-search'></i><input id="searchInPut" onInput={function(){setAmount(amount+1)}}></input><span onClick={search} style={{cursor: "pointer"}}>search</span></div>
                <div className="title">    
                <div className="idbox" >id</div>
                <div className="namebox"  >name</div>
                <div className="ibox" >price</div>
                <div className="ibox">brand</div>
                <div className="ibox" >qty</div>
                <button className="addButton" onClick={openModal2} style={{cursor: "pointer"}}>+</button>
                </div>
                </div>
            {/* data */}
            <div>{d}</div>
        </div>)
        
    }
    return(
        <div>
            {content()}
            <Modal
                  title="添加库存内容"
                  open={visiable2}
                  onOk={add}
                  onCancel={function(){setVisiable2(false)}}
                  destroyOnClose={true}> 
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
                  title="修改商品内容"
                  open={visiable}
                  onOk={put}
                  onCancel={function(){setVisiable(false)}}
                  destroyOnClose={true}
                  >
                    <div className="productDetail">
                      <div className="contentBox"> 
                      <TextField className="customer-detailBox" required id="modifyName" label="Name" multiline
          maxRows={1}  fullWidth defaultValue={current_data.name}/></div>  
                      <div className="contentBox"> 
                      <TextField className="customer-detailBox" required id="modifyPrice" label="price" multiline
          maxRows={1}  fullWidth defaultValue={current_data.price}/></div>  
                      <div className="contentBox"> 
                      <TextField className="customer-detailBox" required id="modifyBrand" label="brand" multiline
          maxRows={1}  fullWidth defaultValue={current_data.brand}/></div>  
                      <div className="contentBox"> 
                      <TextField className="customer-detailBox" required id="modifyQty" label="qty" multiline
          maxRows={1}  fullWidth defaultValue={current_data.qty}/></div>
                    </div>
                  </Modal>
            <Modal
            title={"提示"}
            open={visiable1}
            onOk={remove}
            onCancel={function(){setVisiable1(false)}}
            destroyOnClose={true}
            >
              <p>确认删除？</p>
                  </Modal>     
        </div>
        
    
    )
}
export default Product