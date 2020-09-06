import React from 'react';
import './App.css';
import {Home} from './component/Pages/Home/Home'


import { Route ,Switch } from 'react-router-dom';
import { Works } from './component/Pages/Works/Works';
import { Pricing } from './component/Pages/Pricing/Pricing';
import { Slide } from './component/Pages/Home/Slide';
import { Slideno } from './component/Pages/Home/Slideno';
import { Subhome } from './component/Pages/Home/Subhome';


function App() {
  return (
<Switch>

  <Route exact path='/' component={Home}      />
  <Route exact path='/works' component={Works}      />
  <Route exact path='/pricing' component={Pricing}      />
  <Route exact path='/slide' component={Slide}      />
  <Route exact path='/slideno' component={Slideno}      />
  <Route exact path='/subhome' component={Subhome}      />
  
  

  </Switch>



    /*
    <div className="App">
    <Home />
  
    </div>
    */
  );
}

export default App;
