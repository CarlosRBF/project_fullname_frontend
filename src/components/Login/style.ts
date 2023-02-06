import styled from "styled-components"
import "animate.css"

export const ContainerForm = styled.div`
  animation: fadeIn 2s;
  width: 98%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 35px;
  border-radius: 16px;
  background-color: #545e56;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.95);
  h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 30px;
    color: #090446;
    margin-top: 42px;
  }
`

export const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  label {
    margin-top: 28px;
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    color: #090446;
    font-weight: 500;
  }
  input {
    margin-top: 10px;
  }
  p {
    display: flex;
    justify-content: center;
    margin-top: 15px;
    font-family: "Montserrat", sans-serif;
    font-size: 12px;
    color: #090446;
    font-weight: 500;
  }
`

export const Inputs = styled.input`
  text-align: center;
  padding: 14px;
  border-radius: 8px;
  border: 1px solid #343b41;
  background-color: #e0e0ce;
  color: #090446;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 500;
  &:focus {
    background-color: beige;
    border: 1px transparent #090446;
  }
`
export const ButtonSend = styled.button`
  margin-top: 30px;
  padding: 14px;

  background-color: #e0e0ce;
  color: #090446;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;

  border: 1px solid #59323f;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #090446;
    border: 1px transparent #090446;
    color: #e0e0ce;
  }
`
export const DivButtonRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  .p {
    font-family: "Montserrat", sans-serif;
    font-weight: 100;
  }
`

export const ButtonRegister = styled(ButtonSend)`
  width: 300px;
  margin-bottom: 35px;
  background-color: #090446;
  font-family: "Montserrat", sans-serif;
  color: beige;
  &:hover {
    background-color: beige;
    color: #090446;
    border: 1px transparent #343b41;
  }
`
