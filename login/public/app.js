function() {
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyBCb8CIW7ZK7cwTwbGzbbejqUOhSe2-4zQ",
        authDomain: "mapppa-1.firebaseapp.com",
        databaseURL: "https://mapppa-1.firebaseio.com",
        projectId: "mapppa-1",
        storageBucket: "mapppa-1.appspot.com",
        messagingSenderId: "399236438479",
        appId: "1:399236438479:web:20a770ebaeb862a6b59aba",
        measurementId: "G-1SD3TFL0E3"
    };
    firebas.initalizeApp(config);

    const txtemail = document.getElementById('email');
    const txtpassword = document.getElementById('password');
    const btnlogin = document.getElementById('confirm');

    btnLogin.addEventListenner('click', e => {

        const email = txtemail.Value;
        const pass = txtpassword.Value;
        const auth = firebas.auth();

        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });
    firebas.auth().onAuthStateChanged(firebasUser => {
        if (firebasUser) {
            console.log(firebasUser);
        } else {
            console.log('not log in');
        }

    });
}