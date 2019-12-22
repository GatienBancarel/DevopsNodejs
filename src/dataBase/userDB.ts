import { callbackify } from "util";

var level = require('level')

export class UsersDB {

    public static db = level("Users")

	public static insert(firstname:string, lastname:string, email:string, password: number) {
	    UsersDB.db.put(email+password, JSON.stringify({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
        }), function (err) {
            if (err) return console.log('insertion fail', err) // some kind of I/O error
            else console.log("insertion valid")
        })
    }
    
    public static get(id: string) {
        UsersDB.db.get(id, function (err, value) {
            if (err) return console.log('fail recuperation id', err) // likely the key was not found
         
            console.log('user=' + JSON.parse(value))
          })
    }

    public static exist(email: string, password: string, callback: (err: Error) => void) {
        UsersDB.db.get(email+password, function (err, value) {
            callback(err)
            if (err) {
                return console.log('fail connexion', err) // likely the key was not found
            } else {
                console.log('user=' + JSON.parse(value))
            }
          })
    }
}