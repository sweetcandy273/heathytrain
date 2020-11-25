// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyD279kQ9_bLqaol-UqprVWn2nMmBQ8NE5A",
    authDomain: "heathytrain.firebaseapp.com",
    databaseURL: "https://heathytrain.firebaseio.com",
    projectId: "heathytrain",
    storageBucket: "heathytrain.appspot.com",
    messagingSenderId: "925320326632",
    appId: "1:925320326632:web:64253a996d5bfa38f9085d",
    measurementId: "G-9TLDPV2NME"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();

function openshowsport(id) {
    db.collection("sport").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {



            if (doc.data().sport_id == id) {

                const result1 =
                    `
                <img src="${doc.data().URLsport}" width="60%" style="margin-top: 50px;">`
                $(".trailer").append(result1)


                $(".h_name").append(doc.data().sport_name)
                $(".sport_name").append(doc.data().sport_name)
                $(".sport_details").append(doc.data().sport_d)
            }

        });
    });
    db.collection("train").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {

            if (doc.data().sport_id == id) {

                const result1 =
                    `
               <ons-col class="train1">
                <div style="width: 180px;">
                <img src="${doc.data().URLtrain}" id="${doc.data().train_name}" class="trainer_pic" alt="" width="70%" style="margin-top: 10px;"
                onclick="opentainer(this.id)">
                <div class="trainer_name">
                ${doc.data().train_name}
                  </div>
                <p class="text_hr" style="color: #C8D8EB ;">${doc.data().train_hr} - ${doc.data().train_c}BTH</p>
                </div>
                </ons-col>`
                $(".trainer_cover").append(result1)

            } else if (doc.data().sport_id1 == id) {
                const result1 = `
                <ons-col class="train1">
                 <div style="width: 180px;">
                 <img src="${doc.data().URLtrain}" id="${doc.data().train_name}" class="trainer_pic" alt="" width="70%" style="margin-top: 10px;"
                 onclick="opentainer(this.id)">
                 <div class="trainer_name">
                 ${doc.data().train_name}
                   </div>
                 <p class="text_hr" style="color: #C8D8EB ;">${doc.data().train_hr}-${doc.data().train_c}BTH</p>
                 </div>
                 </ons-col>`
                $(".trainer_cover").append(result1)
            } else if (doc.data().sport_id2 == id) {
                const result1 = `
                <ons-col class="train1">
                 <div style="width: 180px;">
                 <img src="${doc.data().URLtrain}" id="${doc.data().train_name}" class="trainer_pic" alt="" width="70%" style="margin-top: 10px;"
                 onclick="opentainer(this.id)">
                 <div class="trainer_name">
                 ${doc.data().train_name}
                   </div>
                 <p class="text_hr" style="color: #C8D8EB ;">${doc.data().train_hr}-${doc.data().train_c}BTH</p>
                 </div>
                 </ons-col>`
                $(".trainer_cover").append(result1)
            } else if (doc.data().sport_id3 == id) {
                const result1 = `
                <ons-col class="train1">
                 <div style="width: 180px;">
                 <img src="${doc.data().URLtrain}" id="${doc.data().train_name}" class="trainer_pic" alt="" width="70%" style="margin-top: 10px;"
                 onclick="opentainer(this.id)">
                 <div class="trainer_name">
                 ${doc.data().train_name}
                   </div>
                 <p class="text_hr" style="color: #C8D8EB ;">${doc.data().train_hr}-${doc.data().train_c}BTH</p>
                 
                 </div>
                 </ons-col>`
                $(".trainer_cover").append(result1)
            }


        });
    });
    document.querySelector('#myNavigator').pushPage('views/showsport.html');
}

function goBack() {

    document.querySelector('#myNavigator').popPage()

}
function opentainer(id,) {
    db.collection("train").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if (doc.data().train_name == id) {

                const result1 =
                    `
                    <img src="${doc.data().pic}" width="60%" style="margin-top: 20px;">`
                $(".train_pro").append(result1)
                $(".train_details").append(doc.data().train_d)
                $(".train_name").append(doc.data().train_name)
                $(".train_picname").append(doc.data().train_name)


                const result2 =
             
                `<div class="train_sportname">${doc.data().sport_name}</div>
                     <p class="co_hr">${doc.data().train_hr} - ${doc.data().train_c}BTH</p>`
                $(".train_c").append(result2)

                const result3 =
                `<div class="train_sportname">${doc.data().sport_name1}</div>
                <p class="co_hr">${doc.data().train_hr} - ${doc.data().train_c}BTH</p>`
                $(".train_c").append(result3)

                const result4 =
                `<div class="train_sportname">${doc.data().sport_name2}</div>
                <p class="co_hr">${doc.data().train_hr} - ${doc.data().train_c}BTH</p>`
                $(".train_c").append(result4)
                
                const result5 =
                `<div class="train_sportname">${doc.data().sport_name3}</div>
                <p class="co_hr">${doc.data().train_hr} - ${doc.data().train_c}BTH</p>`
                $(".train_c").append(result5)



            }

       






        });
    });
    document.querySelector('#myNavigator').pushPage('views/trainer.html', { data: { title: id } });
}
function goBacktainer() {

    document.querySelector('#myNavigator').popPage()

}

db.collection("sport").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        if (doc.data().sport_id == "run") {
            const result1 =
                `  <img src="${doc.data().URLsport}" alt="" width="70%" style="margin-top: 10px;">
          <p class="text_sport">${doc.data().sport_name}</p>`
            $("#run").append(result1)
        } else if (doc.data().sport_id == "weight_high") {
            const result1 =
                `  <img src="${doc.data().URLsport}" alt="" width="60%" style="margin-top: 10px;">
        <p class="text_sport">${doc.data().sport_name}</p>`
            $("#weight_high").append(result1)
        } else if (doc.data().sport_id == "belly") {
            const result1 =
                `  <img src="${doc.data().URLsport}" alt="" width="80%" style="margin-top: 10px;">
        <p class="text_sport">${doc.data().sport_name}</p>`
            $("#belly").append(result1)
        } else if (doc.data().sport_id == "body") {
            const result1 =
                `  <img src="${doc.data().URLsport}" alt="" width="80%" style="margin-top: 10px;">
        <p class="text_sport">${doc.data().sport_name}</p>`
            $("#body").append(result1)
        } else if (doc.data().sport_id == "yoga") {
            const result1 =
                `  <img src="${doc.data().URLsport}" width="60%" style="margin-top: 10px;">
        <p class="text_sport">${doc.data().sport_name}</p>`
            $("#yoga").append(result1)
        } else if (doc.data().sport_id == "weight_low") {
            const result1 =
                `  <img src="${doc.data().URLsport}"  width="60%" style="margin-top: 10px;">
        <p class="text_sport">${doc.data().sport_name}</p>`
            $("#weight_low").append(result1)
        } else if (doc.data().sport_id == "dance_cover") {
            const result1 =
                `  <img src="${doc.data().URLsport}"  width="60%" style="margin-top: 10px;">
        <p class="text_sport">${doc.data().sport_name}</p>`
            $("#dance_cover").append(result1)
        } else if (doc.data().sport_id == "aerobic_dance") {
            const result1 =
                `  <img src="${doc.data().URLsport}"  width="60%" style="margin-top: 10px;">
        <p class="text_sport">${doc.data().sport_name}</p>`
            $("#aerobic_dance").append(result1)
        }




    });
});