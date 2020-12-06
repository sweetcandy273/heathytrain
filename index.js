$(function(){
    firebase.auth().onAuthStateChanged(function(user){
        if (user){
         var eamil = user.eamil;
         $("#username").text(eamil)

        } else {
         window.location.href = 'signin.html';
        }
      });

      $("signout").click(function(){
        firebase.auth().signOut()
        .then(function() {
            // Sign-out successful.
          }).catch(function(error) {
            // An error happened.
          });

      })


})