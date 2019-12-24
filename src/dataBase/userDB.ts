import { callbackify } from "util";

var level = require('level')

export class UsersDB {

    public static db = level("Users")

	public static insert(firstname:string, lastname:string, email:string, password: string, callback: ()=>void) {
        UsersDB.db.open()
	    UsersDB.db.put(email+password, JSON.stringify({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
        }), function (err) {
            if (err) return console.log('insertion fail', err) // some kind of I/O error
            else console.log("insertion valid")
            callback()
            UsersDB.db.close()
        })
    }

    public static exist(email: string, password: string, callback: (isExist: Boolean) => void) {
        UsersDB.db.open()
       UsersDB.db.get(email+password, function (err, value) {
            if (err) {
                callback(false)
                return console.log('fail connexion', err) // likely the key was not found
            } else {
                callback(true)
                console.log('user=' + JSON.parse(value))
            }
            UsersDB.db.close()
          })
    }

    public static delete(email: string, password: string, callback: ()=> void) {
       UsersDB.db.open()
       UsersDB.db.del(email+password, function (err) {
        callback()
        UsersDB.db.close()
      });
    }
}