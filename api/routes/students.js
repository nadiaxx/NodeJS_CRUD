const express = require('express'); //improted express package
const router = express.Router(); //using built-in-function Router in express package
const mongoose = require('mongoose'); //importing mongoose

const student = require('../models/student');

const Student = require('../models/student');

/*
router.get('/, (req,res,next) => {
  res.status(201).json({
    message: "Get Request"
  })
})
router.post('/', (req, res, next) => {
    res.status(200).json({
        message: "Post Request"
    })
})
*/
//How to get request 
router.get('/',(req,res,next) => {
    Student.find()  //built in function to find the values in Student 'query'
    .exec()         //to excute the query
    .then(result => res.status(200).json(result))  //then and catch both are same as post
    .catch(err => res.status(500).json(err))  
    })
router.post('/', (req, res, next) => {
    const information ={                  //created an object information
        _id : mongoose.Types.ObjectId(),  //took unique ids                  
          Name : req.body.Name,           // show the path to connect with batch                     
          Batch : req.body.Batch,          // show the path to connect with name
                                                        
        }
        const student = new Student(information);            //created an object to pass information
        student.save()                                         //after passing we need to save it
        .then(result => res.status(200).json(result))             //if it goes well then we need to return a promise (.then())in json format message
        .catch(err => res.status(500).json(err))                 // catch will take the errors like try-catch
    })
 router.get('/:studentId',(req,res,next) => {            //studentId variable will take the unique ids or info after 
        const id = req.params.studentId;                   // now to get the u.ids of student in a request url we use params builtin function
        student.findById(id)                               //built in function to find id
        .exec()
        .then(result => res.status(200).json(result))  //then and catch both are same as post
        .catch(err => res.status(500).json(err)) 


    })

router.delete('/:studentId',(req,res,next) => {
    const id = req.params.studentId;
    Student.deleteOne({_id: id})
    .exec()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json(err)) 

})

module.exports = router;