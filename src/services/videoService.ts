import { Injectable } from '@angular/core';
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4-v5htNmy6ocVhw7d46uzcTpFYOVqzMs",
  authDomain: "whatcall-52d6a.firebaseapp.com",
  projectId: "whatcall-52d6a",
  storageBucket: "whatcall-52d6a.firebasestorage.app",
  messagingSenderId: "139166244778",
  appId: "1:139166244778:web:4f0914dc3a5eca506955d3",
  measurementId: "G-TDXW9BDJ3G"
};

@Injectable({
  providedIn: 'root',
})
export class VideoService {

  private firebaseApp: FirebaseApp;

  constructor() {
    // Initialize Firebasexw
    this.firebaseApp = initializeApp(firebaseConfig);
    const analytics = getAnalytics(this.firebaseApp);
  }

  async getVideos(): Promise<any[]> {
    const db = getFirestore(this.firebaseApp);
    const querySnapshot = await getDocs(collection(db, "videos"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data()}));
  }

}
