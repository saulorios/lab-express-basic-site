const router = require('express').Router()

router.get('/home', (req, res) => {
    console.log("GET request at /home route")
    return res.json('Here Home!')
})

router.get('/about', (req, res) => {
    console.log("GET request at /home route")
    return res.json('Here Home!')
})

router.get('/works', (req, res) => {
    console.log("GET request at /home route")
    return res.json('Here Home!')
})
