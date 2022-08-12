import React, { useState } from 'react';
import './MainHeader.css';
import { Link, useLocation } from 'react-router-dom';

function Header() {

  const location = useLocation();
  const currLocation = location.pathname;

  const [focus, setFocus] = useState(false);

  return (
    <header className='Header'>
      <nav className='Header-nav'>
        <section className='Header-logo-section'>
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className='Header-logo'>Demo</div>
          </Link>
        </section>

        <section className='Header-navigation-section'>
          <ul className='Header-navigation'>
            <li style={{ position: "relative", marginRight: "20px" }}>
              <div className="Header-navigation-option"> About Us
                <i style={{ transform: "translate(0)" }} className="fas fa-sort-up up-arrow"></i>
              </div>

              <ul className="Header-navigation-links">
                <Link to="/"><li>Vision</li></Link>
                <Link to="/Mission"><li>Mission</li></Link>
                <Link to="/PrivacyPolicy"><li>PrivacyPolicy</li></Link>
                <Link to="/TermsofUse"><li>Terms of Use</li></Link>
                <Link to="/Disclaimers"><li>Disclaimers</li></Link>
                <Link to="/SiteMap"><li>Site Map</li></Link>
              </ul>
            </li>

            <li style={{ position: "relative", marginRight: "20px" }}>
              <div className="Header-navigation-option">Digital Business Templates
                <i style={{ transform: "translate(0)" }} className="fas fa-sort-up up-arrow"></i>
              </div>

              <ul className="Header-navigation-links">
                <Link to="/VisitingCards"><li>Visiting Cards</li></Link>
                <Link to="/Broachers"><li>Broachers</li></Link>
                <Link to="/Banners"><li>Banners</li></Link>
                <Link to="/Flyers"><li>Flyers</li></Link>
                <Link to="/Hoardings"><li>Hoardings</li></Link>
                <Link to="/Pamphlets"><li>Pamphlets</li></Link>
              </ul>
            </li>

            <li style={{ position: "relative", marginRight: "20px" }}>
              <div className="Header-navigation-option">Events
                <i style={{ transform: "translate(0)" }} className="fas fa-sort-up up-arrow"></i>
              </div>

              <ul className="Header-navigation-links">
                <Link to="/Video"><li>Video</li></Link>
                <Link to="/On-Line"><li>On-Line</li></Link>
                <Link to="/Off-Line"><li>Off-Line</li></Link>
                <Link to="/RoadShows"><li>RoadShows</li></Link>
                <Link to="/Campaigns"><li>Campaigns</li></Link>
                <Link to="/Exhibitions"><li>Exhibitions</li></Link>
              </ul>
            </li>

            <li style={{ position: "relative", marginRight: "20px" }}>
              <div className="Header-navigation-option">VTS
                <i style={{ transform: "translate(0)" }} className="fas fa-sort-up up-arrow"></i>
              </div>

              <ul className="Header-navigation-links">
                <Link to="/VideoConfer"><li>Video Confer</li></Link>
                <Link to="/On-LineChatting"><li>On-Line Chatting</li></Link>
                <Link to="/Demo"><li>Demo</li></Link>
                <Link to="/Conference"><li>Conference</li></Link>
                <Link to="/WelcomeDesk"><li>Welcome Desk</li></Link>
                <Link to="/ExhibitionsStalls"><li>Exhibitions Stalls</li></Link>
              </ul>
            </li>

            <li style={{ position: "relative", marginRight: "20px" }}>
              <div className="Header-navigation-option">Master Distributors
                <i style={{ transform: "translate(0)" }} className="fas fa-sort-up up-arrow"></i>
              </div>

              <ul className="Header-navigation-links">
                <Link to="/C&F"><li>C & F</li></Link>
                <Link to="/Distributors"><li>Distributors</li></Link>
                <Link to="/ChannelPartners"><li>ChannelPartners</li></Link>
                <Link to="/Dealers"><li>Dealers</li></Link>
                <Link to="/ServiceCenters"><li>Service Centers</li></Link>
                <Link to="/MarketingTeam"><li>Marketing Team</li></Link>
              </ul>
            </li>

            <li style={{ position: "relative", marginRight: "20px" }}>
              <Link style={{ textDecoration: "none" }} to='E-Trade'><div className="Header-navigation-option">E-Trade all Over
                <i style={{ transform: "translate(0)" }} className="fas fa-sort-up up-arrow"></i>
              </div></Link>
            </li>

            <li style={{ position: "relative", marginRight: "20px" }}>
              <div className="Header-navigation-option">Directory
                <i style={{ transform: "translate(0)" }} className="fas fa-sort-up up-arrow"></i>
              </div>

              <ul className="Header-navigation-links">
                <Link to="/Segments"><li>Segments</li></Link>
                <Link to="/Categories"><li>Categories</li></Link>
                <Link to="/Sectors"><li>Sectors</li></Link>
                <Link to="/Territories"><li>Territories</li></Link>
                <Link to="/States"><li>States</li></Link>
                <Link to="/Names"><li>Names</li></Link>
              </ul>
            </li>
          </ul>
        </section>

        <section className='Header-slide-section'>
          <div className='Slide-Header-Icon' onClick={e => focus === false ? setFocus(true) : setFocus(false)}>
            <div className='Slide-Header-Icon-line'></div>
            <div className='Slide-Header-Icon-line'></div>
            <div className='Slide-Header-Icon-line'></div>
          </div>

          <div style={focus === true ? { display: "block" } : { display: "none" }} className='Slide-Header-Body-blur' onClick={e => setFocus(false)}></div>

          <div className={`Slide-Header-Body ${focus === true ? "Show-Slider" : "Hide-Slider"}`}>
            <Link to='/Recharge&BillPay'>
              <div style={currLocation === "/Recharge&BillPay" ? { color: "#fff", background: "#1b0a7b" } : {}} className='Slide-Header-Option' onClick={e => setFocus(false)}>
                <div style={currLocation === "/Recharge&BillPay" ? { border: "2px solid #fff" } : {}} className='Slide-Header-Option-Circle'></div>
                <div className='Slide-Header-Option-Name'>Recharge & Bill Pay</div>
              </div>
            </Link>

            <Link to='Finance'>
              <div style={currLocation === "/Finance" ? { color: "#fff", background: "#1b0a7b" } : {}} className='Slide-Header-Option' onClick={e => setFocus(false)}>
                <div style={currLocation === "/Finance" ? { border: "2px solid #fff" } : {}} className='Slide-Header-Option-Circle'></div>
                <div className='Slide-Header-Option-Name'>Finance</div>
              </div>
            </Link>

            <Link to='/Insurance'>
              <div style={currLocation === "/Insurance" ? { color: "#fff", background: "#1b0a7b" } : {}} className='Slide-Header-Option' onClick={e => setFocus(false)}>
                <div style={currLocation === "/Insurance" ? { border: "2px solid #fff" } : {}} className='Slide-Header-Option-Circle'></div>
                <div className='Slide-Header-Option-Name'>Insurance</div>
              </div>
            </Link>

            <Link to='/store'>
              <div style={currLocation === "/store" ? { color: "#fff", background: "#1b0a7b" } : {}} className='Slide-Header-Option' onClick={e => setFocus(false)}>
                <div style={currLocation === "/store" ? { border: "2px solid #fff" } : {}} className='Slide-Header-Option-Circle'></div>
                <div className='Slide-Header-Option-Name'>Local Stores</div>
              </div>
            </Link>

            <div className='Slide-Header-Heading' onClick={e => setFocus(false)}>
              <div className='Slide-Header-Heading-Name'>My Account</div>
            </div>

            <Link to='/Login'>
              <div style={currLocation === "/Login" ? { color: "#fff", background: "#1b0a7b" } : {}} className='Slide-Header-Option' onClick={e => setFocus(false)}>
                <i className="fas fa-sign-in-alt"></i>
                <div style={{ marginLeft: "-25px" }} className='Slide-Header-Option-Name'>Login / Sign up</div>
              </div>
            </Link>

            <div className='Slide-Header-Heading' onClick={e => setFocus(false)}>
              <div className='Slide-Header-Heading-Name'>Merchant</div>
            </div>

            <Link to='/merchant-login'>
              <div style={currLocation === "/merchant-login" ? { color: "#fff", background: "#1b0a7b" } : {}} className='Slide-Header-Option' onClick={e => setFocus(false)}>
                <i className="fas fa-sign-in-alt"></i>
                <div style={{ marginLeft: "-25px" }} className='Slide-Header-Option-Name'>Login / Sign up</div>
              </div>
            </Link>

            <Link to='/merchant-signup'>
              <div style={currLocation === "/merchant-signup" ? { color: "#fff", background: "#1b0a7b" } : {}} className='Slide-Header-Option' onClick={e => setFocus(false)}>
                <i className="fas fa-user-plus"></i>
                <div style={{ marginLeft: "-25px" }} className='Slide-Header-Option-Name'>Sign up</div>
              </div>
            </Link>
          </div>
        </section>
      </nav>
    </header>
  );
};

export default Header;