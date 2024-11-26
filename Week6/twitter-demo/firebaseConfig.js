import dotenv from 'dotenv';
dotenv.config();

const firebaseConfig = {
  "type": "service_account",
  "project_id": process.enc.FIREBASE_PROJECT_ID,
  "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
  "private_key": process.env.FIREBASE_PRIVATE_KEY,
    "client_email": "firebase-adminsdk-y5dr8@fir-f4082.iam.gserviceaccount.com",
  "client_id": "101931345504340387988",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-y5dr8%40fir-f4082.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}

export default firebaseConfig;