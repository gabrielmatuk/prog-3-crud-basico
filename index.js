import express from "express";
import alunosRoutter from "./routes/alunos.routes.js"
import { promises as fs } from "fs"
const { readFile, writeFile } = fs

//Setando variavel GLOBAL chamada filename
global.filename = "usuarios.json"

const app = express();
//Definindo 
app.use(express.json())

app.use("/alunos", alunosRoutter)

//Iniciando minha aplicação na porta 3333
app.listen(3333, async () => {
  //VERIFICA A EXISTENCIA DO ARQUIVO NUM BLOCO TRY/CATCH, LENDO O ARQUIVO SE JÁ EXISTIR
  try {
    await readFile(global.filename)
    console.log("API started on port 3333")
  } catch (err) {
    //CASO NÃO TENHA UM ARQUIVO CHAMADO usuarios.json, A APLICAÇÃO IRÁ CRIAR UM NOVO ARQUIVO
    const initialJson = {
      nextId: 1,
      alunos: []
    }
    writeFile(global.filename, JSON.stringify(initialJson)).then(() => {
      console.log("API started on port 3333")
    }).catch(err => {
      console.log(err)
    })
  }
});