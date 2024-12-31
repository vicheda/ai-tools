import express from 'express'
import mysql from 'mysql'

const app = express()

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Vicheda017',
    database: 'tools'
})

app.get("/", (req, res) => {
    res.json('This is the backend.')
})

app.get("/tools", (req, res) => {
    const q = 'SELECT * FROM tools'
    db.query(q, (err, result) => {
        if (err) return res.json(err)
        return res.json(result)
    })
})

app.listen(3000, () => {   
    console.log('Connected to backend!')
})