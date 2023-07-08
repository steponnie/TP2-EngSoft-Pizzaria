import { firebaseApp } from "../FirebaseConfig/firebase_init";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const db = getFirestore(firebaseApp);

export async function criarDado(cpf, nome) {
  try {
    const user = await addDoc(collection(db, "usuarios"), {
      cpf,
      nome,
    });

    console.log("dados salvos com sucessos", user);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

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
      complemento: doc.data()["complemento"], });
    });
    console.log(pessoas)
    return pessoas;
  } catch (e) {
    console.log("Error getting cached document:", e);
  }
}


export async function cadastrarPessoa(usuario) {
  try {
    const user = await addDoc(collection(db, "usuarios"), usuario);
    console.log("dados salvos com sucessos", user);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}