import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import * as dayjs from 'dayjs';


const PatientsFolders = () => {
    const [patients, setPatients] = useState([]);
    const gettingRepayements = async () => {
        const getPatients = await axios.get(
            "http://localhost:4000/api/remboursement/getall"
        );
        setPatients(getPatients.data.data);   
    }
    useEffect(() => {
        gettingRepayements();
    }, []);
    patients.forEach(element => {
       console.log(element.patientId.cin);
    });
       
   
  return (
    <div>
        <section className=" py-0 lg:py-[120px]">
   <div className="container">
      <div className="flex flex-wrap -mx-4">
         <div className="w-full px-4">
            <div className="max-w-full overflow-x-auto">
               <table className="table-auto w-full">
                  <thead>
                     <tr className="bg-primary text-center">
                        <th
                           className="
                           w-1/6
                           min-w-[100px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           border-l border-transparent
                           "
                           >
                           Nom
                        </th>
                        <th
                           className="
                           w-1/6
                           min-w-[100px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           "
                           >
                           CIN
                        </th>
                        <th
                           className="
                           w-1/6
                           min-w-[100px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           "
                           >
                           Rembourseement
                        </th>
                        <th
                           className="
                           w-1/6
                           min-w-[100px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           "
                           >
                            Date
                        </th>
                        
                     </tr>
                  </thead>
                  <tbody>
                      {patients.map((patient,index) => (
                        <tr key={index}>
                         
                        <td
                           className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-2
                           px-2
                           bg-[#F3F6FF]
                           border-b border-l border-[#E8E8E8]
                           "
                           >
                           {patient.patientId.name}
                        </td>
                        <td
                           className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-2
                           px-2
                           bg-white
                           border-b border-[#E8E8E8]
                           "
                           >
                           {patient.patientId.cin}
                        </td>
                        <td
                           className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-2
                           px-2
                           bg-white
                           border-b border-[#E8E8E8]
                           "
                           >
                           {patient.repayement} DH
                        </td>
                       
                        <td
                           className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-2
                           px-2
                           bg-white
                           border-b border-[#E8E8E8]
                           "
                           >
                           {dayjs(patient.createdAt).format('DD/MM/YYYY')}
                        </td>
                              
                       
                     </tr>
                      ))}
                     
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   </div>
</section>
    </div>
  )
}

export default PatientsFolders