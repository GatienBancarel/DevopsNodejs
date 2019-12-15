let express = require("express")

const app = express();

const PORT = 8080;

app.listen(PORT)

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req: any, res: any) => {
    res.render('pages/home', { test: 'fc' })
})




