var webPage = require('webpage');
var page = webPage.create();

page.open('http://ife.baidu.com', function (status) {
  var content = page.content;
  console.log('Content: ' + content);
  phantom.exit();
});