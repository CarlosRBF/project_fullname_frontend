import styled from "styled-components"

export const ContainerForm = styled.div`
  animation: fadeIn 2s;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
  border-radius: 16px;
  background-color: #545e56;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.95);
  .container--textForm {
    margin-top: 40px;
  }
  .title1 {
    color: #090446;
    font-family: "Montserrat", sans-serif;
    font-size: 30px;
  }
`

export const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  label {
    cursor: pointer;
    margin-top: 10px;
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    color: #090446;
    font-weight: 500;
  }
  input {
    margin-top: 8px;
  }
  p {
    display: flex;
    justify-content: center;
    margin-top: 5px;
    font-family: "Montserrat", sans-serif;
    font-size: 12px;
    color: #090446;
    font-weight: 500;
  }
`

export const Inputs = styled.input`
  text-align: center;
  padding: 14px;
  background-color: #e0e0ce;
  color: #090446;
  border-radius: 8px;
  border: 1px solid #343b41;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 500;
  &:focus {
    background-color: beige;
    border: 1px transparent #090446;
  }
`
export const Button = styled.button`
  margin-top: 35px;
  margin-bottom: 25px;
  padding: 12px 14px;

  background-color: #e0e0ce;
  color: #090446;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;

  border: transparent;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #090446;
    border: 1px transparent #090446;
    color: #e0e0ce;
  }
`

export const ButtonComeback = styled.button`
  width: 300px;
  height: 50px;
  margin-bottom: 20px;
  background-color: #090446;
  font-family: "Montserrat", sans-serif;
  border: transparent;
  color: beige;
  &:hover {
    background-color: beige;
    color: #090446;
    border: 1px transparent #343b41;
  }
`
