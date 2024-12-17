var admin = require("firebase-admin");

var serviceAccount = require("./cred.json");
//import firebaseConfig from "./firebaseConfig.js";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// initializes the database
const db = admin.firestore();
module.exports = db;

//export default db // so this one line caused an error earlier
