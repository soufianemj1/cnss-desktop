import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';



const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);
  const AdminData = {email: email, password: password};
  let loginVerification = async () => {
    let response = await axios.post("http://localhost:4000/api/admin/login", AdminData);
    if(!response.data.error){
      navigate("/dashboard");
    }else{
     setInvalid(true);
    }
  }

  return (
    <div>
      <h1 className="text-black text-xl">Veuillez entrez les infos</h1>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text text-black">Email</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text text-black">Password</span>
        </label>
        <input
          type="password"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setPassword(e.target.value)}
        />
        {invalid && <label className="label">
          <span className="label-text text-red-600">informations invalide</span>
        </label>}
        

      </div>
      <button onClick={loginVerification} className="btn btn-sm mt-6 ">Connecte</button>

    </div>
  );
};

export default Login;
