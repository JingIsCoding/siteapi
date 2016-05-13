import mongoose  from './dataSource/mongo'
import Promise from 'promise'

const schema = new mongoose.Schema({title: "string", content: "string", timeCreated: "date", comments: "array"});
let Blog = mongoose.model("blogs", schema)

export function getAllBlog(){
    return new Promise((fulfill,rejected) => {
        Blog.find((err, blogs) => {
            if(err){
                rejected(err)
            }
            else{
                fulfill(blogs)
            }
        })
    })
}

export function addBlog(newBlog){
    let blog = new Blog({
        title: newBlog.title,
        content: newBlog.content,
        comments: newBlog.comments
    })

    return new Promise((fulfill, rejected) =>
    blog.save(err =>
        {
            if(err){
                rejected(err)
            }else{
                fulfill()
            }
        }))
}

export function addComment(blog, comment){

}

export function removeBlog(blog){

}

export function updateBlog(query, blog){

}