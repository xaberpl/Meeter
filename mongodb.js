const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'MeeterDB'

MongoClient.connect(connectionURL, { useUnifiedTopology: true, useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    console.log('Connection with DB successful')

    const db = client.db(databaseName)

    db.collection('users').insertOne({
        name: 'Andrew',
        age:27
    })
})