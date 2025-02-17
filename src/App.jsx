import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
 import { Button } from 'react-bootstrap';
import Header from './Header/Header';
import Footer from './footer/Footer';
import PatientEducation from './Patient Education/PatientEducation';
import ProfessionalEducation from './Professional Education/ProfessionalEducation';
import DentalReserch from './Dental Reserch/DentalReserch';
import Home from './Home/Home';
import { Routes ,Route } from 'react-router-dom';
import Contact from './Contact/Contact';
import AboutUS from './About Us/AboutUS';
function App() {
  const [count, setCount] = useState(0)
  const width = '50px'
  const companyName ='  Dentilux'
  // companyNumber = ' 08000000000'

  return (
    <>
    
    <Header  width={width} companyName={companyName} />
    <Routes>
      <Route path="/" element={<Home companyName={companyName} />} />
      <Route path="/contact" element={ <Contact companyName={companyName} /> } />
      <Route path="/AboutUs" element={<AboutUS />}/>
      <Route path="/PatientEducation" element={<PatientEducation/>} />
      <Route path="/ProfessionalEducation" element={ <ProfessionalEducation />} />
      <Route path="/DentalReserch" element={ <DentalReserch />} />

    </Routes>
    <Footer width={width}   companyName={companyName}/>
    
    </>
  )
}

export default App
