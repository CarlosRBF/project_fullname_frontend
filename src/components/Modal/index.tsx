import { yupResolver } from "@hookform/resolvers/yup"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import * as yup from "yup"
import { CustomerContext } from "../../context/customerContext"
import api from "../../services/apiRequest"
import { ModalLogin } from "./style"

interface SubmitModal {
  fullname: string
  email: string
  phone: string
  confirmPhone: string
}

export const ModalContacts = () => {
  const {
    modalContactOpen,
    setModalContactOpen,
    contactsInfo,
    setContactsInfo,
  } = useContext(CustomerContext)

  const formSchema = yup.object().shape({
    fullname: yup.string().required("Nome completo obrigatório"),
    email: yup
      .string()
      .email("Tipo de email inválido")
      .required("Email obrigatório"),
    phone: yup.string().required("Digite um número válido"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubmitModal>({ resolver: yupResolver(formSchema) })

  const onSubmitModal = (data: SubmitModal) => {
    api
      .post(
        "/contacts/",
        {
          fullname: data.fullname,
          email: data.email,
          phone: data.phone,
          confirmPhone: data.confirmPhone,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      )
      .then(() => {
        setContactsInfo(!contactsInfo)
        toast.success("Contato criado com sucesso!", {
          autoClose: 1000,
        })
      })
      .catch((error) => {
        if (error.response.data.message) {
          toast.error("Ops! Essa contato já existe!", {
            autoClose: 1000,
          })
        }
      })
    setModalContactOpen(false)
  }
  return (
    <>
      {modalContactOpen && (
        <ModalLogin>
          <div className="box-login">
            <div className="btn-exit">
              <button onClick={() => setModalContactOpen(false)}>X</button>
            </div>
            <h2>Cadastrar contato</h2>
            <form onSubmit={handleSubmit(onSubmitModal)}>
              <div>
                <label htmlFor="name">Nome Completo</label>
                <input
                  type="text"
                  placeholder="Digite o nome completo"
                  {...register("fullname")}
                />
                <p>{errors.fullname?.message}</p>

                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Digite seu email aqui..."
                  {...register("email")}
                />
                <p>{errors.email?.message}</p>

                <label htmlFor="email">Telefone</label>
                <input
                  type="text"
                  placeholder="Digite o telefone"
                  {...register("phone")}
                />
                <p>{errors.phone?.message}</p>
              </div>
              <button type="submit" className="buttonRegister">
                Cadastrar Contato
              </button>
            </form>
          </div>
        </ModalLogin>
      )}
    </>
  )
}
