var webPage = require('webpage');
var page = webPage.create();
//打印简约的网页文本
page.open('http://ife.baidu.com', function (status) {
  console.log('Stripped down page text:\n' + page.plainText);
  phantom.exit();
});