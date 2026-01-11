import { Injectable } from '@angular/core';
import {
  getFirestore, collection, getDocs, DocumentData, QueryDocumentSnapshot, SnapshotOptions, FirestoreDataConverter,
  CollectionReference, doc,
  setDoc,
  getDoc
} from "firebase/firestore";

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

/**
 * Video data model.
 */
export interface Video {
  id: string;
  title: string;
  url: string;
  responses: string[];
}

/**
 * Firestore data converter for Video objects.
 */
const videoConverter: FirestoreDataConverter<Video> = {

  toFirestore(video: Video): DocumentData {
    const firebaseVideo: any = video;
    delete firebaseVideo.id; // ID is stored in document ID, not in data
    return firebaseVideo
  },

  fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): Video {
    const data = snapshot.data(options)!;
    return {
      id: snapshot.id,
      title: data['title'],
      url: data['url'],
      responses: data['responses'] || [],
    } as Video;
  }

};

/**
 * Service to interact with video data from Firestore.
 */
@Injectable({
  providedIn: 'root',
})
export class VideoService {

  private firebaseApp: FirebaseApp;

  private get videosRef(): CollectionReference<Video> {
    const db = getFirestore(this.firebaseApp);
    return collection(db, "videos").withConverter(videoConverter);
  }

  constructor() {
    // Initialize Firebase
    this.firebaseApp = initializeApp(firebaseConfig);
    const analytics = getAnalytics(this.firebaseApp);
  }

  /**
   * Retrieves a random video from the Firestore 'videos' collection.
   * 
   * @returns A promise that resolves to a Video object. 
   */
  public async getVideo(): Promise<Video> {

    const querySnapshot = await getDocs(this.videosRef);
    const randomIndex = Math.floor(Math.random() * querySnapshot.size);
    return querySnapshot.docs[randomIndex].data();
  }

  public async addResponse(videoId: string, response: string): Promise<void> {
    const docRef = doc(this.videosRef, videoId);
    const docSnap = await getDoc(docRef);
    const responses = docSnap.data()?.responses || [];
    responses.push(response);
    console.log(docSnap.data(), responses);
    await setDoc(docRef, { responses }, { merge: true });
  }


}

/**

interface NewtonianBody {
  speed: number;
  wheels: number;
}

class Vehicle {
  public speed: number = 0;
  constructor(initilalSpeed: number = 0, colour: string = 'white') {
    this.speed = initilalSpeed;
    console.log('Vehicle created');
  }
  accelerate(amount: number): void {
    this.speed += amount;
  } 
  decelerate(amount: number): void {
    this.speed -= amount;
  }
}

class Car extends Vehicle implements NewtonianBody  {
  public wheels = 4; 
}

class Bike extends Vehicle implements NewtonianBody {
  public wheels = 2;
  pedal(amount: number): void {
    this.speed += amount;
  }
}

function printSpeed(body: NewtonianBody): void {
  console.log(`The object is moving at ${body.speed} km/h`);
}

const alhambra = new Car(100);
const bmax = new Car(20);
const motor = new Bike();
alhambra.accelerate(50);
alhambra.decelerate(20);
bmax.accelerate(70);
motor.pedal(15);
printSpeed(alhambra);
printSpeed(bmax);
printSpeed(motor);


class Load {
  amount?: number;
}

class PassengerLoad extends Load {
  number?: number;
}

class CargoLoad extends Load {
  weight?: number;
}

class Vehicle<LoadType extends Load> {
  public speed: number = 0;
  public load: LoadType | null = null;
  getLoad(): LoadType | null {
    return this.load;
  }
  addLoad(newload: LoadType): void {
    this.load = newload;
  }
}

let bus = new Vehicle<PassengerLoad>();
let truck = new Vehicle<CargoLoad>();

 */
