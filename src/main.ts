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
    }
    res.redirect('/logged')
    console.log(req.body.email)
})

app.post('/signUp', (req : any,res : any) => {
    if (req.body.first_name === undefined || req.body.first_name ===  "" || req.body.password === undefined || req.body.password ===  "" || req.body.last_name === undefined || req.body.last_name ===  "" || req.body.password_confirmation === undefined || req.body.password_confirmation ===  "" || req.body.email === undefined || req.body.email ===  "") {
        res.render('pages/signUp',{error: "You need to write something"})
    }
    console.log(req.body.email)
    res.redirect('/logged')

})

const PORT = 8080;
app.listen(PORT)

