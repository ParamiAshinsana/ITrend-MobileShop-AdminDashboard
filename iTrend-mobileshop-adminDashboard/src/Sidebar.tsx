// import React from 'react';
// import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
//   BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';

// type SidebarProps = {
//   openSidebarToggle: boolean; // Boolean to track sidebar state
//   OpenSidebar: () => void; // Function to toggle sidebar
// };

// function Sidebar({ openSidebarToggle, OpenSidebar }: SidebarProps) {
//   return (
//     <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
//       <div className="sidebar-title">
//         <div className="sidebar-brand">
//           <BsCart3 className="icon_header" /> SHOP
//         </div>
//         <span className="icon close_icon" onClick={OpenSidebar}>X</span>
//       </div>

//       <ul className="sidebar-list">
//         <li className="sidebar-list-item">
//           <a href="">
//             <BsGrid1X2Fill className="icon" /> Dashboard
//           </a>
//         </li>
//         <li className="sidebar-list-item">
//           <a href="">
//             <BsFillArchiveFill className="icon" /> Products
//           </a>
//         </li>
//         <li className="sidebar-list-item">
//           <a href="">
//             <BsFillGrid3X3GapFill className="icon" /> Categories
//           </a>
//         </li>
//         <li className="sidebar-list-item">
//           <a href="">
//             <BsPeopleFill className="icon" /> Customers
//           </a>
//         </li>
//         <li className="sidebar-list-item">
//           <a href="">
//             <BsListCheck className="icon" /> Inventory
//           </a>
//         </li>
//         <li className="sidebar-list-item">
//           <a href="">
//             <BsMenuButtonWideFill className="icon" /> Reports
//           </a>
//         </li>
//         <li className="sidebar-list-item">
//           <a href="">
//             <BsFillGearFill className="icon" /> Setting
//           </a>
//         </li>
//       </ul>
//     </aside>
//   );
// }

// export default Sidebar;





























import React from 'react';
import { Link } from 'react-router-dom';
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';

type SidebarProps = {
  openSidebarToggle: boolean; // Boolean to track sidebar state
  OpenSidebar: () => void; // Function to toggle sidebar
};

function Sidebar({ openSidebarToggle, OpenSidebar }: SidebarProps) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" /> SHOP
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>X</span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          {/* <a href="">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </a> */}
          <Link to="/">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </Link>
        </li>
        <li className="sidebar-list-item">
          {/* <a href="">
            <BsFillArchiveFill className="icon" /> Products
          </a> */}
          <Link to="/products">
            <BsFillArchiveFill className="icon" /> Products
          </Link>
        </li>
        <li className="sidebar-list-item">
          {/* <a href="">
            <BsFillGrid3X3GapFill className="icon" /> Categories
          </a> */}
          <Link to="/categories">
            <BsFillGrid3X3GapFill className="icon" /> Categories
          </Link>
        </li>
        <li className="sidebar-list-item">
          {/* <a href="">
            <BsPeopleFill className="icon" /> Customers
          </a> */}
          <Link to="/customers">
            <BsPeopleFill className="icon" /> Customers
          </Link>
        </li>
        <li className="sidebar-list-item">
          {/* <a href="">
            <BsListCheck className="icon" /> Inventory
          </a> */}
          <Link to="/inventory">
            <BsListCheck className="icon" /> Inventory
          </Link>
        </li>
        <li className="sidebar-list-item">
          {/* <a href="">
            <BsMenuButtonWideFill className="icon" /> Reports
          </a> */}
          <Link to="/reports">
            <BsMenuButtonWideFill className="icon" /> Reports
          </Link>
        </li>
        <li className="sidebar-list-item">
          {/* <a href="">
            <BsFillGearFill className="icon" /> Setting
          </a> */}
          <Link to="/settings">
            <BsFillGearFill className="icon" /> Settings
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
