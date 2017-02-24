var webPage = require('webpage');
var page = webPage.create();

page.onConsoleMessage = function(msg) {
  console.log(msg);
}

page.open('http://jianshu.com', function(status) {

  page.evaluate(function() {
    console.log(document.title);
  });

  phantom.exit();

});