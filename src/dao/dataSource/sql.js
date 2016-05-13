import sqlConfig from '../../../sqlConfig'
import sql from 'mssql'

const connectString = "mssql://"+sqlConfig.userName+":"+ sqlConfig.password + "@"+ sqlConfig.url+"/"+sqlConfig.database

sql.connect(connectString).then(function() {
    console.log("connected to ms sql @ " + sqlConfig.url)
}).catch((err) => {
	console.log("Connection failed ",err)
});

export function getPreparedStatement(){
    return new sql.PreparedStatement()
}

export function query(queryString){
    return new sql.Request().query(queryString)
}

export function getSQL(){
    return sql
}
