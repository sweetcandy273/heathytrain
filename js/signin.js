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
          window.location.href = 'home.html';
      } 
  });

    
  $("#signinemail").click(function(){

      var email = $("#email").val();
      var password = $("#password").val();

      firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          $("#error").text(errorMessage);
          // ...
        });
  });

  $('#signingoogle').click(function(){
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');


    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
   

  });

  $('#signinfacebook').click(function(){
    var provider = new firebase.auth.FacebookAuthProvider();
    


    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
   


    });
    

  

})