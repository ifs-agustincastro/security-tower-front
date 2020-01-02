import React from 'react';
import { Navbar, Dropdown, DropdownButton, Nav } from 'react-bootstrap';
import '../styles/Header.css';
import Dashboard from './dashboard/Dashboard';
import TableHome from './dataTable/TableHome';
import { Route, Switch } from 'react-router';

function App() {
  return (
    <div className="App">

      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Security Tower</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="mr-auto">
            <Nav.Link href="#statistics">Statistics</Nav.Link>
          </Nav>

          <Nav>
            <DropdownButton id="project-nav-dropdown" variant="secondary" title="Data Platform">
                <Dropdown.Item href="#action/2.1">Data Platform</Dropdown.Item>
                <Dropdown.Item href="#action/2.2">My Smart Loan</Dropdown.Item>
                <Dropdown.Item href="#action/2.3">Alpha Connect</Dropdown.Item>
            </DropdownButton>

            <DropdownButton id="environment-nav-dropdown" variant="secondary" title="All Environments"> 
                <Dropdown.Item href="#action/3.1">Develop</Dropdown.Item>
                <Dropdown.Item href="#action/3.2">Test</Dropdown.Item>
                <Dropdown.Item href="#action/3.3">Staging</Dropdown.Item>
                <Dropdown.Item href="#action/3.4">Production</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#action/3.5">All Environments</Dropdown.Item>
            </DropdownButton>            
              
            <Navbar.Text>
              Signed in as: <a href="#login">Agustin Castro</a>
            </Navbar.Text>
          </Nav>

        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/incidents" component={TableHome} />

      </Switch>

    </div>
  );
}

export default App;
