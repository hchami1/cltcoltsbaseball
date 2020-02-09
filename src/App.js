import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route, Switch } from "react-router-dom";
import Home from './views/Home';
import Teams from './views/Teams';
import Gallery from './views/Gallery';
import About from './views/About';
import Contact from './views/Contact';
import history from "./utils/history";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Toolbar from './components/Toolbar';
import Footer from './components/Footer';


function App() {
  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <Container fluid style={{ background: "#f5f5f5" }}>
          <Toolbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/teams" exact component={Teams} />
            <Route path="/gallery" exact component={Gallery} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </Container>
        <Footer />
      </div>

    </Router>
  );
}

export default App;
