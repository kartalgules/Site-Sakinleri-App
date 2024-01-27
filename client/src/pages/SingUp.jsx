import {useState} from "react";
import { useSingUp } from './hooks/useSingUp'

const SingUp = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const { singup, loading, err } = useSingUp();

    const handleSubmit = async (e) => {
        e.preventDefault;
        await singup(email,password)
    }

  return (
    <>
        <form className="singup" onSubmit={handleSubmit}>
            <h3>Sing Up</h3>
            <label>Email :</label>
            <input type="email" onChange={e => setEmail(e.target.value)} />

            
            <label>Password :</label>
            <input type="password" onChange={e => setPassword(e.target.value)} />

            <button disabled={loading} type='submit'>Sing Up</button>
            {err && <div className="error">{err}</div>}
        </form>
    </>
  )
};


export default SingUp;