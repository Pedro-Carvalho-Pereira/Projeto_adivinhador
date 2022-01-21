import { React } from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import { Home } from "./Pages/Home";
import { Paisnome } from './Pages/Paisnome';




function App() {

  return (<>

    <BrowserRouter>
      
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/paisnome" component={Paisnome} />
        </Switch>
      
    </BrowserRouter >
  </>);

}

export default App;