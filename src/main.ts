let express = require("express")

const app = express();

const PORT = 8080;

app.use(express.static('public'))

app.listen(PORT)

app.set('view engine', 'ejs')

app.get('/', (req: any, res: any) => {
    res.render('pages/home', { test: 'fc' })
})

app.get('/signIn', (req : any,res : any) => {
	res.render('pages/signIn',{test: 'fc'})
})

app.get('/signUp', (req : any,res : any) => {
	res.render('pages/signUp',{test: 'fc'})
})


