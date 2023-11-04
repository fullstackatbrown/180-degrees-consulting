import './styles/Footer.css'
import logo from './images/180-logo.png'
import twitter from './images/twitter_icon.svg'
import facebook from './images/facebook_icon.svg'
import linkedin from './images/linkedin_icon.svg'
import instagram from './images/instagram_icon.svg'

function Footer(){
  return <div id="footer">
    <img id="logo-180" src={logo}/>
    <div id="centralContainer">
    <h2 className='footerText'>180 Degrees Consulting</h2>
    <h3 className='footerText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
    </div>
    <div id="contactUsFooter">
      <a href="./contact-us"><button id="contactUsButton">Contact Us</button></a>
      <div id="socials">
        <a href="https://www.facebook.com/180dcbrown"><img className='socialIcons' src={facebook}></img></a>
        <a href="https://www.instagram.com/brown180dc"><img className='socialIcons' src={instagram}></img></a>
      </div>
    </div>
  </div>
}

export default Footer;