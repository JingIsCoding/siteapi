import mongoose  from './dataSource/mongo'
import Promise from 'promise'

const schema = new mongoose.Schema({firstName: "string", lastName: "string", email: "string"})
let Users = mongoose.model("users", schema)

export function getAllUsers(){
    return new Promise((fulfill,rejected) => {
        Users.find((err, users) =>{
            if(err){
                rejected(err)
            }else{
                fulfill(users)
            }
        })
    })
}