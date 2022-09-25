import React, { Component, Fragment } from 'react'
import { Router, Route, Switch, Routes} from 'react-router'
import HomePage from '../pages/HomePage'


export class AppRoute extends Component {
  render() {
    return (     
        <Fragment>
            <Routes>
            <Route exact path="/" element={<HomePage />} />
            </Routes>
        </Fragment>
    )
  }
}

export default AppRoute