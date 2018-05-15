import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';

// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import * as EmploeeActionCreator from './actionTypes/emploee'

import './App.css';

// App Components
import Home from './components/Home'
import About from './components/About'
import Header from './components/Header'
// import Card from './components/Card';


class App extends Component {
    

    render() {

       

        return (
            <BrowserRouter>
                <div className="App">
                    <Header />

                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                </div>
            </BrowserRouter>
        );
    }
}




export default App;
