var firebaseConfig = {
    apiKey: "AIzaSyDY2FfrCiu5pX3-CuDqaG2IF_sureVZ_Cw",
    authDomain: "healtytrain.firebaseapp.com",
    projectId: "healtytrain",
    storageBucket: "healtytrain.appspot.com",
    messagingSenderId: "785705447786",
    appId: "1:785705447786:web:79d0b031e57be237b53513",
    measurementId: "G-ZHF4E3X6WS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  

$(function () {

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            displayName = user.displayName;
            email = user.email;
            photoUrl = user.photoURL;
            console.log(displayName, email, photoUrl)



            // $("#username").text(email);
            // $("#displayname").text(displayName);
            // $("#photo").attr("src",photoUrl);

        } else {
            window.location.href = 'firstpage.html';
        }
    });



})

function logout() {
    firebase.auth().signOut()
        .then(function () {
            window.location.href = 'signin.html';
        }).catch(function (error) {
            // An error happened.
        });
}
function gohome() {
    window.location.href = "home.html";
}
