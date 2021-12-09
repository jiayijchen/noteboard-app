import './styles/App.css';
import { useState, useEffect } from 'react';
import { axiosHelper } from './utilities/axiosHelper';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [token, setToken] = useState('');
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (token.length > 0) {
      axiosHelper({
        method: "get",
        route: "api/v1/user",
        token: token,
        successMethod: setUserData
      })
    }
  }, [token])

  return (
    <div className="App">
      <Header token={token} setToken={setToken} userData={userData} />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
