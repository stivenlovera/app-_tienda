import './App.css';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Navigation } from './router/Navigation';

function App() {
  return (
    <div>
      <Container>
        <Navigation></Navigation>
      </Container>
    </div>
  );
}

export default App;
