import { initializeApp } from "https://gstatic.com";
import { getAnalytics } from "https://gstatic.com";

// Вставьте сюда ваш объект firebaseConfig:
const firebaseConfig = {
  apiKey: "AIzaSyB4rROTMduYpKH1ZP8hv0jrzGzY7NEPXRg",
  authDomain: "firstproject-2be5f.firebaseapp.com",
  projectId: "firstproject-2be5f",
  storageBucket: "firstproject-2be5f.firebasestorage.app",
  messagingSenderId: "58428625889",
  appId: "1:58428625889:web:61dc936e607eaadca338a0",
  measurementId: "G-W9FEREN3K1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
