import Orders from "./Orders"
import Product from "./Product"
import Users from "./Users"
const Content = ({select})=> {
    const content=()=>{
      if(select === "product"){
        return(
          <Product></Product>
        )}
      if(select === "orders"){
        return(
          <Orders></Orders>
        )}
      if(select === "users"){
        return(
          <Users></Users>
        )
      }}
  return ( 
    <div>
      {content()}
    </div>
    
  )
}
export default Content