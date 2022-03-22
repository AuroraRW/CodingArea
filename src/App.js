import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import SignUp from './views/SignUp'
import Login from './views/Login'
import Home from './views/Home'
import Interviewer from './views/Interviewer/Interviewer'
import Create from './views/Interviewer/Create'
import Result from './views/Interviewer/Result'
import Developer from './views/Developer/Developer'
import Instruction from './views/Developer/Instruction'
import Test from './views/Developer/Test'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/interviewer/create">
          <Create />
        </Route>
        <Route path="/interviewer/result">
          <Result />
        </Route>
        <Route path="/interviewer">
          <Interviewer />
        </Route>
        <Route path="/developer/instruction">
          <Instruction />
        </Route>
        <Route path="/developer/test">
          <Test />
        </Route>
        <Route path="/developer">
          <Developer />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
