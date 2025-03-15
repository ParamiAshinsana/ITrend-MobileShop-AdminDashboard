// import { useState } from 'react'
// import './App.css'
// import Header from './Header'
// import Sidebar from './Sidebar'
// import Home from './Home'

// function App() {
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

//   const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle)
//   }

//   return (
//     <div className='grid-container'>
//       <Header OpenSidebar={OpenSidebar}/>
//       <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
//       <Home />
//     </div>
//   )
// }

// export default App


import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Products from './Products';
import Categories from './Categories';
import Customers from './Customers';
import Inventory from './Inventory';
import Reports from './Reports';
import Settings from './Settings';
import Home from './Home';
import CustomerOperations from './CustomerOperations';
import AddCustomer from './AddCutomer';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <Router>
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/customers" element={<Customers openPopup={openPopup} />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/addcustomer" element={<AddCustomer />} />
          </Routes>
        </main>
      </div>
      {showPopup && <CustomerOperations closePopup={closePopup} />}
    </Router>
  );
}

export default App;


// import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
// import Header from './Header';
// import Sidebar from './Sidebar';
// import Products from './Products';
// import Categories from './Categories';
// import Customers from './Customers';
// import Inventory from './Inventory';
// import Reports from './Reports';
// import Settings from './Settings';
// import Home from './Home';
// import CustomerOperations from './CustomerOperations';

// function App() {
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
//   const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

//   const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle);
//   };

//   const closePopup = () => {
//     setShowPopup(false);
//   };

//   return (
//     <Router>
//       <div className='grid-container'>
//         <Header OpenSidebar={OpenSidebar} />
//         <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        
//         <main className="main-content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/products" element={<Products />} />
//             <Route path="/categories" element={<Categories />} />
//             <Route path="/customers" element={<Customers />} />
//             <Route path="/customerop" element={<CustomerOperations closePopup={closePopup} />} />
//             <Route path="/inventory" element={<Inventory />} />
//             <Route path="/reports" element={<Reports />} />
//             <Route path="/settings" element={<Settings />} />
//           </Routes>
          
//           {/* Conditionally render CustomerOperations popup */}
//           {showPopup && <CustomerOperations closePopup={closePopup} />}
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;























































































// import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
// import Header from './Header';
// import Sidebar from './Sidebar';
// // import Dashboard from './Dashboard';
// import Products from './Products';
// import Categories from './Categories';
// import Customers from './Customers';
// import Inventory from './Inventory';
// import Reports from './Reports';
// import Settings from './Settings';
// import Home from './Home';
// import CustomerOperation from './CustomerOperations';
// import CustomerOperations from './CustomerOperations';

// function App() {
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

//   const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle);
//   };

//   return (
//     <Router>
//       <div className='grid-container'>
//         <Header OpenSidebar={OpenSidebar} />
//         <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        
//         <main className="main-content">
//           <Routes>
//              <Route path="/" element={<Home />} />
//             {/*<Route path="/dashboard" element={<Dashboard />} /> */}
//             <Route path="/products" element={< Products />} />
//             <Route path="/categories" element={<Categories />} />
//             <Route path="/customers" element={<Customers />} />
//             <Route path="/inventory" element={<Inventory />} />
//             <Route path="/reports" element={<Reports />} />
//             <Route path="/settings" element={<Settings />} />
//             <Route path="/customerop" element={<CustomerOperations closePopup={function (): void {
//               throw new Error('Function not implemented.');
//             } } />} />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;

