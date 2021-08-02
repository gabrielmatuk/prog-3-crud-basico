import UsuarioRepository from "../repositories/aluno.repository.js"
//Service DIRECIONANDO com um parametro para o meu repository
const createUsuario = async (usuario) => {
  return await UsuarioRepository.insertUsuario(usuario)
}

const getAlunos = async () => {
  return await UsuarioRepository.getAlunos();
}

const getAluno = async (id) => {
  return await UsuarioRepository.getAluno(id);
}

const deleteAluno = async (id) => {
  return await UsuarioRepository.deleteAluno(id);
}

const updateAluno = async (usuario) => {
  return await UsuarioRepository.updateAluno(usuario)
}

export default {
  createUsuario,
  getAlunos,
  getAluno,
  deleteAluno,
  updateAluno
}