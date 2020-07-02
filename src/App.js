import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Homepage from "./components/Homepage"
import StudyLog from "./components/StudyLog"
import CreateUser from "./components/CreateUser"
import EditLog from "./components/EditLog"
import CreateLog from "./components/CreateLog"

function App() {
  return (
    <Router>
      <div className="has-background-white-ter">
        <Navbar />
        <br />
        <Route path="/" exact component={Homepage} />
        <Route path="/logs" exact component={StudyLog} />
        <Route path="/edit/:id" component={EditLog} />
        <Route path="/create" component={CreateLog} />
        <Route path="/user" component={CreateUser} />
        <Footer />
      </div>
    </Router>


  );
}

export default App;
