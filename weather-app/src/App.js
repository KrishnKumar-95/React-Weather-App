// Hello World! This is my First Project in ReactJs
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Weather } from './Weather';
import { About } from './About'
import { Home } from './Home';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/weather' element={<Weather />} />
          <Route path='/about' element={<About />} />
        </Routes>
    </div>
  );
}

export default App;