 const { compare } = require('bcryptjs')
const { response, request } = require('express')
const express = require('express')




// import the schema
const signUpTemplateCopy = require('../models/SignUpModels')

//create a model
// const UsignedUpUser=mongoose.model("mytables")


 const router = express.Router()
// Because first I will make the sign up page, and all that is 
// expected is a post request--> When the users submit the sign-up form 
// it means that the user have sent a post request 
 router.post('/sign-up',  (request, response) => {



    const signedUpUser = new signUpTemplateCopy({
        firstName:request.body.firstName,
        lastName:request.body.lastName,
        email: request.body.email,
        password: request.body.password,
    })
    signedUpUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })

    // const {
    //     firstName, lastName, email, password 
    // } = request.body
    
    //  User.create({
    //         firstName,
    //         lastName,
    //         email,
    //         password
    //     });
    
 })

//  const User = mongoose.model("mytables")
 router.post("/sign-in", async (request, response) => {
    // const {email, password} = request.body
    const signedInUser = new signUpTemplateCopy({
        email: request.body.email,
        password: request.body.password,
    })

    const user=  signedInUser.findOne({email})

    if (!user){
        return alert("User not found")
    }
    if (signedInUser.password == user.password){

        // return response.json("User exists")
        // console.log("Successfully logged in")
        if (!response.status(201)){
            return alert("Error!")
        }
        
    }else{
        return alert("Invalid password")
        
    }
 });
    



//  router.get('/sign-in')
 module.exports = router 