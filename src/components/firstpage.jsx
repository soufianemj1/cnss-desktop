import React from 'react'
import CNSS from "../assets/CNSS.svg";
import { useNavigate } from 'react-router-dom';

const Firstpage = () => {
  let navigate = useNavigate();
  let handleClick = () => {
    navigate("/login");
  }
  return (
    <div>
        <div className="flex flex-col justify-center h-full items-center ">
        <img className="w-1/3" src={CNSS} alt="cnss" />
        <h1 className="mt-4 mb-4 text-2xl antialiased font-bold text-blue-900">Bienvenue sur la plateforme CNSS maroc</h1>
        <button onClick={handleClick} className="bg-transparent hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-900 hover:border-transparent rounded">
            Connectez-vous
          </button>
    </div>
    </div>
  )
}

export default Firstpage