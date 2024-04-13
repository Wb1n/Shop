import React from "react"
import "./style.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
const Success = () => {
  
    
    return (
      <>
        <section className='success-items'>
          <div className='container d_flex'>
            <div className='success-total product'>
              <div className='success-data'>Success!</div>
              <div className="d_flex">
              <Link to='/'><div className="success-return">View Orders</div></Link>
              <Link to='/'><div className="success-return">return</div></Link></div>
              
              </div>
          </div>
        </section>
      </>
    )
  }
  
  export default Success