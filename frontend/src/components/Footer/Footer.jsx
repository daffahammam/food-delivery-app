import { assets } from '../../assets/assets'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
          <div className='footer-content'>
              <div className='footer-content-left'>
                  <img src={assets.logo} alt="Logo" />
                  <p>Taste your favorite food in your amazing experience with our best restaurant. share your favorite food with your family and friends. Share your happiness with us. We are waiting for your order</p>
                  <div className='footer-social-icons'>
                      <img src={assets.facebook_icon} alt="Facebook" />
                      <img src={assets.twitter_icon} alt="Twitter" />
                      <img src={assets.linkedin_icon} alt="Linkedin" />
                  </div>
              </div>
               <div className='footer-content-center'>
                  <h2>COMPANY</h2>
                  <ul>
                      <li>Home</li>
                      <li>About us</li>
                      <li>Delivery</li>
                      <li>Pricay policy</li>
                  </ul>
              </div>
              <div className='footer-content-right'>
                  <h2>GET IN TOUCH</h2>
                  <ul>
                      <li>+62 812 3456 7890</li>
                      <li>contact@tomato.com</li>
                  </ul>
              </div>
          </div>
          <div className='footer-copyright'>
                <hr/>
                <p>Copyright 2025 © Tomato.com - All rights reserved</p>
              </div>
    </div>
     
  )
}

export default Footer
