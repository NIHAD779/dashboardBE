const express = require('express')
const router = express.Router()
const {movies} = require('./model')


router.get('/movies', async (req,res) =>{
    try{
        const page = parseInt(req.query.page) || 1
        const limit = 10
        const skip = (page - 1)*limit

        let filter = {}

        if (req.query.title){
            filter.title = new RegExp(req.query.title, 'i')
        }

        const Movies = await movies.find(filter).limit(limit).skip(skip)
        res.json(Movies)
    }catch(error){
        console.log(error)
    }   
})


module.exports = router