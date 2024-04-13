import React from "react"
import "./Header.css"
import Search from "./Search"
import Head from "./Head"


const Header = ({ setState, setRes,CartItem }) => {
  return (
    <>
      <Head />
      <Search setState={setState} setRes={setRes} CartItem={CartItem} />

    </>
  )
}

export default Header
