// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: "G-CNYY36G4FE"
};

// Initialize Firebase only on client side
let app;
let analytics;

if (typeof window !== 'undefined') {
  app = initializeApp(firebaseConfig);
  // Initialize analytics only in production and on client side
  if (process.env.NODE_ENV === 'production') {
    analytics = getAnalytics(app);
  }
}

// Analytics event tracking helper
export const trackEvent = (eventName, eventParams = {}) => {
  if (analytics && process.env.NODE_ENV === 'production') {
    logEvent(analytics, eventName, eventParams);
  }
};

export { analytics };