const port = 3000;

const express = require('express')
const app = express();
const bodyParser = require ('body-parser')
const bancoDeDados = require ('./database')

app.use(bodyParser.urlencoded({ extended:true  }))

app.get("/produtos", (req, res) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id',(req,res)=>{
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req,res)  => {
    const produto = bancoDeDados.saveProdutos({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produtos:id', (req,res)  => {
    const produto = bancoDeDados.saveProdutos({
        id:req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos:id', (req,res)  => {
    const produto = bancoDeDados.excluirProdutos(req.params.id)
    res.send(produto)
})

app.listen(port, () => {
    console.log('Server executing on '+ port +' port.')
})
