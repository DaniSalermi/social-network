import { categoryChoose } from "./../js/category.js";

const containerFeedPost = document.getElementById("root2");

export const templateCategories = () => {
  containerFeedPost.innerHTML = "";
  const containerCategories = document.createElement("div");
  containerCategories.className = "containerCategories";
  let category = window.location.hash;
  console.log(category);
  category = category.split("/")[2];
  console.log(category);
  if (category === undefined) {
    const contentCategories = `   
    <header class="secondHeader">
    <a id="feedIcon" class="iconInputBack" href="#/feed"><img src="./assets/img/back.svg"  alt="boton para volver"/></a>
    <img src="./assets/img/second-header.png" class="imgSecondHeader" alt="logo migra.me"/>
    </header>
    <div class="space2"></div>
    <div class="categoryButtons">
        <button id="btnArriendo" class="btnCategories"><img src="./assets/img/arriendo.svg" class="categoriesImg"/><p>Arriendo</p></button>
        <button id="btnAlojamiento" class="btnCategories"><img src="./assets/img/alojamiento.svg" class="categoriesImg"/><p>Alojamiento</p></button>
        <button id="btnCultura" class="btnCategories"><img src="./assets/img/cultura.svg" class="categoriesImg"/><p>Cultura</p></button>
        <button id="btnGastronomia" class="btnCategories"><img src="./assets/img/gastronomia.svg" class="categoriesImg"/><p>Gastronomía</p></button>
        <button id="btnTrabajo" class="btnCategories"><img src="./assets/img/trabajo.svg" class="categoriesImg"/><p>Trabajo</p></button>
        <button id="btnTramites" class="btnCategories"><img src="./assets/img/tramites.svg" class="categoriesImg"/><p>Trámites</p></button>
    </div>
    `;

    containerCategories.innerHTML = contentCategories;

    const btnArriendo = containerCategories.querySelector("#btnArriendo");
    btnArriendo.addEventListener("click", () => {
      let category = "Arriendo";
      location.href = "#/categories/Arriendo";
      categoryChoose(category);
    });

    const btnAlojamiento = containerCategories.querySelector("#btnAlojamiento");
    btnAlojamiento.addEventListener("click", () => {
      let category = "Alojamiento";
      location.href = "#/categories/Alojamiento";
      categoryChoose(category);
    });

    const btnCultura = containerCategories.querySelector("#btnCultura");
    btnCultura.addEventListener("click", () => {
      let category = "Cultura";
      location.href = "#/categories/Cultura";
      categoryChoose(category);
    });

    const btnGastronomia = containerCategories.querySelector("#btnGastronomia");
    btnGastronomia.addEventListener("click", () => {
      let category = "Gastronomia";
      location.href = "#/categories/Gastronomia";
      categoryChoose(category);
    });

    const btnTrabajo = containerCategories.querySelector("#btnTrabajo");
    btnTrabajo.addEventListener("click", () => {
      let category = "Trabajo";
      location.href = "#/categories/Trabajo";
      categoryChoose(category);
    });

    const btnTramites = containerCategories.querySelector("#btnTramites");
    btnTramites.addEventListener("click", () => {
      let category = "Tramites";
      location.href = "#/categories/Tramites";
      categoryChoose(category);
    });

    return containerCategories;
  }
};
