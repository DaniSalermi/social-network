<< << << < HEAD
import {
  observer
} from "./auth.js"; ===
=== =
import {
  observer
} from "./auth.js"; >>>
>>> > b823e97e6411818b2867d40f696edd630fa20ff4

const containerFeedPost = document.getElementById("root2");
let date = new Date();

// funcion para crear posts
export const createPost = () => {
    let db = firebase.firestore();
    observer();
    //guardamos os valores elijidos por el usuario
    let postCategory = document.querySelector("select[name=slctCategory]").value;
    let postMesage = document.querySelector("textarea[name=postTxt]").value;
    //usamos esta funcion para obtener uid de usuario corriente
    firebase.auth().onAuthStateChanged(user => {
          if (validatePost(postMesage)) {
            db.collection("posts")
              .add({
                uid: user.uid,
                authorName: user.displayName,
                username: user.email.split("@")[0],
                photo: user.photoURL,
                date: date,
                category: postCategory,
                message: postMesage,
                like: []
              }) <<
              << << < HEAD
              .then(function (doc) {
                window.location.hash = "#/feed";
                readPost();
              })
              .catch(function (error) {
                  ===
                  === =
                  .then(function (doc) {
                      window.location.hash = "#/feed";
                      readPost();
                    })
                    .catch(function (error) {
                      >>>
                      >>> > b823e97e6411818b2867d40f696edd630fa20ff4
                      console.error("Error adding document: ", error);
                    });
                } else {
                  alert("Ingrese una información valida para publicar");
                }
              });
        };

        export const readPost = () => {
          let db = firebase.firestore();

          if (firebase.auth().currentUser) {
            db.collection("posts").onSnapshot(querySnapshot => {
              containerFeedPost.innerHTML = "";
              let actualUrl = window.location.hash;
              if (actualUrl === "#/feed") {
                querySnapshot.forEach(doc => {
                  containerFeedPost.innerHTML += `<main id = "templateWall" class="mainLoginCreate">
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
                });
                querySnapshot.forEach(doc => {
                  events(doc);
                  likeEvent(doc);
                });
              }
            });
          }
          return containerFeedPost;
        };

        //funcion para los eventos dentro de los posts
        export const events = doc => {
          if (firebase.auth().currentUser) {
            if (firebase.auth().currentUser.uid === doc.data().uid) {
              const btnDeletePost = document.getElementById("deletePost" + doc.id);
              btnDeletePost.addEventListener("click", () => {
                deletePost(doc.id);
              });
              const btnEditPost = document.getElementById("editPost" + doc.id);
              btnEditPost.addEventListener("click", () => {
                editPost(doc.id);
              });
            } else {
              document.getElementById(`editPost${doc.id}`).style.display = "none";
              document.getElementById(`deletePost${doc.id}`).style.display = "none";
            }
          }
        };
        export const likeEvent = doc => {
          if (firebase.auth().currentUser) {
            if (doc.data().like.includes(firebase.auth().currentUser.uid)) {
              // dislike
              const btnLikePost = document.getElementById("likePost" + doc.id);
              btnLikePost.addEventListener("click", () => {
                unlikePost(doc.id, doc.data().like);
                document.getElementById("likePost" + doc.id).style.color = "#ff637d";
              });
            } else {
              //like
              const btnLikePost = document.getElementById("likePost" + doc.id);
              btnLikePost.addEventListener("click", () => {
                likePost(doc.id, doc.data().like);
                document.getElementById("likePost" + doc.id).style.color = "#ffffff";
              });
            }
          }
        };

        // BORRAR POSTS
        export const deletePost = id => {
            let db = firebase.firestore();
            if (confirm("¿Seguro que quieres borrar tu publicación?")) {
              db.collection("posts")
                .doc(id)
                .delete() <<
                << << < HEAD
                .then(function () {
                  containerFeedPost.innerHTML = "";
                  readPost();
                })
                .catch(function (error) {
                    ===
                    === =
                    .then(function () {
                        containerFeedPost.innerHTML = "";
                        readPost();
                      })
                      .catch(function (error) {
                        >>>
                        >>> > b823e97e6411818b2867d40f696edd630fa20ff4
                        console.error("Error removing document: ", error);
                      });
                  }
                };

              // EDITAR POSTS
              export const editPost = id => {
                let db = firebase.firestore();
                db.collection("posts")
                  .doc(id)
                  .get()
                  .then(doc => {
                    //obtener el mensaje del post
                    document.getElementById(
                      `editTextPost${doc.id}`
                    ).innerHTML = doc.data().message;
                    //aparece textArea para cambiar texto
                    document.getElementById(`editTextPost${doc.id}`).style.display = "flex";
                    //desaparece el P del mensaje
                    document.getElementById(`messagePost${doc.id}`).style.display = "none";
                    //escondemos el botón editar
                    document.getElementById(`editPost${doc.id}`).style.display = "none";
                    //escondemos boton de borrar
                    document.getElementById(`deletePost${doc.id}`).style.display = "none";
                    //mostrar botón guardar
                    document.getElementById(`savePost${doc.id}`).style.display = "flex";
                    //Evento que ocurre cuando se hace click en guardar
                    document
                      .getElementById("savePost" + doc.id)
                      .addEventListener("click", () => {
                        let post = document.getElementById(`editTextPost${doc.id}`).value;
                        //Se hace update del post en la base de datos
                        let docRef = db.collection("posts").doc(id);
                        return docRef
                          .update({
                            message: post
                          })
                          .then(() => {
                            document.getElementById(`messagePost${doc.id}`).style.display =
                              "flex";
                            document.getElementById(`editTextPost${doc.id}`).style.display =
                              "none";
                            document.getElementById(`deletePost${doc.id}`).style.display =
                              "flex";
                            document.getElementById(`editPost${doc.id}`).style.display =
                              "flex";
                            document.getElementById(`savePost${doc.id}`).style.display =
                              "none";
                          })
                          .catch(error => {
                            console.error(error);
                          });
                      });
                  });
              };

              export const likePost = (id, like) => {
                let db = firebase.firestore();
                firebase.auth().onAuthStateChanged(user => {
                  like.push(user.uid);
                  let docRef = db.collection("posts").doc(id);
                  return docRef
                    .update({
                      like: like
                    })
                    .then(e => {});
                });
              };

              export const unlikePost = (id, like) => {
                let db = firebase.firestore();
                firebase.auth().onAuthStateChanged(user => {
                  let idPosition = like.indexOf(user.uid);
                  like.splice(idPosition, 1);
                  let docRef = db.collection("posts").doc(id);
                  return docRef
                    .update({
                      like: like
                    })
                    .then(e => {});
                });
              };

              //Valida si el textArea del post esta vacio
              export const validatePost = postMesage => {
                if (postMesage === "" || postMesage.length < 2) {
                  return false;
                } else {
                  return true;
                } <<
                << << < HEAD
              }; ===
              === =
            }; >>>
            >>> > b823e97e6411818b2867d40f696edd630fa20ff4