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
// import Dashboard from './Dashboard';
import Products from './Products';
import Categories from './Categories';
import Customers from './Customers';
import Inventory from './Inventory';
import Reports from './Reports';
import Settings from './Settings';
import Home from './Home';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <Router>
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        
        <main className="main-content">
          <Routes>
             <Route path="/" element={<Home />} />
            {/*<Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="/products" element={< Products />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

