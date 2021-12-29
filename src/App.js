import React from "react";
import "./App.css";
import Home from "./components/pages/Home";
import ScrollButton from "./components/angleup/ScrollButton";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Aboutus from "./components/pages/Aboutus";
import AffiliateProgram from "./components/pages/Affiliateprogram";
import HelpCenter from "./components/pages/Helpcenter";
import StandardPackage from "./components/pages/Standardpackage";
import PremiumPackage from "./components/pages/Premiumpackage";
import TourismPackage from "./components/pages/Tourismpackage";
import Blog from "./components/pages/Blog";
import Blog01 from "./components/pages/Blog01";
import Blog02 from "./components/pages/Blog02";
import Blog03 from "./components/pages/Blog03";
import ContactUs from "./components/pages/ContactUs";
import SignUp from "./components/pages/SignUp";
import Customerreview from "./components/pages/Customerreview";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import Advertise from './components/pages/Advertise';
import Careers from "./components/pages/Careers";
import Travel from "./components/pages/Travel";
import Specialoffer from "./components/pages/Specialoffer";
import Flight from "./components/pages/Flight";
function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/aboutus" component={Aboutus} />
        <Route path="/affiliateprogram" component={AffiliateProgram} />
        <Route path="/services" component={Services} />
        <Route path="/help" component={HelpCenter} />
        <Route path="/howitworks" component={SignUp} />

        <Route path="/standard" component={StandardPackage} />
        <Route path="/premium" component={PremiumPackage} />
        <Route path="/compare" component={TourismPackage} />

        <Route path="/blog" component={Blog} />
        <Route path="/blog1" component={Blog01} />
        <Route path="/blog2" component={Blog02} />
        <Route path="/blog3" component={Blog03} />

        <Route path="/contact-us" component={ContactUs} />
        <Route path="/customerreview" component={Customerreview} />
        <Route path="/privacypolicy" component={PrivacyPolicy} />
        <Route path="/advertise" component={Advertise} />
        <Route path="/careers" component={Careers} />
        <Route path="/travel" component={Travel}/>
        <Route path="/special" component={Specialoffer} />
        <Route path="/flights" component={Flight} />
        {/* <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/marketing' component={Marketing} />
        <Route path='/consulting' component={Consulting} /> */}
      </Switch>
      <ScrollButton />
    </Router>
  );
}

export default App;
