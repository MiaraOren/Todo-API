/* External Requires */
var express = require('express');
var bodyParser = require('body-parser');

/* Program Requiers */
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());


/* Creating new todos */
app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});



app.listen(8080, () => {
    console.log('Started on Port 8080')
})

module.exports = {
    app
}











/* 
var user1 = new User({
    name: 'TheDude',
});

var newTodo = new Todo({
    text: 'a2',
    completedAt: new Date().getFullYear()
});

user1.save().then((doc) => {
    console.log('Saved user', doc);
}, (e) => {
    console.log('Unable to save User', e);
});

 */