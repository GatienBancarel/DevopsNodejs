import {UsersDB} from "../src/dataBase/userDB"
import 'mocha';

var assert = require('assert');

// Déclaration de variables de test
var f_name = "Ren";
var l_name = "William";
var mail = "william.ren@edu.ece.fr";
var pwd = "1234";
var identity = {
    firstname: f_name,
    lastname: l_name,
    email: mail,
    password: pwd,
};

// Tests
describe('Mocha Test', function() {

    UsersDB.db.open();

    it('Inscription - OK', function () {

        UsersDB.db.insert(f_name, l_name, mail, pwd);
        
        var ident = UsersDB.get(mail+pwd);

        assert.equal(identity, ident);

    });

    it('Connexion - OK', function () {

        UsersDB.exist(mail, pwd, function(result){
            assert.equal(result, false);

        });
        
    });

    it('Connexion Mauvais PWD - OK', function () {

        UsersDB.exist(mail, "123456789", function(result){
            assert.equal(result, true);

        });

    });

});