import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  setDoc,
  getDoc,
  collectionGroup,
  orderBy,
  query,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCcrH64avIso0HQ9AYmw9Mc3yiX94RIpMU',
  authDomain: 'kid-week-schedule.firebaseapp.com',
  projectId: 'kid-week-schedule',
  storageBucket: 'kid-week-schedule.appspot.com',
  messagingSenderId: '141198526522',
  appId: '1:141198526522:web:b66a66e4784f4d07b98d03',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getData(dayNumber) {
  const dataCol = collection(db, 'Nikita', 'week', dayNumber);
  const q = query(dataCol, orderBy('time'));
  const dataSnapshot = await getDocs(q);

  const dataList = dataSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return dataList;
}

export async function addData(selectedDay, item) {
  const docRef = await addDoc(collection(db, 'Nikita', 'week', selectedDay), {
    ...item,
  });
  return docRef.id;
}

export async function delData(selectedDay, id) {
  console.log('delData');
  const docRef = await deleteDoc(doc(db, 'Nikita', 'week', selectedDay, id));
  return id;
}

export async function test() {
  const citiesRef = collection(db, 'Nikita', 'week', '5');

  // Create a query against the collection.
  const q = query(citiesRef, orderBy('time'));
  const dataSnapshot = await getDocs(q);

  const dataList = dataSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  console.log('DATALIST = ', dataList);
}
