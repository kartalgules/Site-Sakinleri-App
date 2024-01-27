import {useState} from "react";
import { useLogin } from "../../hooks/useLogin";

const Logİn = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const {login,loading,err} = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault;
        await login(email,password);
    }

  return (
    <>
        <form className="login" onSubmit={handleSubmit}>
            <h3>Login</h3>
            <label>Email :</label>
            <input type="email" onChange={e => setEmail(e.target.value)} />

            
            <label>Password :</label>
            <input type="password" onChange={e => setPassword(e.target.value)} />

            <button disabled={loading} type='submit'>Login</button>
            {err && <div className="error">{err}</div>}
        </form>
    </>
  )
};


export default Logİn;