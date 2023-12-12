import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

export const basicSchema = yup.object().shape({
  fullName: yup.string().required("Lütfen adınızı giriniz"),
  email: yup
    .string()
    .email("Geçerli bir email giriniz")
    .required("Email girmek zorunludur"),
  password: yup
    .string()
    .min(6, "Lütfen minimum 6 karakter giriniz")
    .matches(passwordRules, {
      message: "Lütfen en az 1 büyük harf,1 küçük harf ve 1 sayı giriniz.",
    })
    .required("Şifre girmek zorunludur"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Şifreler eşleşmiyor")
    .required("Şifre girmek zorunludur"),
});
