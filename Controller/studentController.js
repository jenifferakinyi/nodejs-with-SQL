const db = require ('../model/indexStart')
const createError = require('http-errors')

const Student = db.students

module.exports={
    addStudent:async(req,res,next)=>{
        try{
            let info = {
                firstname:req.body.firstname,
                lastname:req.body.lastname,
                gender:req.body.gender
            }
            const addStore = await Student.create(info)
            res.status(200).send(addStore)
        }
        catch(err){
            next(error)
        }
    }
}
