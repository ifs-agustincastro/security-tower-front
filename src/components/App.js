import React from 'react';
import { Navbar } from 'react-bootstrap';
import '../styles/Header.css';
import Dashboard from './dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" className="header">
        <Navbar.Brand href="#home">Security Tower</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Agustin Castro</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <Dashboard/>
    </div>
  );
}

export default App;
