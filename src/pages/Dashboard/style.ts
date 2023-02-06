import styled from "styled-components"

export const Main = styled.div`
  width: 100%;
  height: 100%;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  .div-btn {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`

export const ButtonExit = styled.button`
  display: flex;
  justify-content: center;
  width: 100px;
  height: 40px;
  align-items: center;
  background-color: #090446;
  color: white;
  border: transparent;
  &:hover {
    background-color: #545e56;
    color: white;
  }
`

export const InfoCustomer = styled.div`
  height: 150px;
  margin-top: 35px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid #090446;
  border-bottom: 2px solid #090446;
  .title1 {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 26px;
    color: #090446;
  }
`

export const ContainerContacts = styled.div`
  .infos {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 100px;
  }
  .title2 {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 20px;
    color: #090446;
  }
  .title3 {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 18px;
    color: #090446;
  }
  .buttonPlus {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 26px;
    background-color: #090446;
    color: white;
    border: transparent;
    padding: 2px 8px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 20px;
    transition: 500ms;
    &:hover {
      -moz-transform: scale(1.1);
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
      background-color: #545e56;
      color: white;
    }
  }
  .list-Contacts {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 12px;
    margin-top: 28px;
    background-color: rgba(var(--grey-3), 1);
  }
  .contact {
    margin: 0 auto;
    width: 520px;
    justify-content: space-between;
    background-color: rgba(var(--grey-4), 1);
    border-radius: 4px;
    padding: 12px;
    display: flex;
    &:hover {
      background-color: rgba(var(--grey-2), 1);
    }
  }
  .contact--trash {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
  .tech--trash {
    display: flex;
    gap: 25px;
    align-items: center;
    .trash {
      font-size: 15px;
      transition: 300ms;
      cursor: pointer;
      &:hover {
        color: rgba(var(--grey-4), 1);
        -moz-transform: scale(1.4);
        -webkit-transform: scale(1.4);
        transform: scale(1.4);
      }
    }
  }
`
