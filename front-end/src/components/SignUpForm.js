import "./SignInForm.css"
import SocialMediaIcons from "./SocialMediaIcons"

function SignUpForm(){
    return(
    <div class="signUp_container">
        <div class="Body">
            <div class="Title">
                Create New Account
            </div>
            <div class="changeLog">
                <p>Already Registered?    <a href="./SignIn.html">     LogIn</a></p>
                
            </div>
            <div id="form_sign-in" class="info">
                <form id="SignIn_form" action="" method=""> 
                    <input type="text" required id="signUp_firstName" name="SignUpFirstName" class="input"  placeholder="First Name" />
                    <input type="text" required id="signUp_lastName" name="SignUpLastName" class="input" placeholder="Last Name" />
                    <input type="email" required id="signUp_email" name="SignInEmail" class="input" pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="Email" />
                    <input type="password" required id="signUp_password" name="SignUnPassword" class="input" placeholder="Password" />
                    <button type="submit" class="SignUp_button">Sign Up</button>
                </form>
               
            </div>
        </div>
        <SocialMediaIcons />
    </div>
    )
}

export default SignUpForm