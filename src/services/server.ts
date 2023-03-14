import axios from "axios";
import { Autor } from "../model/Autor";
import { Livro } from "../model/Livro"
import { Editora } from "../model/Editora";

export async function getTodosAutores(): Promise<Autor[]> {
  const { data } = await axios
    .create({ headers: { 'Content-Type': 'application/json' }})
    .get('http://localhost:8000/autores');
  return data;
}

export async function getAutor(id: number) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
    .get(`http://localhost:8000/autores/${id}`);
}

export async function postAutor(dados: Autor) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
    .post('http://localhost:8000/autores', dados);
}

export function deleteAutor(id?: number) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
    .delete(`http://localhost:8000/autores/${id}`);
}

export async function putAutor(dados: Autor) {
  return axios
    .create({ headers: { "Content-Type": "application/json" } })
    .put(`http://localhost:8000/autores/${dados.idAutor}`, dados);
}

///////////////////////////////////////////////////////////////////////////

export async function getTodosLivros(): Promise<Livro[]> {
  const { data } = await axios
    .create({ headers: { 'Content-Type': 'application/json' }})
    .get('http://localhost:8080/livros');
  return data;
}

export async function getLivro(id: number) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
    .get(`http://localhost:8080/livros/${id}`);
}

export async function postLivro(dados: Livro) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
    .post('http://localhost:8080/livros', dados);
}

export function deleteLivro(id?: number) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
    .delete(`http://localhost:8080/livros/${id}`);
}

export async function putLivro(dados: Livro) {
  return axios
    .create({ headers: { "Content-Type": "application/json" } })
    .put(`http://localhost:8080/livros/${dados.idLivro}`, dados);
}

///////////////////////////////////////////////////////////

export async function getTodasEditoras(): Promise<Editora[]> {
  const { data } = await axios
    .create({ headers: { 'Content-Type': 'application/json' }})
    .get('http://localhost:8088/editoras');
  return data;
}

export async function getEditora(id: number) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
    .get(`http://localhost:8088/editoras/${id}`);
}

export async function postEditora(dados: Editora) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
    .post('http://localhost:8088/editoras', dados);
}

export function deleteEditora(id?: number) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
    .delete(`http://localhost:8088/editoras/${id}`);
}

export async function putEditora(dados: Editora) {
  return axios
    .create({ headers: { "Content-Type": "application/json" } })
    .put(`http://localhost:8088/editoras/${dados.idEditora}`, dados);
}
