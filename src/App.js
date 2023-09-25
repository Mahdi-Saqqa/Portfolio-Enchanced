import './App.css';
import Navigate from './components/Navigate/navigate';
import { useState, useEffect } from 'react';
import { Route,Routes } from 'react-router-dom';
import Home from './views/Home/Home';
import Contact from './views/Contact/Contact';
import Success from './views/Success';
import About from './views/About/About';
import Portfolio from './views/Portfolio/Portfolio'
import Services from './views/Services/Services';


function App() {
  const [dark , setDark] = useState(
    () => {
      const isDark = JSON.parse(sessionStorage.getItem("dark"));
      if (isDark == null || isDark == true) {
        return true;
      } else {
        return false;
      }
    }
  );
  const [style, setStyle] = useState({ backgroundColor: '#001D3D', color: '#edf2fb' });

  useEffect(() => {
    if (dark) {
      setStyle({ backgroundColor: '#001D3D', color: '#edf2fb' });
    } else {
      setStyle({ backgroundColor: '#edf2fb', color: '#001D3D' });
    }
  }, [dark]);
  return (
    <div className="App" style={style}>
      <Navigate dark={dark} setDark={setDark}/>
      <Routes>
        <Route path="/" element={      <Home style={style} />} />
        <Route path="/success" element={<Success style={style} />} />
        <Route path="*" element={<Home style={style} />} />
        <Route path="/about" element={<About style={style} />} />
        <Route path="/portfolio" element={<Portfolio style={style} />} />
        <Route path="/services" element={<Services style={style} />} />
        <Route path="/contact" element={<Contact style={style} />} />

      </Routes>
    </div>
  );
}

export default App;
