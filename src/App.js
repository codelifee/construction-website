import React, {useState} from 'react';
import { Navbar } from './components/Navbar';
import GlobalStyle from './globalStyles';
import Hero from './components/Hero'
import { SliderData } from './data/SliderData';
import Dropdown from './components/Dropdown';
import InfoSection from './components/InfoSection';
import { InfoData } from './data/InfoData';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Router>
        <Switch>
          <Route>
          </Route>
          <GlobalStyle />
          <Navbar toggle={toggle} />
          <Dropdown isOpen={isOpen} toggle={toggle} />
          <Hero slides={SliderData}/>
          <InfoSection {...InfoData}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
