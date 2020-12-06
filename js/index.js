
const firebaseConfig = {
    apiKey: "AIzaSyDGgcfUYbxBvtkGgLL_aQFMS2B1nxXxT6k",
    authDomain: "heathytrain-c5259.firebaseapp.com",
    databaseURL: "https://heathytrain-c5259.firebaseio.com",
    projectId: "heathytrain-c5259",
    storageBucket: "heathytrain-c5259.appspot.com",
    messagingSenderId: "357286277790",
    appId: "1:357286277790:web:bf3ed0ea0e2c953e13018f",
    measurementId: "G-737DC9CSXZ"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();


db.collection("welcome").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        if (doc.data().imgname == "logo1") {

            const result =`<h4 class="text-center">Heathy
            <img src="${doc.data().link}" alt="" width="30px">
            Train</h4>`
           
            $("#showlogo1").append(result)

        }
        if (doc.data().imgname == "pic_welcome") {

            const result2 =`<img src="${doc.data().link}" alt="" width="100%">`
           
            $("#showpic_welcome").append(result2)

        }
     

    })
});


db.collection("home").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        if (doc.data().imgname == "logo2") {

            const result =`<h4 class="text-center">Heathy
            <img src="${doc.data().link}" alt="" width="30px">
            Trian</h4>`
           
            $("#showlogo2").append(result)

        }
        if (doc.data().imgname == "sport12") {

            const result =`<img src="${doc.data().link}" alt="" width="60%">`
           
            $("#showsport12").append(result)

        }
        if (doc.data().imgname == "food1") {

            const result =`<img src="${doc.data().link}" alt="" width="70%" style="border-radius: 10px;">`
           
            $("#showfood1").append(result)

        }
        if (doc.data().imgname == "chat") {

            const result =`<img src="${doc.data().link}" alt="" width="15%">`
           
            $("#showchat").append(result)

        }
     
     

    })
});


function gohome() {
    window.location.href = "home.html";
}

function gofood() {
    window.location.href = "food.html";
}
function gosport() {
    window.location.href = "sport.html";
}
function goBMI(){
    window.location.href = "bmi.html";

}
function gochat(){
    window.location.href = "chat.html";

}
function goBack() {
    document.querySelector('#navigator_home').popPage()
}
function gochecklogout(){
    window.location.href = "checklogout.html";

}


document.addEventListener('init', function (event) {
    var page = event.target;

    if (page.id === 'home') {
        page.querySelector('#btn_sport').onclick = function () {
            document.querySelector('#navigator_home').pushPage('views/mycouse.html', { data: { title: 'My Couse' } });
        };
    }
});




