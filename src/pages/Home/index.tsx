import { useContext, useState } from "react"
import { Login } from "../../components/Login"
import { Register } from "../../components/Register"
import { CustomerContext } from "../../context/customerContext"

export const Home = () => {
  const { modalLogin ,setModalLogin } = useContext(CustomerContext)

  return <>{modalLogin ? <Login /> : <Register />}</>
}
