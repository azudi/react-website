import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counters from './component/counters';
import './bootstrap.css';
import { BrowserRouter as Router, Switch ,Route} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
     <Route path="/gallery" exact component={Gallery}/>
     </Switch>
     </Router>
  </React.StrictMode>,
  document.getElementById('others')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
