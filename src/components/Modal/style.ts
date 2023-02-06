import styled from "styled-components"
import "animate.css"

export const ModalLogin = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  font-family: "Montserrat", sans-serif;
  z-index: 10;
  h2 {
    color: #090446;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .btn-exit {
    width: 90%;
    display: flex;
    justify-content: end;
    button {
      font-size: 16px;
      font-family: "Montserrat", sans-serif;
      font-weight: 700;
      border-radius: 50%;
      margin-top: 10px;
      :hover {
        opacity: 80%;
      }
    }
  }
  .box-login {
    background-color: #545e56;
    color: #090446;
    max-width: 310px;
    width: 100%;
    font-weight: 600;
    max-height: 400px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border: none;
    border-radius: 12px;
    animation: fadeIn 0.5s;
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
      width: 100%;
      div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 80%;
        gap: 10px;
        line-height: 5px;
      }
      input {
        font-family: "Montserrat", sans-serif;
        width: 100%;
        padding: 8px 0 8px 8px;
        font-size: 14px;
        background-color: #e0e0ce;
        border: 1px solid #343b41;

        color: #090446;
        border-radius: 8px;
        outline: 0;
        &:focus {
          background-color: beige;
          border: 1px transparent #090446;
        }
      }
    }
  }
  .buttonRegister {
    background-color: #090446;
    color: #e0e0ce;
    border: transparent;
    &:hover {
      background-color: #343b41;
      color: #090446;
    }
  }
`
