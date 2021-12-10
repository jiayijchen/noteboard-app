import './styles/App.css';
// import { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';
import { 
  AuthProvider, 
  // useAuth 
} from './utilities/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <Dashboard />
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
