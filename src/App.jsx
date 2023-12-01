import './App.css';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from './components';
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('about');
  return (
    <>
      <Header {...{ currentPage, setCurrentPage }} />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
