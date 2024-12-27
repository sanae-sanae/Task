const express=require("express")
const db=require("./modeles/config.js")
const router=express.route()
router.get("/api/task",(req,res)=>{
    const afficher=new db.getCollection().find()
    res.send(afficher)
})
router.post("/api/task",(req,res)=>{
    const insertion =db.getCollection.insertMany()
})
router.put("/api/tasks/:id ",(req,res)=>{
    const id =req.params.id
    db.getCollection.updateById(id) 
})
router.delet("/api/tasks/:id",(req,res)=>{
    const id =req.params.id
    db.getCollection.deletById(id)
})
module.exports=router