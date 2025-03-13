import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Customers.css"; // Import the CSS file

interface Customer {
  id: number;
  fullName: string;
  email: string;
}

const Customers: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/auth/users") // Adjust backend URL
      .then((response) => setCustomers(response.data))
      .catch((error) => console.error("Error fetching customers:", error));
  }, []);

  return (
    <div className="customers-container">
      <div className="header">
        <h3>Customers</h3>
        <button className="add-button">Add Customer</button>
      </div>

      <table className="customer-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={customer.id}>
              <td>{index + 1}</td>
              <td>{customer.fullName}</td>
              <td>{customer.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
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