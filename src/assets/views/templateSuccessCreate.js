export const templateSuccessCreate = () => {
  const containerSuccessCreate = document.createElement("div");
  containerSuccessCreate.className = "containerSuccessCreate";
  const contentSuccessCreate = `
  <header>
    <img src="./assets/img/first-header.png" class="imgFirstHeader" alt="iconografia razas del mundo / logo"/>
  </header>

  <main class="mainLoginCreate">
    <h1 class="principalHeader">Cuenta creada con éxito</h1>
    <p class="secondaryText">¡Listo! Tu cuenta ha sido creada con éxito. 
    </p>
    <p class=""secondaryText">Te hemos enviado un correo electrónico, ve a tu bandeja de entrada, sigue el enlace para verificar tu correo y poder disfrutar de migra.me.</p>

    <button class="actionButtonRegular" id='backToLoginBtn'>Volver al login</button>
  </main>
  `;
  containerSuccessCreate.innerHTML = contentSuccessCreate;
  const btnBackToLogin = containerSuccessCreate.querySelector(
    "#backToLoginBtn"
  );
  btnBackToLogin.addEventListener("click", () => {
    location.href = "#/login";
  });
  return containerSuccessCreate;
};
