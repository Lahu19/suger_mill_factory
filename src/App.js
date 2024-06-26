
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About"
import Contact from "./components/Contact"
import Product from './components/Product';
import Services from './components/Services';
import Error from './components/Error';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
function App() {
  return (
    <div >
      {/* Added the basic Routes  */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<Error />} />
          
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
