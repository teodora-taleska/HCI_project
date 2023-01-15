import "./Home.css"
import SignInForm from "../components/SignInForm"
import SignUpForm from "../components/SignUpForm"
import HomeButtons from "../components/HomeButtons"
import NavigationButtons from "../components/NavigationButtons"

function Home(){
    return(
        <div>
            <img src="logo.svg"></img>
            
            {/* Insert a routing between the components below */}
            <HomeButtons />
            <SignInForm />
            <SignUpForm />
            <NavigationButtons />
        </div>
    )
}

export default Home