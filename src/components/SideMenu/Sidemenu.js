import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import "./Sidemenu.css";


const Sidemenu = () => {
  const history = useHistory();
  return (
    <div className="Sidemenu">
      <ul className="side-container">
        <div className="crm-title">CRM</div>
        <hr className="side_menu_line"></hr>
        <div className="SideMenu_Item">
          <button
            className="sidemenu_button"
            onClick={() => history.push("/")}
          >
            Dashboard
          </button>
        </div>
        <hr className="side_menu_line"></hr>
        <div className="SideMenu_Item">
          <button
            className="sidemenu_button"
            onClick={() => history.push("/LoginForm")}
          >
            Login
          </button>
        </div>
        <hr className="side_menu_line"></hr>
        <div className="SideMenu_Item">
          <button
            className="sidemenu_button"
            onClick={() => history.push("/Registration")}
          >
            Registration
          </button>
        </div>
        <hr className="side_menu_line"></hr>
        <div className="SideMenu_Item">
          <button
            className="sidemenu_button"
            onClick={() => history.push("/ForgotPassword")}
          >
            ForgotPassword
          </button>
        </div>
        <hr className="side_menu_line"></hr>
        <div className="SideMenu_Item">
          <button
            className="sidemenu_button"
            onClick={() => history.push("/Admin")}
          >
            Admin
          </button>
        </div>
        <hr className="side_menu_line"></hr>
        <div className="SideMenu_Item">
          <button
            className="sidemenu_button"
            onClick={() => history.push("/Manager")}
          >
            Manager
          </button>
        </div>
        <hr className="side_menu_line"></hr>
        <div className="SideMenu_Item">
          <button
            className="sidemenu_button"
            onClick={() => history.push("/Employee")}
          >
            Employee
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Sidemenu;
