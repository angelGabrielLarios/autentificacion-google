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
const db = firebase.firestore();

const googleLogin = document.getElementById('googleLogin');


const regresarLogin = () => {
    const layout = document.querySelector('.layout');
    layout.removeChild(layout.children[0]);
    layout.insertAdjacentHTML(
        'afterbegin',
        `<div class="card-login" id="card-login">
            <div class="card-login__container-ico">
                <i class="fa-solid fa-user card-login__icon"></i>
            </div>

            <button class="button" id="googleLogin">
                <i class="fa-brands fa-google button__icon"></i>Iniciar Sesion con Google
            </button>
        </div>`
    )
    const googleLogin = document.getElementById('googleLogin');
    googleLogin.addEventListener('click', event => {
        event.preventDefault();
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
            .then(result => {
                console.log(result);
                cargarLogin()
                /* location.href = location.href.replace('index', 'main'); */
            })
            .catch(err => {
                console.log(err)
            })
    });
    
    
}


const cargarLogin = () => {
    const layout = document.querySelector('.layout');
    layout.removeChild(layout.children[0]);
    layout.insertAdjacentHTML(
        'afterbegin',
        `
        <div class="posts">
            <h2 class="posts__title">
                Tus posts
            </h2>
            <button class="button" id="btnCerrarSesion">
                Cerrar sesion
            </button>
        </div>
        `
    );
    const btnCerrarSesion = document.getElementById('btnCerrarSesion')
    btnCerrarSesion.addEventListener('click', event => {
        event.preventDefault();
        auth
            .signOut()
            .then(() => {
                regresarLogin()
                console.log('sign out')
            })
    });
}


googleLogin.addEventListener('click', event => {
    event.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then(result => {
            console.log(result);
            cargarLogin()
        })
        .catch(err => {
            console.log(err)
        })
});

const miNombre = `Angel Gabriel Larios Acosta`
