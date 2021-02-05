import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route, Switch } from "react-router-dom";
import ListEmployeecomponent from './Components/ListEmployeecomponent';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import CreateemployeeComponent from './Components/CreateemployeeComponent';
import UpdateEmployeeComponent from './Components/UpdateEmployeeComponent';

function App() {
  return (

    <div>
              <Router>
                
                   <HeaderComponent />  
                     <div className="container">
                       <Switch> localhost:3000/add-employee
                         <Route path = "/"   exact component ={ListEmployeecomponent}></Route>
                         <Route path = "/employees"  component ={ListEmployeecomponent}></Route>
                         <Route path = "/add-employee"  component ={CreateemployeeComponent}></Route>
                         <Route path = "/update-employee/:id"  component ={UpdateEmployeeComponent}></Route>
                   </Switch>
                     </div>
          
                
             </Router>
     </div>
  );
}

export default App;
