import './App.css';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Calendar from './components/Calendar';
import Gallery from './components/Gallery';
import LiveStream from './components/Livestream';
import Donations from './components/Donations';
import Contact from './components/Contact';
import Login from './components/Login';
import Mission from './components/Mission';
import Priest from './components/Priest';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Calendar" element={<Calendar />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/LiveStream" element={<LiveStream />} />
        <Route path="/Donations" element={<Donations />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Mission" element={<Mission />} />
        <Route path="/Priest" element={<Priest />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
