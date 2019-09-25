import {
  events,
  likeEvent
} from "./post.js";
let db = firebase.firestore();
const containerProfilePost = document.getElementById("root2");

export const profile = username => {
  username = username + "@";
  var docRef = db.collection("users");
  return docRef
    .orderBy("email")
    .startAt(username)
    .get()
    .then(result => {
      let doc = result.docs[0];
      if (doc.exists) {
        postProfile(doc.data().uid);
        return doc.data();
      } else {
        console.log("No such document!");
      }
    })
    .catch(error => {
      console.log("Error getting document:", error);
    });
};

export const postProfile = uid => {
  var docRef = db.collection("posts");
  return docRef.where("uid", "==", uid).onSnapshot(querySnapshot => {
    containerProfilePost.innerHTML = "";
    querySnapshot.forEach(doc => {
      containerProfilePost.innerHTML += `<main id = "templateWall" class="mainLoginCreate">
      <div class = "mainWallPost">
        <div class = "perfil">
          <div class = "avatarPost">
            <img src=${
              doc.data().photo ? doc.data().photo : "./assets/img/person.svg"
            } alt="avatar user"/>
          </div>
          <div>
            <h2 class="authorName"><a href="#/profile/${doc.data().username}">${
        doc.data().authorName
      }</a></h2>
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
    return containerProfilePost;
  });
};

export const addToContacts = id => {
  firebase.auth().onAuthStateChanged(user => {
    let docRef = db.collection("users").doc(user.uid);
    docRef.get().then(e => {
      let contacts = e.data().contacts;
      contacts.push(id);
      docRef
        .update({
          contacts: contacts
        })
        .then(e => {
          console.log(e);
        });
    });
  });
};

export const removeFromContacts = id => {
  firebase.auth().onAuthStateChanged(user => {
    let docRef = db.collection("users").doc(user.uid);
    docRef.get().then(res => {
      let contacts = res.data().contacts;
      let idPosition = contacts.indexOf(id);
      contacts.splice(idPosition, 1);
      docRef
        .update({
          contacts: contacts
        })
        .then(e => {
          console.log(e);
        });
    });
  });
};

export const getContacts = user => {
  let userRef = db.collection("users").where("uid", "==", user);
  return userRef.get().then(user => {
    return user.docs[0].data().contacts;
  });
};