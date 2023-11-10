import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import ForgotPasswordForm from "./Authentication_Components/ForgotPasswordForm";
import LoginForm from "./Authentication_Components/LoginForm";
import RegistrationForm from "./Authentication_Components/RegistrationForm";
import Admin from "./UserManagement/Admin";
import Manager from "./UserManagement/Manager";
import Employee from "./UserManagement/Employee";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Sidemenu from "./components/SideMenu/Sidemenu";

function App() {
  return (
    <div className="App">
      <Sidemenu></Sidemenu>
      <Switch>
        <Route exact path="/">
          <Dashboard></Dashboard>
        </Route>
        <Route path="/LoginForm">
          <LoginForm></LoginForm>
        </Route>
        <Route path="/Registration">
          <RegistrationForm></RegistrationForm>
          {/* <ServiceRequest></ServiceRequest>
          <Lead></Lead> */}
        </Route>
        <Route path="/ForgotPassword">
          <ForgotPasswordForm></ForgotPasswordForm>
          {/* <LeadStatus></LeadStatus> */}
          {/* <ServiceRequestStatus></ServiceRequestStatus> */}
        </Route>
        <Route path="/Admin">
          <Admin></Admin>
        </Route>
        <Route path="/Manager">
          <Manager></Manager>
        </Route>
        <Route path="/Employee">
          <Employee></Employee>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
