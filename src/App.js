import { useState, useEffect } from 'react';
// import axios from 'axios';
import './styles/App.css';
import {
  Row
} from 'react-bootstrap';
import InputForm from './components/InputForm.js';
import Dashboard from './components/Dashboard.js';
import Header from './components/Header';

function App() {
  const [token, setToken] = useState('');
  // const [notesData, setNotesData] = useState([]);
  // const [dashboard, setDashboard] = useState([]);

  // async function getNotes() {
  //   try {
  //     const response = await axios.get('notes.json');
  //     setNotesData(response.data);
  //     // console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // const functions = {
  //   addNote: (note) => {
  //     setNotesData([...notesData, note]);
  //   }
  // }

  useEffect(() => {
    console.log(token);
  });

  return (
    <div className="App">
      <Header token={token} setToken={setToken} /> 
      <Dashboard />
    </div>
  );
}

export default App;
