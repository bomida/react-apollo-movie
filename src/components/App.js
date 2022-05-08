import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../App.css';
import Detail from '../Routes/Detail';
import Home from '../Routes/Home';

function App() {
  return (
    < BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
