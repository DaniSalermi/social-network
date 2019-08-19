//importar funcion que crea post
import { createPost } from "../js/post.js";
import { observer } from "./../js/auth.js";

// import { saveUserToDatabaseAfterLogin } from "./../js/auth.js";
const containerFeedPost = document.getElementById("root2");
export const templatePost = () => {
  observer();
  containerFeedPost.innerHTML = "";
  let actualUser = firebase.auth().currentUser;
  const containerPost = document.createElement("div");
  containerPost.className = "containerPost";

  const contentPost = `
    <header class="secondHeader">
      <a id="feedIcon" class="iconInputBack" onclick="window.history.back()"><img src="./assets/img/back.svg"  alt="boton para volver"/></a>
      <img src="./assets/img/second-header.png" class="imgSecondHeader" alt="logo migra.me"/>
    </header>
    <main id = "templatePost" class="mainPost">
      <div class="tittlePost">
        <h1 class="secondarytextPost">Nueva publicación</h1>
      </div>
      <div class = "perfil">
      <div class = "avatarPostTemp">
        <img src="${
          actualUser.photoURL
        }" class="avatarPostTemp img" alt="avatar user"/>
        </div>
        <h2 class="avatarName">${actualUser.displayName}</h2>
        </div>
        <form class="formPost"> 
        <span class="iconInput1"> 
       <img src="./assets/img/categoryIconslct.svg" alt="icono categoria">
       <select name="slctCategory" id= "slctCategory" class="slct-box">
       <option disabled selected value>Categorias</option> 
       <option value="Alojamiento">Alojamiento</option>
       <option value="Arriendo">Arriendo</option>
       <option value="Cultura">Cultura</option>
       <option value="Gastronomia">Gastronomia</option>
       <option value="Trabajo">Trabajo</option>
       <option value="Tramites">Trámites/option>
       </select>
        </span>
          <textarea name="postTxt" class="txtAreaStyle" cols="40" rows="10" placeholder="¿Tienes algún dato?"></textarea>
          </form> 
            <button id='post' class="actionButtonRegular">Publicar</button>
            </main>`;
  containerPost.innerHTML = contentPost;

  const btnPost = containerPost.querySelector("#post");
  btnPost.addEventListener("click", () => {
    createPost();
  });
  return containerPost;
};
