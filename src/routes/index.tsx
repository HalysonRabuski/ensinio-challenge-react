import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Homepage from '../pages/Homepage'
// import Login from '../pages/Login'
// import Register from '../pages/Register'

const Routes: React.FC = () => (
  <Switch>
    {/* {/* <Route exact path="/" component={Login} /> */}
    <Route path="/" component={Homepage} />
  </Switch>
)

export default Routes
