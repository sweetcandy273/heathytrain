const firebaseConfig = {
    apiKey: "AIzaSyDM9jUfQ4w4dbDvsK_8Bfi1TA49294QFIE",
    authDomain: "healthytrain-d9346.firebaseapp.com",
    databaseURL: "https://healthytrain-d9346.firebaseio.com",
    projectId: "healthytrain-d9346",
    storageBucket: "healthytrain-d9346.appspot.com",
    messagingSenderId: "152641726829",
    appId: "1:152641726829:web:e3d1a67c4d77e6744b1264",
    measurementId: "G-73WPJDF3RY"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();




db.collection("food").get().then((querySnapshot) => {

    querySnapshot.forEach((doc) => {
        if (doc.data().foodID == "food1") {
            const result = `
            <img id="food1" src="${doc.data().URLfood}" width="90%" style="margin-top: 1px;"
                class="rounded" onclick="openfooddetail(this.id)">
            <p class="text_food1">${doc.data().foodname}</p> `

            $("#food1").append(result);


        } else if (doc.data().foodID == "food2") {
            const result = `
            <img id="food2" src="${doc.data().URLfood}" width="90%" style="margin-top: 1px;"
                class="rounded" onclick="openfooddetail(this.id)">
            <p class="text_food1">${doc.data().foodname}</p>  `

            $("#food2").append(result);

        } else if (doc.data().foodID == "food3") {
            const result = `
            <img id="food3" src="${doc.data().URLfood}" width="90%" style="margin-top: 1px;"
                class="rounded" onclick="openfooddetail(this.id)">
            <p class="text_food1">${doc.data().foodname}</p>  `

            $("#food3").append(result);
        } else if (doc.data().foodID == "food4") {
            const result = `
            <img id="food4" src="${doc.data().URLfood}" width="90%" style="margin-top: 1px;"
                class="rounded" onclick="openfooddetail(this.id)">
            <p class="text_food1">${doc.data().foodname}</p>  `

            $("#food4").append(result);
        } else if (doc.data().foodID == "food5") {
            const result = `
            <img id="food5" src="${doc.data().URLfood}" width="90%" style="margin-top: 1px;"
                class="rounded" onclick="openfooddetail(this.id)">
            <p class="text_food1">${doc.data().foodname}</p>  `

            $("#food5").append(result);
        } else if (doc.data().foodID == "food6") {
            const result = `
            <img id="food6" src="${doc.data().URLfood}" width="90%" style="margin-top: 1px;"
                class="rounded" onclick="openfooddetail(this.id)">
            <p class="text_food1">${doc.data().foodname}</p>  `

            $("#food6").append(result);
        } else if (doc.data().foodID == "food7") {
            const result = `
            <img id="food7" src="${doc.data().URLfood}" width="90%" style="margin-top: 1px;"
                class="rounded" onclick="openfooddetail(this.id)">
            <p class="text_food1">${doc.data().foodname}</p>  `

            $("#food7").append(result);
        } else if (doc.data().foodID == "food8") {
            const result = `
            <img id="food8" src="${doc.data().URLfood}" width="90%" style="margin-top: 1px;"
                class="rounded" onclick="openfooddetail(this.id)">
            <p class="text_food1">${doc.data().foodname}</p>  `

            $("#food8").append(result);
        }




    })
});


function goBacktohome() {
    window.location.href = "home.html";
}



function goBack() {

    document.querySelector('#myNavigator').popPage()

}


function openfooddetail(foodID) {

    db.collection("food").get().then((querySnapshot) => {
        // console.log(foodID);
        querySnapshot.forEach((doc) => {
            if (doc.data().foodID == foodID) {
                const result = `
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="${doc.data().URLfoodhead}" class="d-block w-100" alt="...">
            </div>

        </div>
      </div>

    <div class="about" id="about">
        <div class="container">
            <div class="about-agileits-title">

                <div class="w3ls-about-grids">
                    <div class="col-md-6 w3l-about-left">
                        <h2>${doc.data().foodtopic}</h2>

                        <p>${doc.data().detailfoodtopic}
                        </p>
                    </div>


                </div>
            </div>
        </div>
    </div>

    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="${doc.data().URLmaterial}" class="d-block w-100" alt="...">
            </div>

        </div>
    </div>


    <div class="ingredient" id="ingredient">
        <div class="container">
            <div class="about-agileits-title">

                <div class="w3ls-about-grids">
                    <div class="col-md-6 w3l-about-left">
                        <h2>วัตถุดิบ</h2>
                        <div class="card" style="width: 18rem;">
                        ${doc.data().material}
                        </div>


                    </div>


                </div>
            </div>
        </div>
    </div>
    <br>


    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="${doc.data().URLpic1}" class="d-block w-100">
            </div>
            <div class="carousel-item">
                <img src="${doc.data().URLpic2}" class="d-block w-100">
            </div>
            <div class="carousel-item">
                <img src="${doc.data().URLpic3}" class="d-block w-100">
            </div>
           
            
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
    <br>

    <div class="about" id="about">
        <div class="container">
            <div class="about-agileits-title">

                <div class="w3ls-about-grids">
                    <div class="col-md-6 w3l-about-left">


                        <p>${doc.data().enddetail}

                        </p>
                    </div>


                </div>
            </div>
        </div>
    </div>

            `

                $("#fooddetail").append(result)


            }

        })
    });

    document.querySelector('#myNavigator').pushPage('fooddetail1.html')
}










