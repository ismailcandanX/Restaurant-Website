import React from 'react';
import {FooterOverlay, Newsletter} from "../../components"
import { images } from '../../constants';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding' id='login'>
    <FooterOverlay />
    <Newsletter />
    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans' style={{color: "#AAAAAA"}}>9 W 53rd St, New York, NY 10019, USA</p>
        <p className='p__opensans' style={{color: "#AAAAAA"}}>+1 212-344-1230</p>
        <p className='p__opensans' style={{color: "#AAAAAA"}}>+1 212-555-1230</p>
      </div>

      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt="company logo" />
        <p className='p__opensans' style={{color: "#AAAAAA"}}>"The best way to find yourself is to lose yourself in the service of others.”</p>
        <img src={images.spoon} style={{marginTop: 15}} alt="img_spoon" />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans' style={{color: "#AAAAAA"}}>Monday-Friday: </p>
        <p className='p__opensans' style={{color: "#AAAAAA"}}>08:00 am -12:00 am</p>
        <p className='p__opensans' style={{color: "#AAAAAA"}}>Saturday-Sunday: </p>
        <p className='p__opensans' style={{color: "#AAAAAA"}}>07:00am -11:00 pm</p>
      </div>
    </div>

    <div className='footer__copyright'>
      <p className='p__opensans' style={{color: "#AAAAAA"}}>2021 Gerícht. All Rights reserved.</p>
    </div>
    
  </div>
);

export default Footer;
