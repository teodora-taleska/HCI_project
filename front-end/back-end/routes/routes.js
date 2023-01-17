 const { response } = require('express')
const express = require('express')
// import the sign up schema
const signUpTemplateCopy = require('../models/SignUpModels')

 const router = express.Router()
// Because first I will make the sign up page, and all that is 
// expected is a post request--> When the users submit the sign-up form 
// it means that the user have sent a post request 
 router.post('/sign-up', (request, response) => {
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
 })


//  router.get('/sign-in')
 module.exports = router 