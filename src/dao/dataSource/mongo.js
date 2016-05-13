import mongoConfig from '../../../mongoConfig'
import mongoose from 'mongoose'

const url = mongoConfig.url ? mongoConfig.url : "localhost"
const port = mongoConfig.port ? mongoConfig.port : "27017"

mongoose.connect("mongodb://"+ url + ":" + port + "/"+ mongoConfig.db)

let db = mongoose.connection;

db.on('error',
    console.error.bind(console, 'connection error:'))

db.once('open', function() {
    console.log("connected to "+ "mongodb://"+ url + ":" + port + "/"+ mongoConfig.db)
});

//var BlogSchema = mongoose.Schema({title: String, content: String, timeCreated: Date, comments: Array});

export default mongoose