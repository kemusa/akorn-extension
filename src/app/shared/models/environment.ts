interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId?: string;
}

interface Environment {
  production: boolean;
  firebaseConfig: FirebaseConfig;
  defaultPhotoURL: string;
  SegmentSourceKey?: string;
  crossOriginUrI: string;
}
