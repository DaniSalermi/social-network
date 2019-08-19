import { templateLogin } from "./assets/views/templateLogin.js";
import { templateCreate } from "./assets/views/templateCreate.js";
import { templateFeed } from "./assets/views/templateFeed.js";
import { templateResetPassword } from "./assets/views/templateResetPassword.js";
import { templateSuccessCreate } from "./assets/views/templateSuccessCreate.js";
import { templateHome } from "./assets/views/templateHome.js";
import { templatePost } from "./assets/views/templatePost.js";
import { templateProfile } from "./assets/views/templateProfile.js";
import { templateMenu } from "./assets/views/templateMenu.js";
import { templateCategories } from "./assets/views/templateCategories.js";


const changeRouter = hash => {
  if (hash === "#/home") {
    return showTemplate(hash);
  }
  if (hash === "#/login") {
    return showTemplate(hash);
  }
  if (hash === "#/signUp") {
    return showTemplate(hash);
  }
  if (hash === "#/feed") {
    return showTemplate(hash);
  }
  if (hash === "#/resetPassword") {
    return showTemplate(hash);
  }
  if (hash === "#/successCreate") {
    return showTemplate(hash);
  }
  if (hash === "#/post") {
    return showTemplate(hash);
  }
  if (hash === "#/editPost") {
    return showTemplate(hash);
  }
  if (hash.includes("#/profile")) {
    let template = "#/profile";
    return showTemplate(template);
  }
  if (hash === "#/categories") {
    return showTemplate(hash);
  }
  if (hash === "#/category") {
    return showTemplate(hash);
  }
};

const showTemplate = hash => {
  const router = hash.substring(2);
  const containerRoot = document.getElementById("root");
  containerRoot.innerHTML = "";
  const containerRoot2 = document.getElementById("root2");
  containerRoot2.innerHTML = "";
  switch (router) {
    case "home":
      containerRoot.appendChild(templateHome());
      break;
    case "login":
      containerRoot.appendChild(templateLogin());
      break;
    case "signUp":
      containerRoot.appendChild(templateCreate());
      break;
    case "feed":
      containerRoot.appendChild(templateFeed());
      containerRoot.appendChild(templateMenu());
      break;
    case "resetPassword":
      containerRoot.appendChild(templateResetPassword());
      break;
    case "successCreate":
      containerRoot.appendChild(templateSuccessCreate());
      break;
    case "post":
      containerRoot.appendChild(templatePost());
      containerRoot.appendChild(templateMenu());
      break;
    case "editPost":
      containerRoot.appendChild(templateEditPost());
      containerRoot.appendChild(templateMenu());
      break;
    case "profile":
      containerRoot.appendChild(templateProfile());
      containerRoot.appendChild(templateMenu());
      break;
    case "categories":
      containerRoot.appendChild(templateCategories());
      containerRoot.appendChild(templateMenu());
      break;
    default:
      containerRoot.innerHTML = `<p>Error 404</p>`;
  }
};

export const initRouter = () => {
  window.addEventListener("load", changeRouter(window.location.hash));
  if ("onhashchange" in window) {
    window.onhashchange = () => {
      changeRouter(window.location.hash);
    };
  }
};
