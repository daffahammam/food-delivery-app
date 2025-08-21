import { useState } from 'react';
import { assets } from '../../assets/assets'; // Assuming you have a CSS file for styling
import './LoginPopup.css';
const LoginPopup = ({setShowLogin}) => {

  const [currState, setCurrState] = useState("Login");
  return (
    <div className="login-popup">
      <form className='login-popup-container'>
          <div className='login-popup-title'>
            <h2>{currState}</h2>
            <img onClick={() => setShowLogin(false)} src={assets.cross_icon} />
          </div>
          <div className='login-popup-inputs'>
            {currState === "Login" ? <></>: <input type="text" placeholder='Your name' required />}
            <input type="email" placeholder='Your Email' required />
            <input type="password" placeholder='Your Password' required />
          </div>
          <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
          <div className='login-popup-condition'>
            <input type="checkbox" required />
            <p>By continuing, you agree to our Terms of Use and Privacy Policy</p>
          </div>
          {currState === "Login"
            ? <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click Here</span></p>
            : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Click Here</span></p>
          }
      </form>
    </div >
  )
}

export default LoginPopup
