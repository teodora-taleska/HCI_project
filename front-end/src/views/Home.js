import "./Home.css"
import SignInForm from "../components/SignInForm"
import SignUpForm from "../components/SignUpForm"
import HomeButtons from "../components/HomeButtons"

function Home(){
    return(
        <div>
            <img src="logo.svg"></img>
            <HomeButtons />
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Home