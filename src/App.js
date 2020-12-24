import React from "react";
import "./App.css";
import Rooms from "./pages/rooms";
import Home from "./pages/home";
import SingleRoom from "./pages/singleroom";
import Errors from "./pages/error";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Errors} />
      </Switch>
    </>
  );
}

export default App;
