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
  var db = firebase.firestore();


db.collection("firstpage").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        if (doc.data().imgname == "firstpage") {

            const result =`<img src="${doc.data().link}" alt="" width="70%" style="margin-top: 10px; ">`
           
            $("#showimgfirstpage").append(result)

        }
        if (doc.data().imgname == "logo2") {

            const result =`<h4 class="text-center">Heathy
            <img src="${doc.data().link}" alt="" width="30px">
            Train</h4>`
           
           
            $("#showlogo2").append(result)

        }
    
    })
});