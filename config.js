import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
  const firebaseConfig = {
    apiKey: "AIzaSyCmmGciID6-hQuMd-gIdOAK1irZvJV3jrI",
    authDomain: "projeto71-7d164.firebaseapp.com",
    projectId: "projeto71-7d164",
    storageBucket: "projeto71-7d164.appspot.com",
    messagingSenderId: "779204800377",
    appId: "1:779204800377:web:89a5e7386ac7dc02acc9a8"
  }
  
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
