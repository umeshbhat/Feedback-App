import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Header from './Header'
import Footer from './Footer'
import Landing from './Landing'
class App extends Component {
  componentDidMount() {
    this.props.fetchUser()
  }
  render() {
    return (
      <div className='container'>
        <BrowserRouter>
          <Header />
          <Route path='/surveys' component={Landing} />
          <Footer />
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App)
