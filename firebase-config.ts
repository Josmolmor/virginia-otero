// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  collection,
  deleteDoc,
  getDocs,
  getFirestore,
  orderBy,
  query,
  setDoc,
  where
} from 'firebase/firestore';
import { addDoc, DocumentData } from '@firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCtPh6pIrpuFEvryrIo7Ndv3LMqh3fVV8I',
  authDomain: 'virginia-otero-web.firebaseapp.com',
  projectId: 'virginia-otero-web',
  storageBucket: 'virginia-otero-web.appspot.com',
  messagingSenderId: '333277883810',
  appId: '1:333277883810:web:f60f5282ec80cdeaf116fb',
  measurementId: 'G-W1CVENJKQP'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export type DocumentDataComment = {
  content: string;
  avatar?: string;
  name: string;
  email: string;
  pId: string | null;
  slug: string;
  time:
    | Date
    | {
        nanoseconds: number;
        seconds: number;
      };
  likes?: string[]; // array with emails of ppl that liked the comment
};

const commentsCollection = collection(db, 'comments');

const readComments = async (slug: string): Promise<DocumentDataComment[]> => {
  const querySnapshot = await getDocs(
    query(commentsCollection, where('slug', '==', slug), orderBy('time', 'asc'))
  );
  const docs: DocumentData[] = [];
  querySnapshot.forEach((doc) => {
    docs.push(doc.data());
  });
  console.log('comments =>', docs);
  return docs as DocumentDataComment[];
};

const writeComment = async (payload: DocumentDataComment) => {
  try {
    const docRef = await addDoc(commentsCollection, payload);
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

const deleteComment = async (payload: {
  email: string;
  content: string;
  slug: string;
}) => {
  const { email, content, slug } = payload;
  try {
    const q = query(
      commentsCollection,
      where('email', '==', email),
      where('content', '==', content),
      where('slug', '==', slug)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      deleteDoc(doc.ref);
    });
  } catch (e) {
    console.error('Error deleting document: ', e);
  }
};

const likeComment = async (payload: {
  email: string;
  content: string;
  slug: string;
}) => {
  const { email, content, slug } = payload;
  try {
    const q = query(
      commentsCollection,
      where('email', '==', email),
      where('content', '==', content),
      where('slug', '==', slug)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setDoc(doc.ref, { likes: [email] }, { merge: true });
    });
  } catch (e) {
    console.error('Error liking document: ', e);
  }
};

export { app, db, readComments, writeComment, deleteComment, likeComment };
