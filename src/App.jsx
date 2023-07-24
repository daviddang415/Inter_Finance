import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from './Home';
import { Result } from './Result';
import { useEffect, useState } from 'react';

export default function App() {
  const [companies, setCompanies] = useState({});

  useEffect(()=> {
    fetch('/home').then(response => {
      if (response.ok) {
        return response.json()
      }
    }).then(data => setCompanies(data["companies"]))
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home companies = {companies}/>}/>
        {Object.keys(companies).map((company) => (
        <Route path={`/${company}`} key={company} element={<Result company={company} companies = {companies}/>}/>
        ))}
        <Route path="*" element={<h1>Error</h1>} />
      </Routes>
    </BrowserRouter>
  );
}