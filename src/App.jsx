import React, { useEffect } from 'react';
import './App.css';
import { Header, } from './components/layout/Header';
import { Main } from './components/layout/Main';
import { Footer } from './components/layout/Footer';
import { Container } from '@mui/material'

import { useDispatch } from 'react-redux/es/exports';
import { getBuildings } from './redux/actions/buildings'
export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBuildings())
  }, [dispatch])
  return (
    <Container fluid="true" className="App">
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}

