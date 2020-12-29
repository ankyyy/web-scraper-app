import React from 'react';
import { Route } from "react-router-dom";
import Home from './views/Home';
import Sources from './views/Sources';
import SourceDetails from './views/SourceDetails';
import Header from './components/Header';


function App() {
  return (
    <div className="container">
      <Header/>
      <Route exact path="/"><Home /></Route>
      <Route path="/source/:id"><SourceDetails /></Route>
      <Route path="/sources"><Sources /></Route>
      
    </div>
  );
}

export default App;
