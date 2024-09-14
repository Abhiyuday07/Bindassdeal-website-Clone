import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ContactUs from './Components/ContactUs';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';
// hr
import General from './Components/HR/General';
import Enterprise from './Components/HR/Enterprise';
// import General from './Components/HR/General';
import Hire from './Components/HR/Hire';
import Outsource from './Components/HR/Outsource';
import Payroll from './Components/HR/Payroll';
import Permanent from './Components/HR/Permanent';
import Training from './Components/HR/Training';
// solution
import Fintech from './Components/Solutions/Fintech';
import Gaming from './Components/Solutions/Gaming';
import Banking from './Components/Solutions/Banking';
import Retail from './Components/Solutions/Retail';
import Commerce from './Components/Solutions/Commerce';
import Advertising from './Components/Solutions/Advertising';
import Media from './Components/Solutions/Media';
import Data from './Components/Sc/Data';
import Crypto from './Components/Sc/Crypto';
import Ecommerce from './Components/Sc/Ecommerce';
import Software from './Components/Sc/Software';
import Mobile from './Components/Sc/Mobile';
import Social from './Components/Sc/Social';
import Design from './Components/Sc/Design';
import Resources from './Components/Sc/Resources';
import Website from './Components/Sc/Website';
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
         {/* HR */}
        <Route path="/general" element={<General />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/hire" element={<Hire />} />
        <Route path="/outsource" element={<Outsource />} />
        <Route path="/payroll" element={<Payroll />} />
        <Route path="/permanent" element={<Permanent />} />
        <Route path="/training" element={<Training />} />
       {/* Solution */}
        <Route path="/fintech" element={<Fintech />} />
        <Route path="/gaming" element={<Gaming />} />
        {/* <Route path='/banking' element={Banking/>}/> */}
        <Route path="/banking" element={<Banking />} />
        <Route path="/retail" element={<Retail />} />
        <Route path="/commerce" element={<Commerce />} />
        <Route path="/advertising" element={<Advertising />} />
        <Route path="/media" element={<Media />} />
        {/* SERVICE OR SC */}
        <Route path="/data" element={<Data />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/software" element={<Software/>} />
        <Route path="/mobile" element={<Mobile/>} />
        <Route path="/social" element={<Social/>} />
        <Route path="/design" element={<Design/>} />
        <Route path="/resources" element={<Resources/>} />
        <Route path="/website" element={<Website/>} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
