import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAnaxCoCcoBZlBt-IKBh4U4rI0o-NP7ab4",
  authDomain: "whatsappclone-4b35d.firebaseapp.com",
  projectId: "whatsappclone-4b35d",
  storageBucket: "whatsappclone-4b35d.appspot.com",
  messagingSenderId: "863840917549",
  appId: "1:863840917549:web:4bcb1fe2f61168bcf800a4",
  measurementId: "G-7S5K489FHP",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
