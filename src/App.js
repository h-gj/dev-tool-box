import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import TSConverter from './pages/TSConverter'
import Home from './pages/Home'


export default function App() {
  return (
    <Router>
      <div>
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/ts" element={<TSConverter />}>
            {/* <Home /> */}
          </Route>
        
          <Route path="/" element={<Home />}>
            {/* <Home /> */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
