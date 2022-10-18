
import React, { Component } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Crew from './routes/Crew';
import Destination from './routes/Destination';
import Home from './routes/Home';
import Technology from './routes/Technology';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/destination' element={<Destination />}/>
          <Route path='/crew' element={<Crew />}/>
          <Route path='/technology' element={<Technology />}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;