module.exports={
    empty: (req,res) => {
        if (req.body.email === undefined || req.body.email ===  "" ) {
            res.render('pages/signIn',{error: "You need to write something in the email fiel"})
        }
    }
}