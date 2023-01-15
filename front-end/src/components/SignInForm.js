import "./SignInForm.css"
import SocialMediaIcons from "./SocialMediaIcons"

function SignInForm () {
    return(
        <div>
            <div className="signIn_container">
                <div className="Body">
                    <div className="Title">
                        Sign In
                    </div>
                    <div className="changeLog">
                        <p>New user?    <a href="./SignUp.html">     Create an account</a></p>
                        
                    </div>
                    <div id="form_sign-in" className="info">
                        <form id="SignIn_form" action="" method=""> 
                            <input type="email" required id="signIn_email" name="SignInEmail" className="input" pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="Email" />
                            <input type="password" required id="signIn_password" className="input" name="SignInPassword" placeholder="Password" />
                            <button type="submit" className="SignIn_button">Sign In</button>
                        </form>
                    </div>
                </div>
            
            </div>
            <SocialMediaIcons />
        </div>

)
}

export default SignInForm