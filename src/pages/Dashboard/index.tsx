import { IoMdTrash } from "react-icons/io"
import { Link, Navigate } from "react-router-dom"
import {
  ButtonExit,
  Container,
  ContainerContacts,
  InfoCustomer,
  Main,
} from "./style"
import api from "../../services/apiRequest"
import { useContext, useState } from "react"
import { ICustomerInfo, CustomerContext } from "../../context/customerContext"
import { useEffect } from "react"
import { toast } from "react-toastify"
import { ModalContacts } from "../../components/Modal"

export const Dashboard = () => {
  const { setModalContactOpen, contactsInfo, setContactsInfo, customer } =
    useContext(CustomerContext)
  const token = window.localStorage.getItem("authToken")
  const id = window.localStorage.getItem("id")
  const [customerContactInfo, setCustomerContactInfo] = useState<ICustomerInfo>(
    {} as ICustomerInfo
  )

  const contact = async () => {
    return await api
      .get(`/contacts/${id}`)
      .then((response) => {
        setCustomerContactInfo(response.data)
      })
      .catch((err) => err)
  }

  const deleteContact = async (id: string) => {
    return await api
      .delete(`/contacts/customers/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then(() => {
        toast.success("Contato deletado!", {
          autoClose: 1500,
        })
      })
  }
  useEffect(() => {
    contact()
  }, [contactsInfo])
  console.log(customer?.contacts)
  return (
    <Main>
      <Container>
        <ModalContacts />

        <Link to="/home">
          <div className="div-btn">
            <ButtonExit
              onClick={() => {
                window.localStorage.clear()
              }}
            >
              Sair
            </ButtonExit>
          </div>
        </Link>

        <InfoCustomer>
          <div className="content">
            <h1 className="title1">{`Olá, ${customer?.fullname}`}</h1>
          </div>
        </InfoCustomer>
        <ContainerContacts>
          <div className="infos">
            <h1 className="title2">Contatos</h1>
            <button
              onClick={() => setModalContactOpen(true)}
              className="buttonPlus"
            >
              +
            </button>
          </div>
          <ul className="list-Contacts">
            {customer?.contacts?.length ? (
              customer?.contacts?.map((contact) => (
                <li key={contact.id} className="title3 contact">
                  <span>{contact.fullname}</span>
                  <div className="contact--trash">
                    <p className="headline">{contact.email}</p>
                    <IoMdTrash
                      onClick={async () => {
                        await deleteContact(contact.id)
                        setContactsInfo(!contactsInfo)
                      }}
                      className="trash"
                    />
                  </div>
                </li>
              ))
            ) : (
              <ul className="list-Contacts">
                <span className="title3">
                  Não foi encontrado nenhum contato!
                </span>
              </ul>
            )}
          </ul>
        </ContainerContacts>
      </Container>
    </Main>
  )
}
