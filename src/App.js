import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import { Login, MainView, Register } from "./components";

const App = () => {
  return (
    <Container fluid className="bg-dark" style={{minHeight:"100vh"}}>
      <Switch>
        <Route exact path="/"> <Login /> </Route>
        <Route exact path="/register"> <Register/> </Route>
        <Route path="/main"> <MainView /> </Route>
      </Switch>
    </Container>
  );
};

export default App;
