// App.jsx or App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Contact from './pages/Contact';
import Monito from './components/Monito';
import Category from './pages/Category';

function App() {
  return (
    <Router>

        <Routes>
          <Route path="/" element={<Monito />} />
          <Route path="/category" element={<Category />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      
    </Router>
  );
}

export default App;
