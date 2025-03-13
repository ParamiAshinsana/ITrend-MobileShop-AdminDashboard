import React, { useEffect, useState } from "react";
import axios from "axios";

interface Customer {
  id: number;
  name: string;
  email: string;
}

const Customers: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5000/customers") // Adjust the backend URL as needed
      .then(response => setCustomers(response.data))
      .catch(error => console.error("Error fetching customers:", error));
  }, []);

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>Customers</h3>
        <button className="add-button">Add Customer</button>
      </div>
      <div className="main-cards">
        <table className="customer-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {customers.map(customer => (
              <tr key={customer.id}>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Customers;

































// import React, { useState } from "react";


// const Customers = () => {
  

//   return (
//     <main className='main-container'>
//             <div className='main-title'>
//                 <h3>CUSTOMERSSS</h3>
//             </div>
    
//             <div className='main-cards'>
                
//             </div>
//         </main>
//   );
// };

// export default Customers;