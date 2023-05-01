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
import SignUp from './components/SignUp';
import AddAppointment from './components/AddAppointment';
import Appointments from './components/Appointments';
import UserRegister from './components/UserRegister';
import Users from './components/Users';
import AddUser from './components/AddUser';
import AddEvent from './components/AddEvent';
import SignUpForPriestAndAdmin from './components/SignUpForPriestAndAdmin';
import Checkout from './components/checkout';
import AddLivestream from './components/AddLivestream';
import DisplayLivestream from './components/DisplayLivestream'

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
        <Route path="/SignUp" element = {<SignUp />} />
        <Route path="/AddAppointment" element = {<AddAppointment />} />
        <Route path="/Appointments" element = {<Appointments />} />
        <Route path="/UserRegister" element = {<UserRegister />} />
        <Route path="/AddUser" element = {<AddUser />} />
        <Route path="/Users" element = {<Users />} />
        <Route path="/AddEvent" element = {<AddEvent />} />    
        <Route path="/SignInForPriestAndAdmin" element = {<SignUpForPriestAndAdmin />} /> 
        <Route path="/Checkout" element = {<Checkout />} />
        <Route path="/AddLivestream" element = {<AddLivestream />} />
        <Route path="/DisplayLivestream" element = {<DisplayLivestream />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;