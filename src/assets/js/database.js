export const connect = () => {
  var defaultDatabase = firebase.database();
  let refToData = defaultDatabase.ref();
  refToData.once("value", snapshot => {});
};

export const createAccountInDb = data => {
  var db = firebase.firestore();
  var id = db.collection("users").doc(data.uid);
  id.set(data)
    .then(() => {
      alert("Todo salio bien");
    })
    .catch(err => console.log(err));
};