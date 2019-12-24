

let express = require("express")
let bodyParser = require('body-parser')
let app = express();

//Middleware

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Moteur de template

app.set('view engine', 'ejs')

//import fonctions de blindage
import {blindageUp,blindageIn,blindageAdd_Delete,blindageUpdate,blindageFind} from './blindage/emptyField'


//Routes get

app.get('/', (req: any, res: any) => {
    res.render('pages/home', )
})

app.get('/signIn', (req : any,res : any) => {
    res.render('pages/signIn',)
})

app.get('/signUp', (req : any,res : any) => {
	res.render('pages/signUp',)
})

app.get('/logged', (req: any,res :any) => {
	res.render('pages/logged',)
})

//Routes post

app.post('/signIn', blindageIn)

app.post('/signUp',blindageUp)

app.post('/logged/add', blindageAdd_Delete)

app.post('/logged/delete', blindageAdd_Delete)

app.post('/logged/update', blindageUpdate)

app.post('/logged/find',blindageFind )

const PORT = 8080;
app.listen(PORT)

