function gohome() {
    window.location.href = "home.html";
}

function gofood() {
    window.location.href = "food.html";
}
function gosport() {
    window.location.href = "sport.html";
}
function goBack() {

    document.querySelector('#navigator_home').popPage()

}


    document.addEventListener('init', function (event) {
        var page = event.target;

        if (page.id === 'home') {
            page.querySelector('#btn_sport').onclick = function () {
                document.querySelector('#navigator_home').pushPage('mycouse.html', { data: { title: 'My Couse' } });
            };
        } else if (page.id === 'mycouse') {
            page.querySelector('ons-toolbar .center').innerHTML = page.data.title;

        }
    });


