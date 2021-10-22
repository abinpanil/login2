const { response } = require('../app')
const objectId = require('mongodb').ObjectID;
var db = require('../config/connection')
var collection = require('../config/collections')


module.exports={

    adduser:(users)=>{
       return new Promise((resolve,reject)=>{
        db.get().collection('users').insertOne(users).then((data)=>{
         
           resolve(data)
        //    console.log(data)
        })
       })
        
    },
    getAllUsers:()=>{
        return new Promise(async (resolve,reject)=>{
            let users = await db.get().collection(collection.USERS_COLLECTION).find().toArray()
            
            resolve(users)
            

        })
    },
    deleteUser:(userId)=>{
        console.log(userId+"iddddd");
        return new promise((resolve,reject)=>{
            let users = db.get().collection(collection.USERS_COLLECTION).deleteOne({_id:objectId(userId)})
          console.log(users);
            resolve()
        })
    }
}