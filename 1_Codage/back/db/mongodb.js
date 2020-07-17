const MongoClient  = require('mongodb').MongoClient;


MongoClient .connect(process.env.MONGO_DB_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    function (err, client) {
        console.log("Connected successfully to server");

    }

)


