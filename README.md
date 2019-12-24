# Project Nodejs
This is the project done in *TecnologyWeb* class and wich will be used for the *DevOps* project as well.

Afin de repondre au problematique du sujet nous avons réalisé un site permettant de suivre l'évolution de votre taille dans le temps, vous pouvez entrez vos taille, supprimé certaines valeurs ou les modifiers si elles sont éronés, ensuite il est possible d'afficher un graphique de l'évolution de votre taille dans le temps.

## Getting Started

To launch our project you will need to clone our project on your computer and open it in a code editor.
Implement the population of the database with the command `npm run populate` Then use this command to launch it :

            - `npm start`

To **sign In** with the current users you run from populate, you can use either :
                        - **josquin.clavier@edu.ece.fr** with the password **mot de passe**
                        - or **gatien.bancarel@edu.ece.fr** with de passord **maux de passe**

### Architecture

Our project uses a main.ts file where we created our server and in wich we specified the routes of the project. We got 5 main routes :
                                - home
                                - signIn
                                - signUp
                                - signOut
                                - logged
                             

Each of these routes have a different purpose.
With the home route we can access the home page in which we can get to the signIn and the signUp page. These pages let the users sign in and sign up following his desires.


### Running the tests

`npm start`


## Problems we encountered

 faire des tests en type script 
 transiter des données entre la vue et le middleware et vise vers ca (ajax)
courbe d'apprentissage de la syntaxe typescript difficle 


## axe d'amélioration

différencier la base level db pour les tests et pour l'app 
isoler la logique du main.ts dans des fichiers 

## License

This project is licenced under the ISC license.

## About us

We are **Gatien Bancarel**, **William Ren** and **Josquin Clavier**. We did the project together.