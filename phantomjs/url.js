var webPage = require('webpage');
var page = webPage.create();
//打印网页地址
page.open('http://ife.baidu.com', function (status) {
  var url = page.url;
  console.log('URL: ' + url);
  phantom.exit();
});