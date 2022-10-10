import React, {useState, useEffect} from "react";
import {cience} from "../Components/Cience";
import { Routes } from "../Components/root/Routers";
import {technology} from "../Components/Technology";
import { BrowserRouter as Rooter, Switch, Route, Link, Form } from "react-router-dom";




function App  ()  {
    return (
      <Rooter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link to="/technology">TECHNOLOGY</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link to="/cience">SCIENCE</Link>
          </li>
        </ul>

        {/* <Switch>
          <Route exact path="/">
            <index />

          </Route>

          <Route path="/technology">
            <technology />

          </Route>

          <Route path="/cience">
            <cience />

          </Route>



        </Switch> */}
      </Rooter>
       
    )
}







export default App;
