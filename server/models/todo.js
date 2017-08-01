var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 2,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

/* newTodo.save().then((doc) => {
    console.log('Saved to do', doc)
}, (e) => {
    console.log('Unable to save todo');
}); */

module.exports = {
    Todo
}