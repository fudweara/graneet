require('dotenv').config()

// require('./db/mongodb')


const express = require('express')
const app = express()
const cors = require('cors')

const data = require('./codes-postaux.json')
app.use(cors())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({extended: true})) // for parsing application/x-www-form-urlencoded


app.get('/', function (req, res) {

    let result = [];
    for (let i = 0; i < 100; i++) {
        result.push(data[i]);
    }
    res.send(result);
})

app.get('/:search', function (req, res) {

    const searchQuery = req.params.search;
    const departementMetropole = []
    const departementOutreMer = []


    data.forEach(line => {

        // limite de 100
        if ((departementMetropole.length + departementOutreMer.length) < 100) {
            // recherche
            if (line.codePostal === searchQuery || line.nomCommune.toLowerCase().includes(searchQuery.toLowerCase())) {

                // tri par metropole/outremer
                if (line.codePostal[0] === '9' && line.codePostal[1] === '7') {
                    departementOutreMer.push(line)
                } else {
                    departementMetropole.push(line)
                }
            }
        }


    })
    const result = [{"metropole": departementMetropole, "outremer": departementOutreMer}]

    if (departementMetropole.length !== 0 || departementOutreMer.length !== 0)
        res.send(result)
    else {
        res.status(404).send();
    }
})


app.listen(process.env.PORT, function () {
    console.log('CORS-enabled web server listening on port ' + process.env.PORT)
})

