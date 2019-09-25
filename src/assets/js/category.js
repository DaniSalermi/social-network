import {
  events,
  likeEvent
} from "./post.js";

const containerCategoryPost = document.getElementById("root2");

export const categoryChoose = category => {
  let db = firebase.firestore();
  db.collection("posts")
    .where("category", "==", category)
    .get()
    .then(function (querySnapshot) {
      let user = firebase.auth().currentUser;
      containerCategoryPost.innerHTML += `   
      <header class="secondHeader">
      <a id="feedIcon" class="iconInputBack" onclick="window.history.back()">
          <img src="./assets/img/back.svg"  alt="boton para volver"/>
        </a>
      <img src="./assets/img/second-header.png" class="imgSecondHeader" alt="logo migra.me"/>
      </header> 
      <div class="space"></div>
      <footer class ="menuFooter">
      <a id="feedIcon" class="menuIcon" href="#/feed"><img src="assets/img/feedIcon.svg" alt="icono del muro del inicio"/></a>
      <a id="searchIcon" class="menuIcon" href="#/feed"><img src="assets/img/searchIcon.svg" alt="icono de busqueda"/></a>
      <a id="newPostIcon" class="menuIcon" href="#/post"><img src="assets/img/newPostIcon.svg" alt="icono de agregar post"/></a>
      <a id="categoryIcon" class="menuIcon" href="#/categories"><img src="assets/img/categoryIcon.svg" alt="icono de categorías"/></a>
      <a id="profileIcon" class="menuIcon" href="#/profile/${
        user ? user.email.split("@")[0] : ""
      }"><img src="assets/img/profileIcon.svg" alt="icono de perfil"/></a>`;
      querySnapshot.forEach(function (doc) {
        containerCategoryPost.innerHTML += `
        <main id = "templateWall" class="mainLoginCreate">
                <div class = "mainWallPost">
                  <div class = "perfil">
                  <div class = "avatarPost">
                <img src=${
                  doc.data().photo
                    ? doc.data().photo
                    : "./assets/img/person.svg"
                } alt="avatar user"/>
              </div>
                    <div>
                    <h2 class="authorName"><a href="#/profile/${
                      doc.data().username
                    }">${doc.data().authorName}</a></h2>
                      </div>
                    </div>
                    <div class="categoryPost">
                    <h2 id= "categoryPost${doc.id}">${doc.data().category}</h2>
                    <div class="buttonsEditPost">
                      <button class="actionButtonRegularPost littleButton" id='editPost${
                        doc.id
                      }'><img src="./assets/img/edit.svg" alt="editar post"><p class="postEventsEdit">Editar</p></button>
                      <button class="actionButtonRegularPost littleButton" id='deletePost${
                        doc.id
                      }'><img src="./assets/img/close.svg" alt="eliminar post"><p class="postEventsEdit">Eliminar</p></button>
                      <button class="actionButtonRegularPost littleButton" id='savePost${
                        doc.id
                      }' style="display:none"><img src="./assets/img/save.svg" alt="guardar post"><p class="postEventsEdit">Guardar</p></button>
                      </div>
                      </div>
                    <div class="buttonsPost">
                      <p id = "messagePost${
                        doc.id
                      }" name="postTxtWallFinal" class="txtStylePost">${
          doc.data().message
        }</p>
                      <textarea id = "editTextPost${
                        doc.id
                      }" name="postTxtWallFinal" class="txtAreaStylePost" cols="40" rows="2" style="display:none"></textarea>
                    </div>
                      <div class="buttonsPost">     
                      <button class="actionButtonRegularPost littleButton" id='likePost${
                        doc.id
                      }'><img src="./assets/img/unlike.svg" alt="like post"><p class="postEventsDescrip">${
          doc.data().like.length
        } Me gusta</p></button>
                      <button class="actionButtonRegularPost littleButton" id='ComentPost'><img src="./assets/img/coment.svg" alt="coment post"><p class="postEventsDescrip">Comentarios</p></button>
                    </div>
                    </div>
                </main>`;
        console.log(doc.data().category);
        console.log(doc.id, " => ", doc.data());
      });

      querySnapshot.forEach(doc => {
        events(doc);
        likeEvent(doc);
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
};