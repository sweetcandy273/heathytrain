$(function () {

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            
            // window.location.href = 'index.html';
            $("#error").text('success');
        }
    });


    $("#signinemail").click(function () {

        var email = $("#email").val();
        var password = $("#password").val();

        firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            $("#error").text(errorMessage);
        });
    });
})