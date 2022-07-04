import React, { useEffect } from 'react';
import './App.css';
import { Footer } from './components/layout/Footer';
import { Container } from '@mui/material'
import { useDispatch } from 'react-redux/es/exports';
import { getBuildings } from './redux/actions/buildings'
import { HomePage } from './pages/HomePage';
import { BuildingsPage } from './pages/BuildingsPage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Navigation } from './components/navigation/Navigation';


export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBuildings())
  }, [dispatch])

  return (
    <BrowserRouter>
      <Container fluid="true" className="App">
        <Navigation />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/buildings' element={<BuildingsPage />} />
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

