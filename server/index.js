const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require("cors")
const db_connection = require("./db_connection")

const db = mysql.createPool(db_connection)

app.use(cors())
app.use(express.json())

app.post("/register", (req, res) => {
    const {name} = req.body
    const {cost} = req.body
    const {category} = req.body

    let SQL = "INSERT INTO games (name, cost, category, created_at) VALUES (?,?,?,now())"
    db.query(SQL, [name, cost, category], (error, result) => {
        console.log(error)
    })
})

app.listen(3001, () => {
    console.log("initialize server in http://127.0.0.1:3001")
})