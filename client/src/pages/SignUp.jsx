import {useState} from "react";
import { useSignUp } from '../../hooks/useSingUp'

const SingUp = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const { signup, loading, err } = useSignUp();

    const handleSubmit = async (e) => {
        e.preventDefault;
        await signup(email,password)
    }

  return (
    <>
        <form className="singup" onSubmit={handleSubmit}>
            <h3>Sign Up</h3>
            <label>Email :</label>
            <input type="email" onChange={e => setEmail(e.target.value)} />

            
            <label>Password :</label>
            <input type="password" onChange={e => setPassword(e.target.value)} />

            <button disabled={loading} type='submit'>Sign Up</button>
            {err && <div className="error">{err}</div>}
        </form>
    </>
  )
};


export default SingUp;