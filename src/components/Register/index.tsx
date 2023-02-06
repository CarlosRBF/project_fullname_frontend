import { Button, ButtonComeback, ContainerForm, Form, Inputs } from "./style"
import { useContext, useState } from "react"
import { CustomerContext } from "../../context/customerContext"

export const Register = () => {
  const {
    modalLogin,
    setModalLogin,
    register,
    handleSubmit,
    errors,
    onSubmit,
  } = useContext(CustomerContext)

  return (
    <>
      <ContainerForm>
        <div className="container--textForm">
          <h3 className="title1">Crie sua conta</h3>
        </div>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name" className="headline-text">
            Nome Completo
          </label>
          <Inputs
            id="name"
            className="headline-italic"
            placeholder={"Nome Completo"}
            {...register("fullname")}
          />
          <p className="headline-textMessage">{errors.fullname?.message}</p>

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
            placeholder={"Crie aqui sua senha"}
            type="password"
            {...register("password")}
          />
          <p className="headline-textMessage">{errors.password?.message}</p>

          <label htmlFor="confirmPassword" className="headline-text">
            Confirmar Senha
          </label>
          <Inputs
            id="confirmPassword"
            className="headline-italic"
            placeholder={"Confirme sua senha"}
            type="password"
          />
          <p className="headline-textMessage">
            {errors.confirmPassword?.message}
          </p>

          <label htmlFor="contact" className="headline-text">
            Contato
          </label>
          <Inputs
            id="contact"
            className="headline-italic"
            placeholder={"Informe seu telefone"}
            {...register("phone")}
          />
          <p className="headline-textMessage">{errors.phone?.message}</p>

          <label htmlFor="confirmPhone" className="headline-text">
            Confirmar Contato
          </label>
          <Inputs
            id="confirmPhone"
            className="headline-italic"
            placeholder={"Confirme seu telefone"}
            {...register("confirmPhone")}
          />
          <p className="headline-textMessage">{errors.confirmPhone?.message}</p>

          <Button
            type="submit"
            className="registration"
            onClick={() => setModalLogin(!modalLogin)}
          >
            Cadastrar
          </Button>
        </Form>

        <ButtonComeback onClick={() => setModalLogin(!modalLogin)}>
          Voltar
        </ButtonComeback>
      </ContainerForm>
    </>
  )
}
