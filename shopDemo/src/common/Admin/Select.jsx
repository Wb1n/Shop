import React from "react"

const Select = ({setSelect})=> {    
    
    return(
        <div>
            
        <div className="menu-item" onClick={function(){setSelect("users")}} style={{cursor: "pointer"}}>Users</div>
        <div className="menu-item" onClick={function(){setSelect("product")}} style={{cursor: "pointer"}}>Products</div>
        <div className="menu-item" onClick={function(){setSelect("orders")}} style={{cursor: "pointer"}}>Orders</div>
        
        </div>
    
    )
}
export default Select