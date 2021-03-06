import React, {useState} from 'react';
import { Navbar } from './components/Navbar';
import GlobalStyle from './globalStyles';
import Hero from './components/Hero'
import { SliderData } from './data/SliderData';
import Dropdown from './components/Dropdown';
import InfoSection from './components/InfoSection';
import { InfoData } from './data/InfoData';
import { DemolitionDataOne} from './data/DemolitionData'
import { DemolishDataOne } from './data/DemolishData'
import { DismentleDataOne} from './data/DismantleData'
import Demolition from './components/Demolition';
import Demolish from './components/Demolish';
import Dismentle from './components/Dismentle'
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
          <Route exact path="/home">
            <GlobalStyle />
            <Navbar toggle={toggle} />
            <Dropdown isOpen={isOpen} toggle={toggle} />
            <Hero slides={SliderData}/>
            <InfoSection {...InfoData}/>
          </Route>
          <Route path="/demolition">
            <GlobalStyle />
            <Navbar toggle={toggle} />
            <Demolition {...DemolitionDataOne}/>
          </Route>
          <Route path="/demolish">
            <GlobalStyle />
            <Navbar />
            <Demolish {...DemolishDataOne}/>
          </Route>
          <Route path="/dismantle">
            <GlobalStyle />
            <Navbar />
            <Dismentle {...DismentleDataOne}/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
