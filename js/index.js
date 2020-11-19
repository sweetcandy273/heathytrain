document.addEventListener('init', function(event) {
    var page = event.target;
  
    if (page.id === 'sport') {
      page.querySelector('.sport_big').onclick = function() {
        document.querySelector('#myNavigator').pushPage('views/showsport.html', {data: {title: 'Page 2'}});
      };
      page.querySelector('.sport_small').onclick = function() {
        document.querySelector('#myNavigator').pushPage('views/showsport.html', {data: {title: 'Page 2'}});
      };
      page.querySelector('.sport_small').onclick = function() {
        document.querySelector('#myNavigator').pushPage('views/showsport.html', {data: {title: 'Page 2'}});
      };
      page.querySelector('.sport_small').onclick = function() {
        document.querySelector('#myNavigator').pushPage('views/showsport.html', {data: {title: 'Page 2'}});
      };
      page.querySelector('.sport_small').onclick = function() {
        document.querySelector('#myNavigator').pushPage('views/showsport.html', {data: {title: 'Page 2'}});
      };
      page.querySelector('.sport_small').onclick = function() {
        document.querySelector('#myNavigator').pushPage('views/showsport.html', {data: {title: 'Page 2'}});
      };
    } else if (page.id === 'showsport') {
      page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    }
  });