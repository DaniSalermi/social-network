import {
    events, likeEvent
  } from './post.js'

const containerCategoryPost = document.getElementById("root2");

export const categoryChoose = (category) => {
    let db = firebase.firestore();
    db.collection("posts").where("category", "==", category)
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                containerCategoryPost.innerHTML +=
                
                `<main id = "templateWall" class="mainLoginCreate">
                <div class = "mainWallPost">
                  <div class = "perfil">
                  <div class = "avatarPost">
                    <img src=${doc.data().photo} alt="avatar user"/>
                    </div>
                    <div>
                    <h2 class="authorName">${doc.data().authorName}</h2>
                      </div>
                    </div>
                    <div class="categoryPost">
                    <h2 id= "categoryPost${doc.id}">${doc.data().category}</h2>
                    <div class="buttonsEditPost">
                      <button class="actionButtonRegularPost littleButton" id='editPost${doc.id}'><img src="./assets/img/edit.svg" alt="editar post"><p class="postEventsEdit">Editar</p></button>
                      <button class="actionButtonRegularPost littleButton" id='deletePost${doc.id}'><img src="./assets/img/close.svg" alt="eliminar post"><p class="postEventsEdit">Eliminar</p></button>
                      <button class="actionButtonRegularPost littleButton" id='savePost${doc.id}' style="display:none"><img src="./assets/img/save.svg" alt="guardar post"><p class="postEventsEdit">Guardar</p></button>
                      </div>
                      </div>
                    <div class="buttonsPost">
                      <p id = "messagePost${doc.id}" name="postTxtWallFinal" class="txtStylePost">${doc.data().message}</p>
                      <textarea id = "editTextPost${doc.id}" name="postTxtWallFinal" class="txtAreaStylePost" cols="40" rows="2" style="display:none"></textarea>
                    </div>
                      <div class="buttonsPost">     
                      <button class="actionButtonRegularPost littleButton" id='likePost${doc.id}'><img src="./assets/img/unlike.svg" alt="like post"><p class="postEventsDescrip">${doc.data().like.length} Me gusta</p></button>
                      <button class="actionButtonRegularPost littleButton" id='ComentPost'><img src="./assets/img/coment.svg" alt="coment post"><p class="postEventsDescrip">Comentarios</p></button>
                    </div>
                    </div>
                </main>`
        
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.data().category)
                console.log(doc.id, " => ", doc.data());
            })

            querySnapshot.forEach((doc) => {
                events(doc);
                likeEvent(doc);
              })
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        })
        
    };