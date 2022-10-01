const firebaseConfig = {
    apiKey: "AIzaSyB9wsQ45G9Xnm4a7CDYoh_f2angC5gXmpY",
    authDomain: "aut-907ae.firebaseapp.com",
    projectId: "aut-907ae",
    storageBucket: "aut-907ae.appspot.com",
    messagingSenderId: "234046314558",
    appId: "1:234046314558:web:0ee3a594bfb7cd082a196f"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const googleLogin = document.getElementById('googleLogin');

googleLogin.addEventListener('click', event => {
    event.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider)
        .then(result => {
            console.log(result);
            location.href = location.href.replace('index', 'main');
        })
        .catch(err => {
            console.log(err)
        })
});


/* googleLogin.addEventListener('click', event => {
    
    
}); */
