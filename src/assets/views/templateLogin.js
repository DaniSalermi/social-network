import {
  loginGoogle,
  loginFacebook,
  loginWithEmail
} from "./../js/auth.js";
const containerFeedPost = document.getElementById("root2");
export const templateLogin = () => {
  containerFeedPost.innerHTML = "";
  const containerLogin = document.createElement("div");
  containerLogin.className = "containerLogin";
  const contentLogin = `<header>
  <img src="./assets/img/first-header.png" class="imgFirstHeader" alt="iconografia razas del mundo / logo"/>
  </header>

  <main class="mainLoginCreate">
    <h1 class="principalHeader">Inicia sesión</h1>
    <p class="secondaryText">Ingresa tu correo electrónico y contraseña para ingresar a migra.me.</p>
    <form id="formLogin" class="createAccountLoginFormulary">
      <span class="iconInput"> 
        <img src="./assets/img/email.svg" alt="icono email"/>
        <input autocomplete class="inputFormulary" type="email" name="email" placeholder="Correo electrónico">
      </span>
      <span class="iconInput">
        <img src="./assets/img/password.svg" alt="icono contraseña"/>
        <input autocomplete class="inputFormulary" type="password" name="password" placeholder="Contraseña">
      </span>
    </form> 

    <button class="actionButtonRegular" id='login'>Iniciar sesión</button>
    <button class="signInGoogleFacebookButton" id='loginGg'><img src="./assets/img/google.svg" alt="logo google" width="19"/>Iniciar con Google</button>
    <button class="signInGoogleFacebookButton" id='loginFb'><img src="./assets/img/facebook.svg" alt="logo facebook" width="19"/>Iniciar con Facebook</button>
  </main>
  <footer class="footerLoginCreate">
    <h6>¿Aún no estás registrado? <a href="#/signUp">Crea tu cuenta</a></h6>
    <h6>¿Olvidaste tu contraseña? <a href="#/resetPassword">Recuérdala</a></h6>
  </footer>`;

  containerLogin.innerHTML = contentLogin;

  const btnLogin = containerLogin.querySelector("#login");
  btnLogin.addEventListener("click", () => {
    const email = document.querySelector("input[name=email]").value;
    const password = document.querySelector("input[name=password]").value;
    loginWithEmail(email, password);
  });

  const btnGoogle = containerLogin.querySelector("#loginGg");
  btnGoogle.addEventListener("click", () => {
    loginGoogle();
  });

  const btnFacebook = containerLogin.querySelector("#loginFb");
  btnFacebook.addEventListener("click", () => {
    loginFacebook();
  });
  return containerLogin;
};