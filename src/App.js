import react from "react";
import Form from "./component/form";
import Logo from "./component/logo";
import Home from "./component/home";
import Passvergessen from "./component/passvergessen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Logo />

      <div className="App">
        <Router>
          <div className="mainBoard text-center">
            <Switch>
            <Route exact path="/"><Form /></Route>
              <Route path="/home"><Home/></Route>
              <Route path="/passwortvergessen"><Passvergessen/></Route>

            </Switch>

           
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
