import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import { formSchemaLoginCustomer } from "../Requireds"
import {
  ContainerForm,
  Form,
  Inputs,
  ButtonSend,
  ButtonRegister,
  DivButtonRegister,
} from "./style"
import {
  DataOnSubmitLogin,
  CustomerContext,
} from "../../context/customerContext"
import { useContext, useState } from "react"

export const Login = () => {
  const [modalDashboard, setModalDashboard] = useState(false)
  const { onSubmitLogin, modalLogin, setModalLogin } =
    useContext(CustomerContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataOnSubmitLogin>({
    resolver: yupResolver(formSchemaLoginCustomer),
  })

  return (
    <>
      <ContainerForm>
        <h1 className="title1">Login</h1>
        <Form onSubmit={handleSubmit(onSubmitLogin)}>
          <label htmlFor="email" className="headline-text">
            Email
          </label>
          <Inputs
            id="email"
            className="headline-italic"
            placeholder={"Digite aqui seu email"}
            {...register("email")}
          />
          <p className="headline-textMessage">{errors.email?.message}</p>

          <label htmlFor="password" className="headline-text">
            Senha
          </label>
          <Inputs
            id="password"
            className="headline-italic"
            placeholder={"Digite aqui sua senha"}
            type="password"
            {...register("password")}
          />
          <p className="headline-textMessage">{errors.password?.message}</p>
          <ButtonSend
            type="submit"
            className="registration"
            onClick={() => setModalDashboard(!modalDashboard)}
          >
            Entrar
          </ButtonSend>
        </Form>

        <DivButtonRegister className="button-register-message">
          <p className="headline-bold">Ainda não possui uma conta ?</p>
          <ButtonRegister
            type="submit"
            className="registration"
            onClick={() => setModalLogin(false)}
          >
            Cadastre-se
          </ButtonRegister>
        </DivButtonRegister>
      </ContainerForm>
    </>
  )
}
