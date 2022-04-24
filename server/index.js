const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require("cors")
const db_connection = require("./db_connection")

const db = mysql.createPool(db_connection)

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("hello world")
})

app.listen(3001, () => {
    console.log("initialize server in http://127.0.0.1:3001")
})