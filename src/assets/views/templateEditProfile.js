export const templateEditProfile = () => {
  const containerCreate = document.createElement("div");
  containerCreate.className = "containerCreate";
  //todo ver como traigo los datos que ya tiene el usuario en la base de datos.
  const contentCreate = `<img src="./assets/img/people.png" alt="iconografia razas del mundo" />
      <h1 class="principalHeader" >Crea tu cuenta</h1>
      <p class="secundaryText">Llena el siguiente formulario y únete a la comunidad de ayuda a inmigrantes más grande de Chile.</p>
      <form>
        <input autocomplete class="formularyText" type="text" name="name" placeholder="Nombre">
        <input autocomplete class="formularyText" type="text" name="lastname" placeholder="Apellido">
        <input autocomplete class="formularyText" type="email" name="email" placeholder="Correo electrónico">
        <input autocomplete class="formularyText" type="password" name="password1" placeholder="Contraseña">
        <input autocomplete class="formularyText" type="password" name="password2" placeholder="Confirma tu contraseña">
        <label for="dateOfBirth">Fecha de nacimiento</label>
        <input class="" type="date" name"dateOfBirth" id="dateOfBirth">
        <select name="gender">
          <option value="female">Femenino</option>
          <option value="male">Masculino</option>
          <option value="none">Prefiero no decir</option>
        </select>
        <select name="countryOfBirth">
          <option value="argentina">Argentina</option>
          <option value="brasil">Brasil</option>
          <option value="colombia">Colombia</option>
          <option value="ecuador">Ecuador</option>
          <option value="haití">Haití</option>
          <option value="mexico">México</option>
          <option value="panama">Panamá</option>
          <option value="peru">Perú</option>
          <option value="venezuela">Venezuela</option>
        </select>
        <input class="formularyText" type="text" name="profession" placeholder="Profesión">
        <textarea name="bio" class="bioForm" cols="30" rows="10" placeholder="Cuéntanos un poco de ti"></textarea>   
      </form>
       
      <button id="sign">Regístrate</button>
      <button id="signGg">Crear con Google</button>
      <button id="signFb">Crear con Facebook</button>`;

  containerCreate.innerHTML = contentCreate;

  //todo Cambiar los botones por editar y cancelar!//
  const btnSign = containerCreate.querySelector("#sign");
  btnSign.addEventListener("click", () => {
    createAccount();
  });

  const btnGoogle = containerCreate.querySelector("#signGg");
  btnGoogle.addEventListener("click", () => {
    loginGoogle();
  });

  return containerCreate;
};
