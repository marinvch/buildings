import './App.css';
import { Header, } from './components/layout/Header';
import { Main } from './components/layout/Main';
import { Footer } from './components/layout/Footer';
import { Container } from '@mui/material'
export const App = () => {
  return (
    <Container fluid className="App">
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}

