import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { useState } from 'react';
import Login from './Login';
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    //BEM NAMING CONVENTION

    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;