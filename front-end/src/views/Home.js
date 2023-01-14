import "./Home.css"
import SignInForm from "../components/SignInForm"
import SignUpForm from "../components/SignUpForm"

function Home(){
    return(
        <div>
            <img src="logo.svg"></img>
            <button>Sign in</button>
            <button>Sign up</button>

            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Home