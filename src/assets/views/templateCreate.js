import {
  createAccount
} from "./../js/auth.js";
import {
  loginGoogle,
  loginFacebook
} from "./../js/auth.js";
const containerFeedPost = document.getElementById("root2");
export const templateCreate = () => {
  containerFeedPost.innerHTML = "";
  const containerCreate = document.createElement("div");
  containerCreate.className = "containerCreate";
  const contentCreate = `<header>
  <img src="./assets/img/first-header.png" class="imgFirstHeader" alt="iconografia razas del mundo / logo"/>
  </header>

  <main class="mainLoginCreate">
    <h1 class="principalHeader">Crea tu cuenta</h1>
    <p class="secondaryText">Llena el siguiente formulario y únete a la comunidad de ayuda a inmigrantes más grande de Chile.</p>
    <form class="createAccountLoginFormulary">
      <span class="iconInput"> 
        <img src="./assets/img/person.svg" alt="icono persona"/>
        <input autocomplete class="inputFormulary" type="text" name="fullName" placeholder="Nombre y Apellido">
      </span>
      <span class="iconInput"> 
        <img src="./assets/img/email.svg" alt="icono email"/>
        <input autocomplete class="inputFormulary" type="email" name="email" placeholder="Correo electrónico">
      </span>
      <span class="iconInput">
        <img src="./assets/img/password.svg" alt="icono contraseña"/>
        <input autocomplete class="inputFormulary" type="password" name="password1" placeholder="Contraseña">
      </span>
      <span class="iconInput">
        <img src="./assets/img/password.svg" alt="icono contraseña"/>
        <input autocomplete class="inputFormulary" type="password" name="password2" placeholder="Confirma tu contraseña">
      </span>
    </form>
    <button class="actionButtonRegular" id="sign">Crear cuenta</button>
    <button class="signInGoogleFacebookButton" id="signGg"><img src="./assets/img/google.svg" alt="logo google" width="19"/>Continuar con Google</button>
    <button class="signInGoogleFacebookButton" id="signFb"><img src="./assets/img/facebook.svg" alt="logo facebook" width="19"/>Continuar con Facebook</button>
  </main>
  <footer class="footerLoginCreate">
    <h6>¿Ya estás registrado? <a href="#/login">Inicia sesión</a></h6>
  </footer>`;

  containerCreate.innerHTML = contentCreate;

  const btnSign = containerCreate.querySelector("#sign");
  btnSign.addEventListener("click", () => {
    createAccount();
  });

  const btnGoogle = containerCreate.querySelector("#signGg");
  btnGoogle.addEventListener("click", () => {
    loginGoogle();
  });

  const btnFacebook = containerCreate.querySelector("#signFb");
  btnFacebook.addEventListener("click", () => {
    loginFacebook();
  });
  return containerCreate;
};