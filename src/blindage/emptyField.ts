export function blindageUp  (req : any,res : any) {
    if (req.body.first_name === undefined || req.body.first_name ===  "" || req.body.password === undefined || req.body.password ===  "" || req.body.last_name === undefined || req.body.last_name ===  "" || req.body.password_confirmation === undefined || req.body.password_confirmation ===  "" || req.body.email === undefined || req.body.email ===  "") {
        res.render('pages/signUp',{error: "You need to write something"})
    }
    if (req.body.password != req.body.password_confirmation ) {
        res.render('pages/signUp',{error: "Your confirmation password is incorrect"})
    }
    console.log(req.body.email)
    res.redirect('/logged')

}

export function blindageIn  (req : any,res : any)  {
    if (req.body.email === undefined || req.body.email ===  "" || req.body.password === undefined || req.body.password ===  "") {
        res.render('pages/signIn',{error: "You need to write something"})
    }
    res.redirect('/logged')
    console.log(req.body.email)
}

export function blindageAdd_Delete  (req : any,res : any) {
    if (req.body.name_of_metric === undefined || req.body.name_of_metric ===  "") {
        res.render('pages/logged',{error: "You need to write something"})
    }
    console.log(req.body.name_of_metric)
    res.redirect('/logged')

}
export function blindageUpdate (req : any,res : any) {
    if (req.body.old_name_of_metric === undefined || req.body.old_name_of_metric ===  "" || req.body.new_name_of_metric === undefined || req.body.new_name_of_metric ===  "") {
        res.render('pages/logged',{error: "You need to write something"})
    }
    console.log(req.body.new_name_of_metric)
    res.redirect('/logged')
}
export function blindageFind (req : any,res : any) {
    res.render('ok ca marche')
}