const todos = require('../models/data');

function index(req, res){
    todos: todos.getAll
    // console.log(todos)
    res.render('index')
}


function createtodo (req, res){
    todos.push(req.body)
    console.log(req.body)
    res.render('index', {
        todos
    })
}

// function deletetodo (req, res){
    
// }

module.exports = {
    createtodo,
    index,

}