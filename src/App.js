import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
// import './styles/app.scss';
// import Navbar from './layout/NavBar/Navbar';
import Home from './layout/HomePage/Home';
// console.log(Home)

class App extends Component {  
    render() {   
         return (  
                <BrowserRouter>
                  <React.Fragment>
                    <Home/>
                  </React.Fragment>
                </BrowserRouter>
                );
            }
    }
export default App;