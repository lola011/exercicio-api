const express = require("express")

const router = express.Router()

const app = express()

const porta = 3333

function mostraOla(request, response) {

    response.send("Olá, mundo!")
}

function mostraPorta() {

    console.log("Servidor criado e rodando na porta ", porta)

}

function mostraStatus (resquest, response) {
    console.log('0')
    response.send('1ok!') 
    console.log('01')
    console.log ('2ok)')
}


app.use(router.get('/ola', mostraOla))

app.use(router.get('/', mostraStatus) )

app.listen(porta, mostraPorta)
