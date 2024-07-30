import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';

import Header from './layout/Header';
import CalendarApp from './components/Calendar';
import FavoriteLinks from './components/Favorites';
import ToDos from './components/ToDo';
import NotesApp from './components/Notes';
//import NotesApp from './components/Notes';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <Header />
        </header>
        <div className="row">
          <div className="col align-items-center">
          <BrowserRouter>
          
          <NotesApp />

          
            

            </BrowserRouter>
          </div>
          <div className="col align-items-center">
          <BrowserRouter>
            <ToDos />

            </BrowserRouter>
          </div>
        </div>

        
        <div className="row">
          <div className="col align-items-center">
          <BrowserRouter>
            <FavoriteLinks />

            </BrowserRouter>
          </div>
          <div className="col align-items-center">
          <BrowserRouter>
            <CalendarApp />

            </BrowserRouter>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
