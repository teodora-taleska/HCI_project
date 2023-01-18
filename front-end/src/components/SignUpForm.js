import { Link } from "react-router-dom"
import "./SignUpForm.css"
import SocialMediaIcons from "./SocialMediaIcons"
import React, {Component} from "react"
import axios from 'axios'


 class SignUpForm extends Component{
    constructor(){
        super()
        this.state ={
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
        this.changeFirstName = this.changeFirstName.bind(this)
        this.changeLastName = this.changeLastName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeFirstName(event){
        this.setState({
            firstName:event.target.value
        })
    }

    changeLastName(event){
        this.setState({
            lastName:event.target.value
        })
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

    onSubmit(event){
        event.preventDefault()

        const registered = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        }

        
        axios.post('http://localhost:4000/sign-up', registered)
        .then(response => console.log(response.data))

        // window.location = '/sign-in'
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        })
    }

    render(){
       return(
    <div className="signUp_container">
        <img src="logo.svg" />
        <div className="Body">
            <div className="changeLog">
                <p>Already Registered?    <Link to="/sign-in">Log in</Link></p>
                
            </div>
            <div id="form_sign-in" className="info">
                <form onSubmit={this.onSubmit} id="SignIn_form"> 
                    <input onChange={this.changeFirstName} 
                    value={this.state.firstName}
                    type="text" required 
                    id="signUp_firstName" 
                    name="SignUpFirstName" 
                    className="input"  
                    placeholder="First Name" />

                    <input 
                    onChange={this.changeLastName} 
                    value={this.state.lastName}
                    type="text" required id="signUp_lastName" name="SignUpLastName" className="input" placeholder="Last Name" />
                    
                    <input onChange={this.changeEmail} 
                    value={this.state.email}
                    type="email" required id="signUp_email" name="SignInEmail" className="input" pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="Email" />
                    
                    <input
                    onChange={this.changePassword} 
                    value={this.state.password}
                     type="password" required id="signUp_password" name="SignUnPassword" className="input" placeholder="Password" />
                    
                    <button onClick={this.onSubmit} type="submit" className="SignUp_button buttons3" > Sign up</button> 
                </form>
               
            </div>
        </div>
        <SocialMediaIcons />
    </div>
    ) 
    }
    
}

export default SignUpForm