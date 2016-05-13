"use strict"
import express from 'express'
import session from 'express-session'
const MongoStore = require('connect-mongo')(session);

import bodyParser from 'body-parser'
import userRoute from './routes/userRoute'
import blogRoute from './routes/blogRoute'
import mongoose from './dao/dataSource/mongo'

let app = express()
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(session({
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  secret: 'what is cat',
  cookie: { secure: true }
}))


app.use("/api/user",userRoute)
app.use("/api/blog",blogRoute)

let server = app.listen(8081, function (){
  let host = server.address().address
  let port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})
