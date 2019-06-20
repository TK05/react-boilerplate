import React from 'react'
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom'
import { createBrowserHistory } from 'history'

import DashboardPage from '../components/DashboardPage'
import NotFoundPage from '../components/NotFoundPage'
import LoginPage from '../components/LoginPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'


export const history = createBrowserHistory()

export default function AppRouter() {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <PublicRoute path="/" component={LoginPage} exact />
          <PrivateRoute path="/dashboard" component={DashboardPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  )
}

// <PrivateRoute path="/dashboard" render={props => <DashboardPage {...props} />
