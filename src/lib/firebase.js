import { initializeApp } from 'firebase/app';

/**
 * Firebase config за TestPilot.
 * Препоръчително: задайте стойностите в .env.local като NEXT_PUBLIC_*
 * (виж .env.local.example) и не комитвайте реални ключове в репо.
 */
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 'AIzaSyBvpAsSenmGpglB0lx9EeCSAhgensLhPtk',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'testpilot-6aaa6.firebaseapp.com',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'testpilot-6aaa6',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'testpilot-6aaa6.firebasestorage.app',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '1042361650863',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '1:1042361650863:web:45209516140783b6328e5a',
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || 'G-QDQWQ53G33',
};

const app = initializeApp(firebaseConfig);

export { app };
export default app;
