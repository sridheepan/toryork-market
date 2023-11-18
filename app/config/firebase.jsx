import { initializeApp } from 'firebase/app';

import { getFirestore } from '@firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAGqELHDLM0U5RSyO4U12mYWBZvK-C01Tg',
  authDomain: 'toryork-market-prod.firebaseapp.com',
  projectId: 'toryork-market-prod',
  storageBucket: 'toryork-market-prod.appspot.com',
  messagingSenderId: '189551470638',
  appId: '1:189551470638:web:7167219a7bf9273ea0d7bf',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
