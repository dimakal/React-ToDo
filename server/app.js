const express = require("express")
const bodyParser = require("body-parser")
const {v4} = require("uuid")
const cors = require("cors")

const app = express()
const port = 3001

let TODOS = [
    {id: v4(), text: 'Something 1', completed: false},
    {id: v4(), text: 'Something 2', completed: true},
    {id: v4(), text: 'Something 3', completed: false},
]

app.use(cors())
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.json(TODOS)
})

app.post('/create', (req, res) => {
    let todo = {...req.body, id: v4()}

    console.log(todo)
    TODOS.push(todo)

    res.send({todo, success: true})
})

app.delete('/remove/:id', (req, res) => {
    TODOS = TODOS.filter((todo) => todo.id !== req.params.id)
    console.log(req.params)
    res.status(200).json({message: 'Todo was deleted', todos: TODOS})
})

app.put('/complete/:id', (req, res) => {
    TODOS.forEach((todo) => {
        if (todo.id === req.params.id) {
            todo.completed = !todo.completed
        }
    })

    console.log(req.params)
    res.status(200).json({message: 'Todo was toggled', todos: TODOS})
})

app.put('/edit/:id', (req, res) => {
    TODOS.forEach((todo) => {
        if (todo.id === req.params.id) {
            todo.text = req.body.text
        }
    })

    console.log(req.body.text)
    res.status(200).json({message: 'Todo was changed', todos: TODOS})
})

app.listen(port, () => console.log(`Server has been started on port ${port}`))