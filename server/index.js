const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require("cors")
const db_connection = require("./db_connection")

const db = mysql.createPool(db_connection)

app.use(cors())
app.use(express.json())

app.get("/index", (req, res) => {
    let SQL = "SELECT * from games"
    db.query(SQL, (error, result) => {
        if(error) 
            console.log(error)
        else
            res.send(result)
    })
})

app.get("/edit/:id", (req, res) => {
    let SQL = "SELECT * from games where id = " + req.params.id
    db.query(SQL, (error, result) => {
        if(error) 
            console.log(error)
        else
            res.send(result)
    })
})

app.post("/update", (req, res) => {
    const { id } = req.body;
    const { name } = req.body;
    const { cost } = req.body;
    const { category } = req.body;
    let mysql = "UPDATE games SET name = ?, cost = ?, category = ? WHERE id = ?";
    db.query(mysql, [name, cost, category, id], (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
      } 
    });
});

app.post("/store", (req, res) => {
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