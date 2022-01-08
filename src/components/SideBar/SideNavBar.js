import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

function SideNavBar() {
  const [open, setOpen] = useState(false);
  console.log(open);

  return (
    <div className={open ? "sidebar open" : "sidebar"}>
      <div className="logo-details">
        <div className="logo_name">Cakee It</div>
        <i
          className={open ? "bx bx-menu-alt-right" : "bx bx-menu"}
          id="btn"
          onClick={() => setOpen(!open)}
        ></i>
      </div>
      <h6 style={{color: "white"}}>Admin</h6>

      <ul className="nav-list-side-d">
        <li>
          <Link to="/">
            <i className="bx bx-grid-alt"></i>
            <span className="links_name">Dashboard</span>

            <span className="tooltip">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="orders">
            <i className="bx bx-cart-alt"></i>
            <span className="links_name">Orders</span>
            <span className="tooltip">Orders</span>
          </Link>
        </li>
        <li>
          <Link to="users">
            <i className="bx bx-user"></i>
            <span className="links_name">User List</span>
            <span className="tooltip">Users List</span>
          </Link>
        </li>
        <li>
          <Link to="bakers">
            <i className="bx bx-cake"></i>
            <span className="links_name">Bakers List</span>
            <span className="tooltip">Bakers List</span>
          </Link>
        </li>
        <li>
          <Link to="shipping_partners">
            <i className="bx bx-package"></i>
            <span className="links_name">Shipping Partner</span>
            <span className="tooltip">Shipping Partner</span>
          </Link>
        </li>
        <li>
          <Link to="all_products">
            <i className="bx bx-box"></i>
            <span className="links_name">All Products</span>
            <span className="tooltip">All Products</span>
          </Link>
        </li>

        <li className="profile">
          <div className="profile-details">
            <img src="" alt="profileImg" />
            <div className="name_job">
              <div className="name">Deep Hansda</div>
              <div className="job">Web designer</div>
            </div>
          </div>
          <i className="bx bx-log-out" id="log_out"></i>
        </li>
      </ul>
    </div>
  );
}

export default SideNavBar;
