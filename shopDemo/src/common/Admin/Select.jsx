import React from "react"

const Select = ({setSelect})=> {    
    
    return(
        <div>
        <div className="menu-item" onClick={function(){setSelect("product")}} style={{cursor: "pointer"}}>商品</div>
        <div className="menu-item" onClick={function(){setSelect("orders")}} style={{cursor: "pointer"}}>订单</div>
        </div>
    
    )
}
export default Select