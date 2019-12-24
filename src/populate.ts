import { UsersDB } from "./dataBase/userDB";

import { MetricsDB } from "./dataBase/metricsDB";

UsersDB.insert(

    "gatien",

    "bancarel",

    "gatien.bancarel@edu.ece.fr",

    "maux de passe"

)

 

UsersDB.insert(

    "josquin",

    "clavier",

    "josquin.clavier@edu.ece.fr",

    "mot de passe"

)

 

MetricsDB.insert(

    10,

    "gatien.bancarel@edu.ece.fr"+"maux de passe"

)

MetricsDB.insert(

    20,

    "josquin.clavier@edu.ece.fr"+"mot de passe"

)