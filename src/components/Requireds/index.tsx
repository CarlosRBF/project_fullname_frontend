import * as yup from "yup"

export const formSchemaRegisterCustomer = yup.object().shape({
  fullname: yup
    .string()
    .required("Nome Completo obrigatório")
    .max(155, "Seu nome pode conter no máximo 155 caracteres"),
  email: yup
    .string()
    .email("Tipo de email inválido")
    .required("Email Obrigatório"),
  password: yup
    .string()
    .min(8, "A senha deve ter pelo menos 8 caracteres")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      "Senha deve conter 1 número, 1 caracter especial uma letra maiúscula e minúscula"
    )
    .required(),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password")],
      "Confirmação de senha deve ser igual a senha"
    ),
  phone: yup
    .string()
    .required("Digite um número válido")
    .matches(
      /^[(][0-9]{2}[)][0-9]{5}[-][0-9]{4}$/,
      "Número invalido!  Ex:(11)22222-3333"
    ),
  confirmPhone: yup
    .string()
    .oneOf([yup.ref("phone")], "Os números do telefone devem ser iguais"),
})

export const formSchemaLoginCustomer = yup.object().shape({
  email: yup
    .string()
    .email("Tipo de email inválido")
    .required("Email Obrigatório"),
  password: yup.string().required("Senha Obrigatória"),
})
