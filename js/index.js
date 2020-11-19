document.addEventListener('init', function(event) {
    var page = event.target;
  
    if (page.id === 'sport') {
      page.querySelector('#push-button').onclick = function() {
        document.querySelector('#myNavigator').pushPage('page2.html', {data: {title: 'Page 2'}});
      };
    } else if (page.id === 'run') {
      page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    }
  });