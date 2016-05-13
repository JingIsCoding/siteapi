import express from 'express'
import Service from '../service/blogService'

const blogService = new Service()
const blog = express()

blog.get("/all",(req,res) => {
    if(req.session.blogs){
        console.log("from sessoin")
        res.status(200).send(req.session.blogs)
        return
    }

    blogService.getAllBlog().then(
        blogs => {
             req.session.blogs = blogs
             res.status(200).send(blogs)
        }
    )
})

blog.post("/add",(req,res) =>{
    let body = req.body
    console.log(body)
    blogService.addBlog(body).then(
            blogs => {
                 res.status(200).send(blogs)
            }
        )
})

blog.get("/",(req,res) => {
    res.status(200).send("Yeah")
})

export default blog