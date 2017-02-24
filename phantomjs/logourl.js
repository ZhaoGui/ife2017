var webPage = require('webpage');
var page = webPage.create();

page.onConsoleMessage = function(msg) {
  console.log('CONSOLE: ' + msg);
};

page.open('http://ife.baidu.com/', function(status) {

  var logoUrl = page.evaluateJavaScript('function(){return document.body.querySelector("img").src;}');
  console.log(logoUrl); 
  //获取网页logo地址

  phantom.exit();
  
});