export const templateMenu = () => {
  const containerMenu = document.createElement("div");
  containerMenu.classname = "containerMenu";
  let user = firebase.auth().currentUser;
  const contentMenu = `
    <footer class ="menuFooter">
    <a id="feedIcon" class="menuIcon" href="#/feed"><img src="assets/img/feedIcon.svg" alt="icono del muro del inicio"/></a>
    <a id="searchIcon" class="menuIcon" href="#/feed"><img src="assets/img/searchIcon.svg" alt="icono de busqueda"/></a>
    <a id="newPostIcon" class="menuIcon" href="#/post"><img src="assets/img/newPostIcon.svg" alt="icono de agregar post"/></a>
    <a id="categoryIcon" class="menuIcon" href="#/categories"><img src="assets/img/categoryIcon.svg" alt="icono de categorías"/></a>
    <a id="profileIcon" class="menuIcon" href="#/profile/${
      user ? user.email.split("@")[0] : ""
    }"><img src="assets/img/profileIcon.svg" alt="icono de perfil"/></a>
`;
  containerMenu.innerHTML = contentMenu;
  return containerMenu;
};
