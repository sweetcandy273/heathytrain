$(function()
{

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
         var email = user.email;
         $("#username").text(email)

        } else {
          window.location.href.repeat('signin.html')
        }
      });
      

})