import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Artworks from './Artworks';
import Artists from './Artists';


function App() {
return (
<Router>
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/artworks" element={<Artworks />} />
<Route path="/artists" element={<Artists />} />
</Routes>
</Router>
);
}
export default App;
