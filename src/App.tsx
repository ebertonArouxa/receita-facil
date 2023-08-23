import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from './components/Layout';
import Recipes from './components/Recipes';
import Meals from './pages/Meals';
import Drinks from './pages/Drinks';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <h1>...</h1> } />
      <Route path="" element={ <Layout /> }>
        <Route path="/meals" element={ <Recipes /> } />
        <Route path="/drinks" element={ <Recipes /> } />
        <Route path="/profile" element={ <h1>...</h1> } />
        <Route path="/done-recipes" element={ <h1>...</h1> } />
        <Route path="/favorite-recipes" element={ <h1>...</h1> } />
      </Route>
      <Route path="/meals/:id" element={ <Meals /> } />
      <Route path="/drinks/:id" element={ <Drinks /> } />
      <Route path="/meals/:id-da-receita/in-progress" element={ <h1>...</h1> } />
      <Route path="/drinks/:id-da-receita/in-progress" element={ <h1>...</h1> } />
    </Routes>

  );
}

export default App;
