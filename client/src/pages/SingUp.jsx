import {useState} from "react";

const SingUp = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault;

    }

  return (
    <>
        <form className="singup" onSubmit={handleSubmit}>
            <h3>Sing Up</h3>
            <label>Email :</label>
            <input type="email" onChange={e => setEmail(e.target.value)} />

            
            <label>Password :</label>
            <input type="password" onChange={e => setPassword(e.target.value)} />

            <button type='submit'>Sing Up</button>
        </form>
    </>
  )
};


export default SingUp;