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
      console.log(user);
      window.location.href = 'welcome.html';
    }
  });


  $("#getstart").click(function () {

    var email = $("#email").val();
    var password = $("#password").val();

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        alert('User Register successfully');
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        $("#error").text(errorMessage);
      });

  });


  $("#signingoogle").click(function () {

    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().signInWithRedirect(provider);

    firebase.auth().getRedirectResult().then(function (result) {
      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // ...
      }
      // The signed-in user info.
      var user = result.user;
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      $("#error").text(errorMessage);
    });


  });



})