
import './App.css';
import Button from '@material-ui/core/Button';

import Container from '@material-ui/core/Container';
import News from './components/News/News';


function App() {
  return (
    <div  >
      <Container>
        <News></News>
        <Button variant="contained" color="primary">
          Hello World
    </Button>
      </Container>
    </div>
  );
}

export default App;
