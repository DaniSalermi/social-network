const containerFeedPost = document.getElementById("root2");
export const templateHome = () => {
  containerFeedPost.innerHTML = "";
  const containerHome = document.createElement("div");
  containerHome.className = "containerHome";
  const contentHome = `<header>
    <img src="./assets/img/first-header.png" class="imgFirstHeader" alt="iconografia razas del mundo / logo"/>
  </header>
  <main class="mainLoginCreate">
    <h1 class="principalHeader">Únete a la comunidad más grande de inmigrantes en Chile!</h1>
    <p class="secondaryText">El sitio más seguro para conectar con miles de personas alrededor de Chile, dispuestos a colaborar con un proceso de migración más tranquilo y asequible a todos.</p>
    <br>
    <p class="secondaryText marginBottom120">Con nuestro modelo de las 3 C's, tendrás acceso a miles de datos cada día, publicados directamente por la comunidad de inmigrantes en Chile, así como por chilenos dispuestos a ayudarte.</p>

    <button class="actionButtonRegular" id="goToLogin">Iniciar sesión</button>
    <button class="actionButtonRegular" id="goToCreate">Crear cuenta</button>
    </main>
    <section class="infoMigraMe">
      <div class="infoMigraMefeature">
        <img class="infoMigraMeImg" src="./assets/img/categorias.svg" alt="ilustración categorías">
        <h1 class="principalHeader">Categorías</h1>
        <p class="infoMigraMeText">Dentro de nuestra app podrás ver la información categorizada, así facilitamos tu búsqueda.</p>
      </div>
      <div class="infoMigraMefeature">
        <img class="infoMigraMeImg" src="./assets/img/comunidad.svg" alt="ilustración comunidad">
        <h1 class="principalHeader">Comunidad</h1>
        <p class="infoMigraMeText">Conecta con otras personas con datos de interés para tu proceso de inmigración.</p>
      </div>
      <div class="infoMigraMefeature">
        <img class="infoMigraMeImg" src="./assets/img/confidencialidad.svg" alt="ilustración confidencialidad">
        <h1 class="principalHeader">Confidencialidad</h1>
        <p class="infoMigraMeText">No estamos relacionados con entes gubernamentales, siéntete seguro de publicar y recibir los datos.</p>
      </div>
    </section>
  `;

  containerHome.innerHTML = contentHome;
  const goToLogin = containerHome.querySelector("#goToLogin");
  goToLogin.addEventListener("click", () => {
    location.href = "#/login";
  });
  const goToCreate = containerHome.querySelector("#goToCreate");
  goToCreate.addEventListener("click", () => {
    location.href = "#/signUp";
  });

  return containerHome;
};