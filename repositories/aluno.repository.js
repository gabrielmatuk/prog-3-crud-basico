import { promises as fs } from "fs";
const { readFile, writeFile } = fs

//Função para inserir o usuário no meu array de ALUNOS e fazer somatoria no meu nextId
const insertUsuario = async (usuario) => {
  const data = JSON.parse(await readFile(global.filename));

  usuario = {
    id: data.nextId++,
    nome: usuario.nome,
    email: usuario.email,
    curso: usuario.curso
  };
  data.alunos.push(usuario);

  await writeFile(global.filename, JSON.stringify(data, null, 2));

  return usuario
}
//Função para listar TODOS os alunos
const getAlunos = async () => {
  const data = JSON.parse(await readFile(global.filename));
  return data.alunos;
}
//Função para listar aluno especifico
const getAluno = async (id) => {
  const alunos = await getAlunos();
  const usuario = alunos.find(usuario => usuario.id === parseInt(id));
  if (usuario) {
    return usuario
  }
  throw new Error("Aluno não encontrado")
}
//Função para deletar um aluno
const deleteAluno = async (id) => {
  const data = JSON.parse(await readFile(global.filename));
  data.alunos = data.alunos.filter(usuario => usuario.id === parseInt(id));

  await writeFile(global.filename, JSON.stringify(data, null, 2));
  console.log(`USUÁRIO DO ID: ${id} FOI CANCELADO COM SUCESSO`)
}
//Função para ATUALIZAR um aluno
const updateAluno = async (usuario) => {
  const data = JSON.parse(await readFile(global.filename));
  const index = data.alunos.findIndex(a => a.id === usuario.id);

  if (index === -1) {
    throw new Error("ID não encontrado")
  }
  data.alunos[index].nome = usuario.nome;
  data.alunos[index].email = usuario.email;
  data.alunos[index].curso = usuario.curso;

  await writeFile(global.filename, JSON.stringify(data, null, 2));

  return data.alunos[index]
}

export default {
  insertUsuario,
  getAlunos,
  getAluno,
  deleteAluno,
  updateAluno
}