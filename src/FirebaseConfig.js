import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
 apiKey: 'AIzaSyAa097F1Y10b0bptwqpDhef-nILkoLf928',
 authDomain: 'showcase-83214.firebaseapp.com',
 databaseURL: 'https://showcase-83214.firebaseio.com',
 projectId: 'showcase-83214',
 storageBucket: 'showcase-83214.appspot.com',
 messagingSenderId: '157915943988',
 appId: '1:157915943988:web:25c52e5440cb322a256661',
 measurementId: 'G-KCQQZFV0JM'
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;