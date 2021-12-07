import { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/App.css';
import {
  Container,
  Col,
  Row
} from 'react-bootstrap';
import InputForm from './components/InputForm.js';
import Dashboard from './components/Dashboard.js';
import NavBar from './components/NavBar';

function App() {
  const [notesData, setNotesData] = useState([]);
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

  const functions = {
    addNote: (note) => {
      setNotesData([...notesData, note]);
    }
  }

  useEffect(() => {
    console.log(notesData);
  });

  return (
    <div className="App">
      <Row>
        <NavBar />
      </Row>
      <Row>
        <InputForm notesData={notesData} setNotesData={setNotesData} {...functions} />
      </Row>
      <Row>
        <Dashboard notesData={notesData} />
      </Row>
    </div>
  );
}

export default App;
