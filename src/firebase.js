import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyATaAjl9Lqcn0ZPtwQrywoOLKg08NMY3uE",
    authDomain: "fir-react-d3fea.firebaseapp.com",
    databaseURL: "https://fir-react-d3fea.firebaseio.com",
    projectId: "fir-react-d3fea",
    storageBucket: "fir-react-d3fea.appspot.com",
    messagingSenderId: "577237211009",
    appId: "1:577237211009:web:ca09a6c7c8f21558173a80"
}
firebase.initializeApp(config);

export default firebase;