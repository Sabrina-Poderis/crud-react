const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("hello world")
})

app.listen(3001, () => {
    console.log("initialize server in http://127.0.0.1:3001")
})