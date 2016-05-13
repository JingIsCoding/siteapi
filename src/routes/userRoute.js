import express from 'express'
import Service from '../service/userService'

const userService = new Service()
const user = express()

user.get("/all",(req,res) => {
    userService.getAllUsers()
    .then(
        users =>
            res.status(200).send(users)
    ).catch(
        ex =>{
            res.status(200).send({error:true,type: ex})
    })
})

user.post("/add",(req,res) =>{
    userService.saveUser(req.body).then(
        data => {
            console.log(data)
            res.status(200).send("fuck you")
        }
    ).catch(
        ex =>
        res.status(401).send("不知道你在干嘛",ex)
    )
})

user.get("/",(req,res) => {
    res.status(200).send("Yeah")
})

export default user