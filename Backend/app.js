const express = require('express')
const path = require('path')
const{Book} = require('./model/Book');

const  data = {
    "data":[
        {"name":"The Mind of the leader","author":"Rasmus","description":"The mind of the leader","price":"20","available":"yes","image":"https://images-na.ssl-images-amazon.com/images/I/41N3AIytydL._SX331_BO1,204,203,200_.jpg"},
        {"name":"The Mind of the leader","author":"Raji","description":"The mind of the leader","price":"20","available":"yes","image":"https://images-na.ssl-images-amazon.com/images/I/41N3AIytydL._SX331_BO1,204,203,200_.jpg"},
        {"name":"The Mind of the leader","author":"Rasu","description":"The mind of the leader","price":"20","available":"yes","image":"https://images-na.ssl-images-amazon.com/images/I/41N3AIytydL._SX331_BO1,204,203,200_.jpg"}
    ]
}

const app = express()
const port = 5000;
app.use(express.json())

const cors = require("cors");
app.use(cors());

// get all books
app.get('/books',async(req,res)=>{
    // const allBooks = await Book.findAll()
    // res.json(allBooks);
    res.json(data);
})
app.get('/books/:id',async(req,res)=>{
    const allBooks = await Book.findByPk(req.params.id)
    res.json(allBooks)
})

app.post('/books',async(req,res)=>{
    let newBooks = await Book.create(req.body)
    res.send("New Books is Added!")
})

app.put('/books/:id', async(req,res)=>{
    
    let updatedBooks = await Book.update(req.body,{
        where: {id:req.params.id}
        })
    res.send(updatedBooks? "books update":"update failed")

})
app.delete('/books/:id', async(req,res)=>{
    await Book.destroy({
        where:{id:req.params.id}
    })
    res.send("Books destroyed")
})

app.listen(port,()=>{
    console.log(`server listening at http://localhost:${port}`)
})
