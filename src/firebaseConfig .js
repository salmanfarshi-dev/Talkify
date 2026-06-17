
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCprQPpFvyG5SJJV7VeZaToRTPrqyqkSlQ",
  authDomain: "device-streaming-fabfafcc.firebaseapp.com",
  databaseURL: "https://device-streaming-fabfafcc-default-rtdb.firebaseio.com",
  projectId: "device-streaming-fabfafcc",
  storageBucket: "device-streaming-fabfafcc.firebasestorage.app",
  messagingSenderId: "717943196192",
  appId: "1:717943196192:web:ebc69f4f37fc3f6eb88a45"
};

const app = initializeApp(firebaseConfig);

export default firebaseConfig 