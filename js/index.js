// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// var firebaseConfig = {
//     apiKey: "AIzaSyD279kQ9_bLqaol-UqprVWn2nMmBQ8NE5A",
//     authDomain: "heathytrain.firebaseapp.com",
//     databaseURL: "https://heathytrain.firebaseio.com",
//     projectId: "heathytrain",
//     storageBucket: "heathytrain.appspot.com",
//     messagingSenderId: "925320326632",
//     appId: "1:925320326632:web:64253a996d5bfa38f9085d",
//     measurementId: "G-9TLDPV2NME"
//   };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();
// var db = firebase.firestore();

function openshowsport(id) {
    
    document.querySelector('#myNavigator').pushPage('views/showsport.html', {data: {title: id}});
  }
  function goBack() {

    document.querySelector('#myNavigator').popPage()
  
  }

//   db.collection("sport").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       if (doc.data().sport_id = "run") {
//         const result1 =
//           `  <img src="${doc.data().URLsport} alt="" width="70%" style="margin-top: 10px;">
//           <p class="text_sport">${doc.data().sport_name}</p>`
//         $("#run").append(result1)
//       }
//     });
//   });