import { UsersDB } from "./dataBase/userDB";

//import { emptyField } from './blindage/emptyField'

let express = require("express")
let bodyParser = require('body-parser')
let app = express();

//Middleware

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Moteur de template

app.set('view engine', 'ejs')

//Routes get

app.get('/', (req: any, res: any) => {
    res.render('pages/home', { test: 'fc' })
})

app.get('/signIn', (req : any,res : any) => {
    res.render('pages/signIn',{test: 'fc'})
})

app.get('/signUp', (req : any,res : any) => {
    res.render('pages/signUp',{test: 'fc'})
})

app.get('/logged', (req: any,res :any) => {
	res.render('pages/logged',{test: 'fc'})
})

//Routes post

app.post('/signIn', (req : any,res : any) => {
    if (req.body.email === undefined || req.body.email ===  "" || req.body.password === undefined || req.body.password ===  "") {
        res.render('pages/signIn',{error: "You need to write something"})
        return
    }
    UsersDB.exist(req.body.email, req.body.password, (err : any) => {
        if (err) {
            res.render('pages/signIn',{error: "You need to write valid email and password"})
        } else {
            res.redirect('/logged')
        } 
    })
})

app.post('/signUp', (req : any,res : any) => {
    if (req.body.first_name === undefined || req.body.first_name ===  "" || req.body.password === undefined || req.body.password ===  "" || req.body.last_name === undefined || req.body.last_name ===  "" || req.body.password_confirmation === undefined || req.body.password_confirmation ===  "" || req.body.email === undefined || req.body.email ===  "") {
        res.render('pages/signUp',{error: "You need to write something"})
        return
    }
    UsersDB.insert(
        req.body.first_name,
        req.body.last_name,
        req.body.email,
        req.body.password
    )
    res.redirect('/logged')
})

app.post('/logged/add', (req : any,res : any) => {
    if (req.body.name_of_metric === undefined || req.body.name_of_metric ===  "") {
        res.render('pages/logged',{error: "You need to write something"})
    }
    console.log(req.body.name_of_metric)
    res.redirect('/logged')

})

app.post('/logged/delete', (req : any,res : any) => {
    if (req.body.delete_name_of_metric === undefined || req.body.delete_name_of_metric ===  "") {
        res.render('pages/logged',{error: "You need to write something"})
    }
    console.log(req.body.delete_name_of_metric)
    res.redirect('/logged')

})

app.post('/logged/update', (req : any,res : any) => {
    if (req.body.old_name_of_metric === undefined || req.body.old_name_of_metric ===  "" || req.body.new_name_of_metric === undefined || req.body.new_name_of_metric ===  "") {
        res.render('pages/logged',{error: "You need to write something"})
    }
    console.log(req.body.new_name_of_metric)
    res.redirect('/logged')
})

app.post('/logged/find', (req : any,res : any) => {
    res.render('ok ca marche')
})

const PORT = 8080;
app.listen(PORT)

