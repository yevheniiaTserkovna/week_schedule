import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';

function App() {
  const user = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      <div className='container pt-3'>
        {/* <Navbar /> Навигацию сделать позже */}
        {user ? (
          <Routes>
            <Route path={'/'} exact element={<MainPage />} />
            <Route path='*' element={<Navigate to='/' replace />} />
          </Routes>
        ) : (
          <Routes>
            <Route path={'/login'} exact element={<LoginPage />} />
            <Route path='*' element={<Navigate to='/login' replace />} />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
