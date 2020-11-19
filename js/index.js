document.addEventListener('init', function (event) {
    var page = event.target;

    if (page.id === 'sport') {
        page.querySelector('#run').onclick = function () {
            document.querySelector('#myNavigator').pushPage('views/showsport.html', { data: { title: 'วิ่งระยะสั้น' } });
        };
        page.querySelector('#weight_high').onclick = function () {
            document.querySelector('#myNavigator').pushPage('views/showsport.html', { data: { title: 'ยกน้ำหนัก(ขั้นสูง)' } });
        };
        page.querySelector('#belly').onclick = function () {
            document.querySelector('#myNavigator').pushPage('views/showsport.html', { data: { title: 'ลดหน้าท้อง' } });
        };
        page.querySelector('#body').onclick = function () {
            document.querySelector('#myNavigator').pushPage('views/showsport.html', { data: { title: 'บอดี้เวท' } });
        };
        page.querySelector('#yoga').onclick = function () {
            document.querySelector('#myNavigator').pushPage('views/showsport.html', { data: { title: 'โยคะ' } });
        };
        page.querySelector('#weight_low').onclick = function () {
            document.querySelector('#myNavigator').pushPage('views/showsport.html', { data: { title: 'ยกน้ำหนัก(เริ่มต้น)' } });
        };
        page.querySelector('#dance_cover').onclick = function () {
            document.querySelector('#myNavigator').pushPage('views/showsport.html', { data: { title: 'เต้นโคฟเวอร์' } });
        };
        page.querySelector('#aerobic_dance').onclick = function () {
            document.querySelector('#myNavigator').pushPage('views/showsport.html', { data: { title: 'เต้นแอโรบิค' } });
        };
    } else if (page.id === 'showsport') {
        page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    }
});