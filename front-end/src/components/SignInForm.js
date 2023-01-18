import { Component } from "react"
import { Link } from "react-router-dom"
import "./SignInForm.css"
import SocialMediaIcons from "./SocialMediaIcons"
import axios from "axios"

class SignInForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: ""
        }
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }

    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault()
    
        const loggedIn ={
            email: this.state.email,
            password: this.state.password
        }
        console.log(loggedIn.email, loggedIn.password)

        // axios.post('http://localhost:4000/sign-in', loggedIn)
        // .then(response => console.log(response.data))
        // .catch(() => { console.log('rejected'); })

        fetch("http://localhost:4000/sign-in", {
            method:"POST",
            crossDomain:true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                email: loggedIn.email, 
                password:loggedIn.password
            })
            
        }).then((response) => response.json())
            .then((data) =>{
                console.log(data, "userLoggedIn")
            }).catch(()=> {alert("Request rejected!")})

        window.location = '/nav-buttons'
    }

    render(){
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
                        <form
                        onSubmit={this.handleSubmit}
                        id="SignIn_form" action="" method=""> 
                            <input
                            onChange={this.changeEmail}
                             type="email" required id="signIn_email" name="SignInEmail" className="input" pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="Email" />
                            <input
                            onChange={this.changePassword}
                            type="password" required id="signIn_password" className="input" name="SignInPassword" placeholder="Password" />
                            <button onSubmit={this.handleSubmit} type="submit" className="SignIn_button buttons3">Sign In</button>
                        </form>
                    </div>
                </div>
            
            </div>
            <SocialMediaIcons />
        </div>

)
    }
}

export default SignInForm