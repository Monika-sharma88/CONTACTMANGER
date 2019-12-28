//import Contact from "./components/Contact";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/Layout/Header";
import React from "react";
//import "./components/contact.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import logo from "./logo.svg";
import "./App.css";
import { Provider } from "./Context";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/Pages/About";
import NotFound from "./components/Pages/NotFound";
import Test from "./components/test/Test";

class App extends React.Component {
  render() {
    /*const name = "monika";
    const showHello = true;
    return (
      <div className="App">
        {showHello ? (
          //<h1> The app component</h1>
          <h4>hello {name.toUpperCase()} </h4>
        ) : null}*/
    /*const showMath = true;
    const num1 = 40;
    const num2 = 50;
    const num3 = 10;
    let math;
    if (showMath) {
      math = (
        <h4>
          {num1}+{num2}-{num3}={num1 + num2 - num3}
        </h4>
      );
    } else {
      math = null;
    }
    // <AddContact />
            <Contacts />
                           
    */
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manger" />
            <div className="Container">
              <Switch>
                <Route exact path="/" component={Contacts} />

                <Route exact path="/Contact/add" component={AddContact} />
                <Route exact path="/Contact/edit/:id" component={EditContact} />
                <Route exact path="/About/:id" component={About} />

                <Route exact path="/test" component={Test} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
