import React, { useEffect, useState } from "react"
import axios from "axios"
import  {Modal}  from "antd"
import { TextField } from "@mui/material"
const Orders = ({})=> {   
    const [data,setData] = useState([''])
    //  编辑弹窗
    const [visiable,setVisiable] = useState(false);
    //  删除弹窗
    const [visiable1,setVisiable1] = useState(false);
    const[visiable5,setVisiable5] = useState(false);
    const openModal = () =>{setVisiable(true)}
    const openModal1 = () =>{setVisiable1(true)}
    const [amount,setAmount]=useState(0)
    const[current_data,setCurrent_data] = useState({
        id:'',
        time:'',
        name:'',
        number:'',
        address:'',
        tfn:'',
        product:''

    })
    useEffect(()=>{
        //获取数据
        axios(
            {url: '/orderdata',})
            .then(response => {
                // console.log('/a', response.data)
                setData(response.data)
                return response.data
            }, error => {
                //  console.log('错误啊', error.message)
                })},[amount])
    const put =()=>{
        axios({
          method:'PUT',
          url:'/orders',
          data: {
            id:current_data.id,
            time:document.getElementById('modifyTime1').value,
            name:document.getElementById('modifyName1').value,
            number:document.getElementById('modifyNumber1').value,
            address:document.getElementById('modifyAddress1').value,
            product:document.getElementById('modifyProduct1').value,
            tfn:document.getElementById('modifyTFN1').value,
          }}).then(response => {
            // console.log('/a', response.data)
            setVisiable(false)
            setAmount(amount+1)
            return response.data
          }, error => {
            // console.log('错误', error.message)
          })}
    const remove =()=>{
        axios({
          method:'delete',
          url:'/ordersdata'+"/"+current_data.id
        }).then(res => {
          setVisiable1(false)
          setAmount(amount+1)
        //   console.log(res) 
          })}
    const search = ()=>{
        var input = document.getElementById("searchInPut").value
    if(input!==null){
        axios({
            method:'get',
            url:'/searchOrders'+"/"+input
            }).then(res => {
            // console.log(res.data)
            setData(res.data)
            })}
}
function content(){
        var d =data.map((id,i)=>{
                var p =id.product
                const removeButton=()=>{
                setCurrent_data(id)
                openModal1();
                }
                const modifyButton=()=>{
                setCurrent_data(id)
                openModal();
  
                }
                const printButton =()=>{
                setCurrent_data(id)
                setVisiable5(true)
            }
                const product=()=>{
                    if(p!==undefined){
                        var p3 = JSON.parse(p)
                        const p4=p3.map((i,a)=>{
                            return (<div className="productContent" key={a}>•{i}</div>)
                        })
                        return p4
                    }else return(
                        // console.log('error')
                        null
                    )
                }
            return (
                <div className="dataBox" key={i} >
            <div className="idbox" >{id.id}</div>
            <div className="timebox" >{id.time}</div>        
            <div className="namebox" >{id.name}</div>        
            <div className="numberbox" >{id.number}</div>        
            <div className="addressbox">{id.address}</div>     
            <div className="tfnbox" >{id.tfn}</div>   
            <div className="productbox" >{product()}</div>    
            <button className="removeCart" onClick={modifyButton} style={{cursor: "pointer"}}><i className="fa-solid " >\</i></button>
            <button className="removeCart"  onClick={removeButton} style={{cursor: "pointer"}}><i className="fa-solid fa-xmark" ></i></button>
            <button className="removeCart"  onClick={printButton} style={{cursor: "pointer"}}><i className="fa-solid ">p</i></button>
                
        </div>
                
        )})
        return (
        <div>
            {/* type */}
            <div>
                <div className="search-box f_flex"><i className='fa fa-search'></i><input id="searchInPut" onInput={function(){setAmount(amount+1)}}></input><span onClick={search} style={{cursor: "pointer"}}>search</span></div>
                <div  className="title">    
                <div className="idbox" >id</div>
                <div className="timebox" >time</div>
                <div className="namebox" >name</div>
                <div className="numberbox" >number</div>
                <div className="addressbox" >address</div>
                <div className="tfnbox" >tfn</div>
                <div className="productbox" >product</div>
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
            title={"modify order"}
            open={visiable}
            onOk={put}
            onCancel={function(){setVisiable(false)}}
            destroyOnClose={true}
            >
            <div className="productDetail">
                      
            <div className="contentBox">         
            <TextField id="modifyTime1" className="customer-detailBox " required  label="time" multiline
maxRows={1}  fullWidth defaultValue={current_data.time}/> </div>           
            <div className="contentBox"> 
            <TextField id="modifyName1" className="customer-detailBox" required  label="Name" multiline
maxRows={1}  fullWidth defaultValue={current_data.name}/> </div>
            <div className="contentBox"> 
            <TextField required id="modifyNumber1" className="customer-detailBox"  label="number" multiline
maxRows={1}  fullWidth defaultValue={current_data.number}/> </div>
              <div className="contentBox">       
            <TextField id="modifyAddress1" className="customer-detailBox" required  label="address" multiline
maxRows={1}  fullWidth defaultValue={current_data.address}/></div>  
            <div className="contentBox">  
            <TextField id="modifyTFN1" className="customer-detailBox" required  label="tfn" multiline
maxRows={1}  fullWidth defaultValue={current_data.tfn}/></div>  
           </div>
                  </Modal>
            <Modal
            title={"tip"}
            open={visiable1}
            onOk={remove}
            onCancel={function(){setVisiable1(false)}}
            destroyOnClose={true}
            >
              <p>confirm deletion?</p>
                  </Modal>
            <Modal
            title={null}
            open={visiable5}
            
            onCancel={function(){setVisiable5(false)}}
            closable={false}
            destroyOnClose={true}
            wrapClassName={'web'}
            footer={null}
            >
            <div className="productDetail" onClick={function(){window.print()}}>
            <div className="contentBox">------------------------------</div>
            <div className="contentBox">YesCon</div>
            <div className="contentBox">------------------------------</div>
            <div className="contentBox1">id:{current_data.id}<div className="contentBox1">{current_data.time}</div></div>
            <div className="contentBox1">name:{current_data.name}</div>
            <div className="contentBox1">number:{current_data.number}</div>
            <div className="contentBox1">tfn:{current_data.tfn}</div>  
            <div className="contentBox1">address:{current_data.address}</div> 
            <div className="contentBox">------------------------------</div>
            {current_data.product}
            </div>
                  </Modal>     
        </div>
        
    
    )
}
export default Orders