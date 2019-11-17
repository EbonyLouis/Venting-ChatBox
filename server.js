const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const url = 'mongodb+srv://ebonyjlouis:demo@palindrome-wjzio.mongodb.net/test?retryWrites=true&w=majority'
var db, collection;
const dbName = "assignment";


app.listen(3000, () => {
    MongoClient.connect(url, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        db = client.db(dbName);
        console.log("Connected to `" + dbName + "`!");
    });
});

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  // console.log(db)
  db.collection('vent').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('index.ejs', {canCallThisAnything: result})
  })
})

app.post('/chat', (req, res) => {
  // request body always get sent over with your form
  db.collection('vent').save({subject: req.body.subject, responseColor: req.body.responseColor, message: req.body.message, heart: 0 }, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})

app.put('/chat2', (req, res) => {
  // request body always get sent over with your form
  db.collection('vent').save({subject: req.body.subject, responseColor: req.body.responseColor, message: req.body.message, heart: 0 }, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})


app.put('/messages', (req, res) => {
  db.collection('vent')
  .findOneAndUpdate({subject: req.body.subject, responseColor: req.body.responseColor, message: req.body.message, heart: req.body.heart}, {
    $set: {
      heart:req.body.heart + 1
    }
  }, {
    sort: {_id: -1},
    upsert: false
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})
