import { firebaseApp } from "../FirebaseConfig/firebase_init";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const db = getFirestore(firebaseApp);

export async function consultarBairros() {
  try {
    let bairros = [];
    const querySnapschot = await getDocs(collection(db, "bairros"));
    querySnapschot.forEach((doc) => {
      bairros.push({ id: doc.id, nome: doc.data()["nome"] });
    });
    return bairros;
  } catch (e) {
    console.log("Error getting cached document:", e);
  }
}

export async function consultarPessoa() {
  try {
    let pessoas = [];
    const querySnapschot = await getDocs(collection(db, "usuarios"));
    querySnapschot.forEach((doc) => {
      pessoas.push({
        nome: doc.data()["nome"],
        dataNascimento: doc.data()["dataNascimento"],
        telefone: doc.data()["telefone"],
        email: doc.data()["email"],
        senha: doc.data()["senha"],
        rua: doc.data()["rua"],
        bairro: doc.data()["bairro"],
        numero: doc.data()["numero"],
        cep: doc.data()["cep"],
        complemento: doc.data()["complemento"],
      });
    });
    return pessoas;
  } catch (e) {
    console.log("Error getting cached document:", e);
  }
}

export async function cadastrarPessoa(usuario) {
  try {
    const user = await addDoc(collection(db, "usuarios"), usuario);
    console.log("Sucess", user);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function cadastrarPedido(pedido) {
  try {
    const doc = await addDoc(collection(db, "pedidos"), pedido);
    console.log("Sucess", doc);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function consultarPizza() {
  try {
    let pizza = [];
    const querySnapschot = await getDocs(collection(db, "sabor_pizzas"));
    querySnapschot.forEach((doc) => {
      pizza.push({
        preco: doc.data()["preco"],
        sabor: doc.data()["sabor"],
      });
    });
    return pizza;
  } catch (e) {
    console.log("Error getting cached document:", e);
  }
}

export async function consultarBebida() {
  try {
    let bebida = [];
    const querySnapschot = await getDocs(collection(db, "bebida"));
    querySnapschot.forEach((doc) => {
      bebida.push({
        preco: doc.data()["preco"],
        bebida: doc.data()["bebida"],
      });
    });
    return bebida;
  } catch (e) {
    console.log("Error getting cached document:", e);
  }
}
