import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import ScrollButton from './components/angleup/ScrollButton';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Aboutus from './components/pages/Aboutus';
import AffiliateProgram from './components/pages/Affiliateprogram';
import HelpCenter from './components/pages/Helpcenter';
import StandardPackage from './components/pages/Standardpackage';
import PremiumPackage from './components/pages/Premiumpackage';
import TourismPackage from './components/pages/Tourismpackage';
import Blog from './components/pages/Blog';
import Blog01 from './components/pages/Blog01';
import Blog02 from './components/pages/Blog02';
import Blog03 from './components/pages/Blog03';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Marketing from './components/pages/Marketing';
import Consulting from './components/pages/Consulting';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/aboutus' component={Aboutus}/>
        <Route path='/affiliateprogram' component={AffiliateProgram} />
        <Route path='/services' component={Services} />
        <Route path='/help' component={HelpCenter} />
        <Route path='/howitworks' component={SignUp} />


        <Route path='/standard' component={StandardPackage} />
        <Route path='/premium' component={PremiumPackage} />
        <Route path='/compare' component={TourismPackage} />


        <Route path='/blog' component={Blog} />
        <Route path='/blog1' component={Blog01} />
        <Route path='/blog2' component={Blog02} />
        <Route path='/blog3' component={Blog03} />
        {/* <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/marketing' component={Marketing} />
        <Route path='/consulting' component={Consulting} /> */}
      </Switch>
      <ScrollButton/>
    </Router>
  );
}

export default App;
