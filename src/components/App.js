import React from 'react';
import './styles/App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import Main from './Main';
import Menu from './Menu';
import OrderForm from './OrderForm';
import ErrorPage from './ErrorPage';
import Bottom from './Bottom';

function App() {
  return (
    <div className="App">
      <div className="Container">
        <BrowserRouter>
          <Navigation/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/menu" component={Menu} />
              <Route path="/build-a-burger" component={Main} />
              <Route path="/order" component={OrderForm} />
              <Route component={ErrorPage} />
            </Switch>
          <Bottom/>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
