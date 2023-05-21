import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyD06qdfCqd81ImMqRWB5dSx6h2JI9pOSEA",
  authDomain: "react-ecommerce-23.firebaseapp.com",
  projectId: "react-ecommerce-23",
  storageBucket: "react-ecommerce-23.appspot.com",
  messagingSenderId: "248482498255",
  appId: "1:248482498255:web:c9539f89c24a232f2b19ba"
};

const app = initializeApp(firebaseConfig);

export const getFireStoreApp= () => {
    return app
}