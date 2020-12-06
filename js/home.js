$(function () {

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            displayName = user.displayName;
            email = user.email;
            photoUrl = user.photoURL;
            console.log(displayName, email, photoUrl);

      

            // $("#username").text(email);
            // $("#displayname").text(displayName);
            // $("#photo").attr("src",photoUrl);

        } else {
            window.location.href = 'signin.html';
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