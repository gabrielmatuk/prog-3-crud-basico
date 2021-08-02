import UsuarioService from "../service/aluno.service.js"
//Utilizando arrow functions por conta do ES6
const createUsuario = async (req, res, next) => {
  try {
    //Body da requisição
    let usuario = (req.body);
    //Determinei que os campos nome email e curso são obrigatorios, caso não tenha vou ter um 400 e mensagem de erro, além de mostrar no console
    if (!usuario.nome || !usuario.email || !usuario.curso) {
      res.status(400)
      res.send('Nome, Email e Curso do aluno são obrigatórios!')
      throw new Error("Nome, Email e Curso do aluno são obrigatórios!")
    }
    usuario = await UsuarioService.createUsuario(usuario)

    res.send(usuario)
  } catch (err) {
    next(err)
  }
}
//Tratativa de chamado para ser feito no endpoint. Não passo nenhum parametro
const getAlunos = async (_, res, next) => {
  try {
    res.send(await UsuarioService.getAlunos());
  } catch (err) {
    next(err);
  }
}
//Tratativa de chamado para ser feito no endpoint. Passo parametro de ID
const getAluno = async (req, res, next) => {
  try {
    res.send(await UsuarioService.getAluno(req.params.id));
  } catch (err) {
    next(err);
  }
}
//Tratativa de chamado para ser feito no endpoint. Passo parametro de ID
const deleteAluno = async (req, res, next) => {
  try {
    await UsuarioService.deleteAluno(req.params.id);
    res.end();
  } catch (err) {
    next(err)
  }
}
//Tratativa de chamado para ser feito no endpoint. Não passo nenhum parametro
const updateAluno = async (req, res, next) => {
  try {
    let usuario = req.body;

    if (!usuario.nome || !usuario.email || !usuario.curso) {
      res.status(400)
      res.send('Nome, Email e Curso do aluno são obrigatórios!')
      throw new Error("Nome, Email e Curso do aluno são obrigatórios!")
    }
    res.send(await UsuarioService.updateAluno(usuario))
  } catch (err) {
    next(err)
  }
}

export default {
  createUsuario,
  getAlunos,
  getAluno,
  deleteAluno,
  updateAluno
}