import { observer } from "./../js/auth.js";
import { readPost } from "../js/post.js";

export const templateFeed = () => {
  observer();
  readPost();
  const containerFeed = document.createElement("div");
  containerFeed.className = "containerFeed";
  const contentFeed = `<header class="secondHeader">
<a id="feedIcon" class="iconInputBack" onclick="window.history.back()"><img src="./assets/img/back.svg"  alt="boton para volver"/></a>
<img src="./assets/img/second-header.png" class="imgSecondHeader" alt="logo migra.me"/>
</header>`;
  containerFeed.innerHTML = contentFeed;
  return containerFeed;
};