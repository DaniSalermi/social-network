import {
  rememberPassword
} from "./../js/auth.js";

const containerFeedPost = document.getElementById("root2");
export const templateResetPassword = () => {
  containerFeedPost.innerHTML = "";
  const containerResetPassword = document.createElement("div");
  containerResetPassword.className = "containerReset";
  const contentResetPass = `<header>
  <img src="./assets/img/first-header.png" class="imgFirstHeader" alt="iconografia razas del mundo / logo"/>
  </header>

  <main class="mainLoginCreate">
    <h1 class="principalHeader">Recupera tu contraseña</h1>
    <p class="secondaryText">Ingresa tu correo electrónico y enviaremos un correo a tu bandeja de entrada para restablecer tu contraseña</p>
    <form class="createAccountLoginFormulary">
      <span class="iconInput"> 
        <img src="./assets/img/email.svg" alt="icono email"/>
        <input autocomplete class="inputFormulary" type="email" name="email" placeholder="Correo electrónico">
      </span>
    </form>
    <button class="actionButtonRegular" id="resetPassword">Restablecer contraseña</button>
  </main>`;

  containerResetPassword.innerHTML = contentResetPass;

  const btnResetPassword = containerResetPassword.querySelector(
    "#resetPassword"
  );
  btnResetPassword.addEventListener("click", () => {
    rememberPassword();
  });
  return containerResetPassword;
};