import React, { useEffect, useState } from "react"
import axios from "axios"
import  {Modal}  from "antd"
import { TextField } from "@mui/material"
const Users = ({})=> {   
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
        password:''
    })
    useEffect(()=>{
       
        //获取数据
        axios(
            {url: '/userdata',})
            .then(response => {
                setData(response.data)
                return response.data
            }, error => {
                console.log('错误啊', error.message)
            })
        setCurrent_data({
            id:'',
            name:'',
            password:''
        })
        },[amount])
    const add =()=>{

        current_data.name=document.getElementById('addName').value
        current_data.password=document.getElementById('addPassWord').value
        console.log("name",current_data.name)
        console.log("psw",current_data.password)
        if(current_data.name !== '' && current_data.password !== ''){
            axios({
                method:'POST',
                url:'/addUser',
                data: current_data
            }).then(response => {
                console.log('/a', response.data)
                setVisiable2(false)
                setAmount(amount+1)
                return response.data
              }, error => {
                console.log('错误', error.message)
              })
        }else{
            alert("the account or password cannot be empty!")
        }
         
}
    const put =()=>{
    axios({
      method:'PUT',
      url:'/users',
      data: {
        id:current_data.id,
        name:document.getElementById('modifyName').value,
        password:document.getElementById('modifyPassWord').value
    }
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
        console.log('del')
        console.log("id",current_data.id)
    axios({
      method:'delete',
      url:'/deleteUser'+"/"+current_data.id
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
            url:'/searchUsers'+"/"+input
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
                    <div className="ibox"  >{id.name}</div>
                    <div className="ibox"  >{id.password}</div>
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
                <div className="namebox"  >username</div>
                <div className="ibox"  >password</div>
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
                  title="add user"
                  open={visiable2}
                  onOk={add}
                  onCancel={function(){setVisiable2(false);setAmount(amount+1);}}
                  destroyOnClose={true}>
                    <div className="productDetail">
                        <div className="contentBox">
                            <TextField className="customer-detailBox" required id="addName" label="Name" multiline maxRows={1}  fullWidth />
                            </div>
                        <div className="contentBox">
                            <TextField className="customer-detailBox" required id="addPassWord" label="PassWord" multiline maxRows={1}  fullWidth />
                            </div> 
                            
                      
                    </div>
                    </Modal>
            <Modal
                  title="modify user"
                  open={visiable}
                  onOk={put}
                  onCancel={function(){setVisiable(false);setAmount(amount+1);}}
                  destroyOnClose={true}
                  >
                    <div className="productDetail">
                      <div className="contentBox"> 
                      <TextField className="customer-detailBox" required id="modifyName" label="Name" multiline
          maxRows={1}  fullWidth defaultValue={current_data.name}/></div>
                    <div className="contentBox"> 
                      <TextField className="customer-detailBox" required id="modifyPassWord" label="PassWord" multiline
          maxRows={1}  fullWidth defaultValue={current_data.password}/></div>

                    </div>
                  </Modal>
            <Modal
            title={"tip"}
            open={visiable1}
            onOk={remove}
            onCancel={function(){setVisiable1(false);setAmount(amount+1);}}
            destroyOnClose={true}
            >
              <p>confirm deletion?</p>
                  </Modal>     
        </div>
        
    
    )
}
export default Users