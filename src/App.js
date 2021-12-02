import { Container, Row } from 'react-bootstrap';
import './App.css';
import InputForm from './components/InputForm.js';

function App() {
  return (
    <Container className="App">
      <Row>
        <InputForm />
      </Row>
      <Row>
        {/* <Dashboard /> */}
      </Row>
    </Container>
  );
}

export default App;
