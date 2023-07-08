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
  const [mood, setMood] = useState({ color: "#45505b", backgroundColor: "#f2f3f5" });
  const [dark , setDark] = useState(false);
  const [style, setStyle] = useState({
    backgroundColor: 'rgb(32, 33, 36)',
    color: 'white',
  });

  useEffect(() => {
    if (dark) {
      setStyle({ backgroundColor: 'rgb(32, 33, 36)', color: 'white' });
    } else {
      setStyle({ backgroundColor: 'white', color: 'black' });
    }
  }, [dark]);
  return (
    <div className="App" style={style}>
      <Navigate mood={mood} setMood={setMood} dark={dark} setDark={setDark}/>
      <Routes>
        <Route path="/" element={<Home dark={dark} setDark={setDark} />} />
        <Route path="/home" element={<Home dark={dark} setDark={setDark} />} />
        <Route path="/about" element={<About mood={style} dark={dark} setDark={setDark} />} />
        <Route path="/contact" element={<Contact dark={dark} setDark={setDark} />} />
        <Route path="/success" element={<Success dark={dark} setDark={setDark}  />} />
        <Route path="/portfolio" element={<Portfolio mood={style} dark={dark} setDark={setDark} />} />
        <Route path="/services" element={<Services dark={dark} setDark={setDark} />} />
        <Route path="*" element={<Home dark={dark} setDark={setDark} />} />
      </Routes>
    </div>
  );
}

export default App;
