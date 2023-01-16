import { Link } from "react-router-dom"
import "./SignUpForm.css"
import SocialMediaIcons from "./SocialMediaIcons"

function SignUpForm(){
    return(
    <div className="signUp_container">
        <img src="logo.svg" />
        <div className="Body">
            <div className="changeLog">
                <p>Already Registered?    <Link to="/sign-in">Log in</Link></p>
                
            </div>
            <div id="form_sign-in" className="info">
                <form id="SignIn_form" className="" method=""> 
                    <input type="text" required id="signUp_firstName" name="SignUpFirstName" className="input"  placeholder="First Name" />
                    <input type="text" required id="signUp_lastName" name="SignUpLastName" className="input" placeholder="Last Name" />
                    <input type="email" required id="signUp_email" name="SignInEmail" className="input" pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="Email" />
                    <input type="password" required id="signUp_password" name="SignUnPassword" className="input" placeholder="Password" />
                    <Link to="/sign-in"><button type="submit" className="SignUp_button buttons3">Sign Up</button></Link>
                </form>
               
            </div>
        </div>
        <SocialMediaIcons />
    </div>
    )
}

export default SignUpForm