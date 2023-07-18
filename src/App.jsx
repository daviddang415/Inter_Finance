import { BrowserRouter as Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from './Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}