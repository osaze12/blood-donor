
import './App.css';
import React from 'react';
import {BrowserRouter as Router,Redirect,Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Login from './components/Login';
import Register from './components/Register'
import Home from './components/Home';
import RequestBlood from './components/RequestBlood';
import Search from './components/Search';
import DonorProfile from './components/DonorProfile';

function App() {
  const emergency = [
    {
      bloodGroup: "A+",
      patientName: 'Damilola',
      currentTown: "lagos",
      hospitalAddress: '23, oloke hospital Road',
      fullname: "Agbi Osaze",
      dateRequired: "23-02-2021",
      tel: "08113253726",
      doctorName: 'Olashobu',
      
    },
    {
      bloodGroup: "A+",
      personContact: 'Damilola',
      currentTown: "lagos",
      hospitalAddress: '23, oloke hospital Road',
      fullname: "Agbi Osaze",
      dateRequired: "23-02-2021",
      tel: "08113253726",
      doctorName: 'Olashobu',
      
    }
  ]


  const patient = [
                {
                  bloodGroup: "A+",
                  city: "lagos",
                  email: "osaze@gmail.com",
                  fullname: "Agbi Osaze",
                  gender: "male",
                  lastDonateDate: "23-02-2021",
                  msg: "empty",
                  password: "123",
                  tel: "08113253726",
                  username: "Osaze12",
                  weight: "2.3"
                },
                  {
                    bloodGroup: "A+",
                    city: "lagos",
                    email: "osaze@gmail.com",
                    fullname: "Agbi Osaze",
                    gender: "male",
                    lastDonateDate: "23-02-2021",
                    msg: "empty",
                    password: "123",
                    tel: "08113253726",
                    username: "Osaze12",
                    weight: "2.3"
                  },
                  {
                    bloodGroup: "Aminus",
                    city: "Abuja",
                    email: "favour@gmail.com",
                    fullname: "Tobi Favour",
                    gender: "female",
                    lastDonateDate: "25-02-2021",
                    msg: "empty",
                    password: "123",
                    tel: "08073287634",
                    username: "fav222",
                    weight: "2.2" 
                  },
                  {
                    bloodGroup: "Aplus",
                    city: "Ogun state",
                    email: "kingsley@gmail.com",
                    fullname: "Kingsley Tawa",
                    gender: "male",
                    lastDonateDate: "25-02-2021",
                    msg: "empty",
                    password: "123",
                    tel: "09086757456",
                    username: "tata",
                    weight: "2.2" 
                  }
  ]


  if (!localStorage.getItem("patient")){
    localStorage.setItem("patient", JSON.stringify(patient));
  }

  if (!localStorage.getItem("emergency")){
    localStorage.setItem("emergency", JSON.stringify(emergency))
  }
  

  return (
      <div className="App">
        <Router>
          <Nav />
          <div className="main__view" style={{display: "flex", justifyContent: "center"}}>
       
              <Switch>
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={Register} />
                  <Route path="/request_blood" component={RequestBlood} />
                  <Route path="/search" component={Search} />
                  <Route path="/profile" component={DonorProfile} />
                  <Route path="/logout" render={() => {
                    localStorage.removeItem("singleUser");
                    return <Redirect to="/" />

                  }} />

                  <Route path="/" exact component={Home} />
                  
                  <Route component={Home}/>
              </Switch>

      
          </div>
        </Router>
      </div>
  );
}

export default App;
