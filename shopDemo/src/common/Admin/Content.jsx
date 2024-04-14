import Orders from "./Orders"
import Product from "./Product"
const Content = ({select})=> {
    const content=()=>{
      if(select === "product"){
        return(
          <Product></Product>
        )}
      if(select === "orders"){
        return(
          <Orders></Orders>
        )}}
  return ( 
    <div>
      {content()}
    </div>
    
  )
}
export default Content