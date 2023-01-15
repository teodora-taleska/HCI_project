import { Link } from "react-router-dom"
import "./SignInForm.css"
import SocialMediaIcons from "./SocialMediaIcons"

function SignInForm () {
    return(
        <div>
            <img src="logo.svg" />
            <div className="signIn_container">
                <div className="Body">
                    <div className="Title">
                        Sign In
                    </div>
                    <div className="changeLog">
                        <p>New user?    <Link to="/sign-up">Create an account</Link></p>
                        
                    </div>
                    <div id="form_sign-in" className="info">
                        <form id="SignIn_form" action="" method=""> 
                            <input type="email" required id="signIn_email" name="SignInEmail" className="input" pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="Email" />
                            <input type="password" required id="signIn_password" className="input" name="SignInPassword" placeholder="Password" />
                            <Link to="/nav-buttons"><button type="submit" className="SignIn_button">Sign In</button></Link>
                        </form>
                    </div>
                </div>
            
            </div>
            <SocialMediaIcons />
        </div>

)
}

export default SignInForm