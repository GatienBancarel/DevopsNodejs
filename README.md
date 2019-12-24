# Project Nodejs
This is the project done in *TecnologyWeb* class and wich will be used for the *DevOps* project as well.

In order to respond to the problematic of the subject, we realized a website that allow you to follow the evolution of you size over time. You can submit your size, delete certain value or modify them if they are wrong, after that you will be able to display a graph of the evolution of your size over time.

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

`npm test`


## Problems we encountered

 To do tests of TypeScript
 Manage the data exchange from the View to the MiddleWare and vice versa
 The Apprehension of TypeScript which was really difficult


## area for improvement

Distinguish the database from LevelDB for the test and for the application
Isolate the logic of the main.ts in some files.

## License

This project is licenced under the ISC license.

## About us

We are **Gatien Bancarel**, **William Ren** and **Josquin Clavier**. We did the project together.