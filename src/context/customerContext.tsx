import { yupResolver } from "@hookform/resolvers/yup"
import { ReactNode, useEffect, createContext, useState } from "react"
import {
  DeepRequired,
  FieldErrorsImpl,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { formSchemaRegisterCustomer } from "../components/Requireds"
import api from "../services/apiRequest"

interface PropsData {
  children: ReactNode
}

export interface ProviderStatesData {
  authorization: boolean
  setAuthorization?: React.Dispatch<React.SetStateAction<boolean>>
  register: UseFormRegister<IDataOnSubmit>
  handleSubmit: UseFormHandleSubmit<IDataOnSubmit>
  errors: FieldErrorsImpl<DeepRequired<IDataOnSubmit>>
  onSubmit: (data: IDataOnSubmit) => void
  onSubmitLogin: (data: DataOnSubmitLogin) => void
  modalLogin: boolean
  setModalLogin: React.Dispatch<React.SetStateAction<boolean>>
  modalContactOpen: boolean
  setModalContactOpen: React.Dispatch<React.SetStateAction<boolean>>
  contactsInfo: boolean
  setContactsInfo: React.Dispatch<React.SetStateAction<boolean>>
  customer: null | ICustomerInfo
  setCustomer: React.Dispatch<React.SetStateAction<null>>
}

export interface DataOnSubmitLogin {
  email: string
  password: string
}

interface IDataOnSubmit {
  fullname: string
  email: string
  password: string
  confirmPassword: string
  phone: string
  confirmPhone: string
}

export interface IContact {
  id: string
  fullname: string
  email: string
  phone: string
  isActive: boolean
}

export interface ICustomerInfo {
  id: string
  fullname: string
  email: string
  phone: string
  isActive: boolean
  createdAt: string
  contacts?: IContact[]
}

export const CustomerContext = createContext<ProviderStatesData>(
  {} as ProviderStatesData
)

function CustomerProvider({ children }: PropsData) {
  let navigate = useNavigate()
  const [authorization, setAuthorization] = useState(false)
  const [modalLogin, setModalLogin] = useState(true)
  const [modalContactOpen, setModalContactOpen] = useState(false)
  const [contactsInfo, setContactsInfo] = useState(false)
  const [customer, setCustomer] = useState(null)

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      api.defaults.headers.Authorization = `bearer ${localStorage.getItem(
        "authToken"
      )}`
      api
        .get("/customers/", {})
        .then((res) => {
          setAuthorization(true)
          setCustomer(res.data)
          navigate("/dashboard")
        })
        .catch((res) => setAuthorization(false))
    }
  }, [])

  const onSubmitLogin = (data: DataOnSubmitLogin) => {
    api
      .post("/customers/login/", data)
      .then((response) => {
        window.localStorage.setItem("authToken", response.data.token)
        window.localStorage.setItem("id", response.data.customer.id)

        toast.success("Redirecionando...", {
          autoClose: 700,
        })
        navigate("/dashboard", { replace: true })
      })
      .catch((error) => {
        if (error.response.data.message) {
          toast.error("Ops! Email ou senha errada!", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500,
          })
        }
      })
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataOnSubmit>({
    resolver: yupResolver(formSchemaRegisterCustomer),
  })

  const onSubmit = (data: IDataOnSubmit) => {
    console.log(data)
    api
      .post("/customers", data)
      .then((response) => {
        navigate("/customers/login")
        toast.success("Conta criada com sucesso!", {
          autoClose: 1500,
        })
      })
      .catch((error) => {
        if (error.response.data.message) {
          toast.error("Ops! Esse email já existe!", {
            autoClose: 1500,
          })
        }
      })
  }
  return (
    <CustomerContext.Provider
      value={{
        register,
        handleSubmit,
        errors,
        authorization,
        setAuthorization,
        onSubmit,
        onSubmitLogin,
        modalLogin,
        setModalLogin,
        modalContactOpen,
        setModalContactOpen,
        contactsInfo,
        setContactsInfo,
        customer,
        setCustomer
      }}
    >
      {children}
    </CustomerContext.Provider>
  )
}

export default CustomerProvider
