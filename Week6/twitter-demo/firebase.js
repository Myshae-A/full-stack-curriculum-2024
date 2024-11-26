var admin = require("firebase-admin");

//var serviceAccount = require("./credentials.json");
import firebaseConfig from "./firebaseConfig.js";

admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig)
});

const db = admin.firestore();
module.exports = db;

export default db
