import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [patients, setPatients] = useState([]);
  const [patientId, setPatientId] = useState(0);
  const [date, setDate] = useState();
  const [repayement, setRepayement] = useState();
  const [insered, setInsered] = useState(false);

  const gettingPatients = async () => {
    const getPatients = await axios.get(
      "http://localhost:4000/api/patient/getall"
    );
    setPatients(getPatients.data.data);
    
  };
  useEffect(() => {
    gettingPatients();
  }, []);
  // console.log(patients);
  // console.log(repayement);
  // console.log(patientId);
  const AddRepayement = () => {
    axios
      .post("http://localhost:4000/api/remboursement/create", {
        some: repayement,
        patientId: patientId,
        date: date,
      })
      .then((res) => {
        console.log(res);
        setInsered(true);
      });
      setDate("");
      setRepayement("");
      setPatientId(0);

  };
  console.log(insered);

  return (
    <div>
      {insered &&
      <div>
      <div className="alert alert-success shadow-lg">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current  flex-shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Dossier bien inserer</span>
        </div>
      </div>
    </div>
      }
      <div className="flex flex-col text-white justify-center items-center">
        <select
          onChange={(e) => setPatientId(e.target.value)}
          defaultValue={"DEFAULT"}
          className="select mt-12 select-bordered w-full max-w-xs"
        >
          <option value="DEFAULT" disabled>
            Le nom du patient
          </option>
          {patients &&
            patients.map((patient) => {
              return (
                <option key={patient._id} value={patient._id}>
                  {patient.name}
                </option>
              );
            })}
        </select>
        <input
          onChange={(e) => setRepayement(e.target.value)}
          type="text"
          placeholder="Le montant du medicament."
          className="input mt-4 input-bordered w-full max-w-xs"
          value={repayement}
        />
        <div>
          <input
            onChange={(e) => setDate(e.target.value)}
            type="date"
            placeholder="Type here"
            className="input input-bordered mt-4 w-full px-12 max-w-xs"
            value={date}
          />
        </div>
        <div>
          <button className="btn mt-4 bg-blue-800 text-white" onClick={AddRepayement}>
            Enregistrer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
