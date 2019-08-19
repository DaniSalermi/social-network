import {
  connect
} from "./database.js";
import {
  createAccountInDb
} from "./../js/database.js";

export const loginGoogle = () => {
  let db = firebase.firestore();
  connect();
  //codigo retirado del firestore
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(res => {
      //constante copiada desde firebase auth login con google
      const user = res.user;
      let userName = user.displayName;
      // obtener documentos desde firestore de collecion users con uid de usuario corriente
      db.collection("users")
        .doc(user.uid)
        .get()

        .then(function (doc) {

          // si documento existe entramos en el muro
          if (doc.exists) {
            alert("Has iniciado sesión con exito");
            window.location.hash = "#/feed";
          } else {
            //si no existe lo vamos a crear con uid de usuario
            saveUserToDatabaseAfterLogin(user, userName);
            alert("Has iniciado sesión con exito");
            window.location.hash = "#/feed";
          }
        });
    })
    .catch(err => {
      alert("Hube un error", err);
      window.location.hash = "#/login";
    });
};

//vay guardar usuario en la base de datos despues de logarse
export const saveUserToDatabaseAfterLogin = (user, userName) => {
  let date = new Date();
  let db = firebase.firestore();
  //Convertir las informaciones de google en um objecto
  db.collection("users")
    .doc(user.uid)
    .set({
      email: user.email,
      displayName: userName,
      photo: user.photoURL,
      uid: user.uid,
      contacts: []
    });
};

export const loginFacebook = () => {
  let db = firebase.firestore();
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(res => {
      const user = res.user;
      let userName = user.displayName;
      // obtener documentos desde firestore de collecion users con uid de usuario corriente
      db.collection("users")
        .doc(user.uid)
        .get()
        .then(function (doc) {
          // si documento existe entramos en el muro
          if (doc.exists) {
            alert("Has iniciado sesión con exito");
            window.location.hash = "#/feed";
          } else {
            //si no existe lo vamos a crear con uid de usuario
            saveUserToDatabaseAfterLogin2(user, userName);
            alert("Has iniciado sesión con exito");
            window.location.hash = "#/feed";
          }
        });
    })
    .catch(err => {
      alert("Hube un error", err);
      window.location.hash = "#/login";
    });
};

//vay guardar usuario en la base de datos despues de logarse
const saveUserToDatabaseAfterLogin2 = (user, userName) => {
  let db = firebase.firestore();
  //Convertir las informaciones de google en um objecto
  db.collection("users")
    .doc(user.uid)
    .set({
      email: user.email,
      displayName: userName,
      photo: user.photoURL,
      uid: user.uid,
      contacts: []
    });
};

const createAccountEmail = (userdata, secret) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(userdata.email, secret.password1)
    .then(res => {
      const user = res.user;
      userdata.uid = user.uid;
      createAccountInDb(userdata);
      verifyEmail();
      firebase.auth().currentUser.updateProfile({
        displayName: userdata.displayName
      });
      location.href = "#/successCreate";
    })
    .catch(err => {
      alert("Hube un error", err);
      window.location.hash = "#/login";
    });
};

export const createAccount = () => {
  let {
    secret,
    userdata
  } = getData();
  if (
    secret.password1 &&
    secret.password2 &&
    userdata.email &&
    userdata.displayName &&
    secret.password1 === secret.password2
  ) {
    createAccountEmail(userdata, secret);
  } else {
    alert("Contraseñas no coinciden");
  }
};

export const loginWithEmail = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(res => {
      if (res.user.emailVerified) {
        location.href = "#/feed";
      } else {
        alert("Debes verificar tu correo electrónico antes de logearte");
        location.href = "#/login";
      }
    })
    .catch(error => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
};

export const observer = () => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      location.href = "#/login";
      // User is signed out.
      // console.log("no hay usuario activo");
    }
  });
};

const getData = () => {
  let userdata = {};
  let secret = {};
  userdata.displayName = document.querySelector("input[name=fullName]").value;
  userdata.email = document.querySelector("input[name=email]").value;
  userdata.contacts = [];
  secret.password1 = document.querySelector("input[name=password1]").value;
  secret.password2 = document.querySelector("input[name=password2]").value;
  return {
    secret,
    userdata
  };
};

const verifyEmail = () => {
  var user = firebase.auth().currentUser;

  user
    .sendEmailVerification()
    .then(function () {
      // Email sent.
    })
    .catch(function (error) {
      // An error happened.
    });
};

export const rememberPassword = () => {
  var auth = firebase.auth();
  var emailAddress = document.querySelector("input[name=email]").value;

  auth
    .sendPasswordResetEmail(emailAddress)
    .then(function () {
      alert("Correo de reestablecimiento de contraseña enviado");
      location.href = "#/login";
    })
    .catch(function (error) {
      // An error happened.
    });
};

export const signOutAccount = () => {
  firebase
    .auth()
    .signOut()
    .then(function () {
      // Sign-out successful.
      location.href = "#/login";
    })
    .catch(function (error) {
      // An error happened.
    });
};