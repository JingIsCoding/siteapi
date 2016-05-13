import { getAllBlog, addBlog, removeBlog, updateBlog } from '../dao/blogs'

class BlogService{
    constructor(){
    }

    getAllBlog(){
        return getAllBlog()
    }

    addBlog(body){
        const blog = {
            title: body.title,
            content: body.content,
            comments: []
        }

        return addBlog(blog)
    }

    removeBlog(blog){
        return removeBlog(blog)
    }

    updateBlog(condition, update){
        return updateBlog(condition, update)
    }
}

export default BlogService