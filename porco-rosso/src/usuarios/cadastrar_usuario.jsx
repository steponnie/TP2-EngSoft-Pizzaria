import { firebaseApp } from "../firebase/firebase_init";
import {
  getFirestore,
  collection,
  addDoc,
} from "firebase/firestore";

const db = getFirestore(firebaseApp);
// const usuariosCollectionRef = collection(db, 'usuarios');

async function criarDado(cpf, nome) {
    try {
      const user = await addDoc(collection(db, 'usuarios'), {
        cpf,
        nome,
      });

      console.log("dados salvos com sucessos", user);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

export { criarDado }
