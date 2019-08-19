import {
    categoryChoose
  } from "./../js/category.js";

const containerFeedPost = document.getElementById("root2");

export const templateCategories = () => {
    containerFeedPost.innerHTML = "";
    const containerCategories = document.createElement("div");
    containerCategories.className = "containerCategories";
    const contentCategories = 
`   
<header class="secondHeader">
<a id="feedIcon" class="iconInputBack" href="#/feed"><img src="./assets/img/back.svg"  alt="boton para volver"/></a>
<img src="./assets/img/second-header.png" class="imgSecondHeader" alt="logo migra.me"/>
</header>

    <button id="btnArriendo" class="btnCategories"><img src="./assets/img/arriendo.svg" class="categoriesImg"/><p>Arriendo</p></button>
    <button id="btnAlojamiento" class="btnCategories"><img src="./assets/img/alojamiento.svg" class="categoriesImg"/><p>Alojamiento</p></button>
    <button id="btnCultura" class="btnCategories"><img src="./assets/img/cultura.svg" class="categoriesImg"/><p>Cultura</p></button>
    <button id="btnGastronomia" class="btnCategories"><img src="./assets/img/gastronomia.svg" class="categoriesImg"/><p>Gastronomía</p></button>
    <button id="btnTrabajo" class="btnCategories"><img src="./assets/img/trabajo.svg" class="categoriesImg"/><p>Trabajo</p></button>
    <button id="btnTramites" class="btnCategories"><img src="./assets/img/tramites.svg" class="categoriesImg"/><p>Trámites</p></button>
`

    containerCategories.innerHTML = contentCategories;

    const btnArriendo = containerCategories.querySelector("#btnArriendo");
    btnArriendo.addEventListener("click", () => {
    let category = 'Arriendo';
    categoryChoose(category);
    });

    const btnAlojamiento = containerCategories.querySelector("#btnAlojamiento");
    btnAlojamiento.addEventListener("click", () => {
    let category = 'Alojamiento';
    categoryChoose(category);
    });
    
    const btnCultura = containerCategories.querySelector("#btnCultura");
    btnCultura.addEventListener("click", () => {
    let category = 'Cultura';
    categoryChoose(category);
    });

    const btnGastronomia = containerCategories.querySelector("#btnGastronomia");
    btnGastronomia.addEventListener("click", () => {
    let category = 'Gastronomia';
    categoryChoose(category);
    });
 
    const btnTrabajo = containerCategories.querySelector("#btnTrabajo");
    btnTrabajo.addEventListener("click", () => {
    let category = 'Trabajo';
    categoryChoose(category);
    });

    const btnTramites = containerCategories.querySelector("#btnTramites");
    btnTramites.addEventListener("click", () => {
    let category = 'Tramites de visa';
    categoryChoose(category);
    });

    return containerCategories;
};