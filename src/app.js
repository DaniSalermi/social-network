import { initRouter } from "./route.js";
import { observer } from "./assets/js/auth.js";

const init = () => {
  firebase.auth().onAuthStateChanged(e => initRouter());
};

window.addEventListener("load", init);
