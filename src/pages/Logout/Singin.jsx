/* eslint-disable react-hooks/rules-of-hooks */
import {useFormik} from "formik";
import { basicSchema } from "../../schemas";
import style from '../../styles/SingIn.module.css'
// import { useNavigate } from "react-router-dom";
// import { singUp } from "../../firebase";

function Singin() {
  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword:""
    },
    onSubmit: (values) => {
      console.log(values.email);
    },
    validationSchema:basicSchema,
  });
  
  // const [fullName, setFullName] = useState("");
  // const [mail, setMail] = useState("");
  // const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  // const handleFullName = (e) => {
  //   setFullName(e.target.value);
  // };
  // const handleMail = (e) => {
  //   setMail(e.target.value);
  // };
  // const handlePassword = (e) => {
  //   setPassword(e.target.value);
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   singUp(fullName, mail, password)
  //     .then(() => {
  //       navigate("/login");
  //       console.log("Done!..")
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };
  return (
    <div className={style.form_container}>
      <form onSubmit={handleSubmit}>
      <label>Adınız</label>
        <input
          type="fullName"
          id="fullName"
          placeholder="Adınızı giriniz.."
          value={values.fullName}
          onChange={handleChange}
        />
        {errors.fullName && <p className="error">{errors.fullName}</p>}
        <label>Email</label>
        <input
          type="email"
          id="email"
          placeholder="Mail adresinizi giriniz.."
          value={values.email}
          onChange={handleChange}
          className={errors.email ? 'input-error' : ''}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <label>Şifre</label>
        <input
          type="password"
          id="password"
          placeholder="Şifrenizi giriniz.."
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}
        <label>Şifre Onayı</label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Şifrenizi tekrar giriniz.."
          value={values.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
}

export default Singin;
