var webPage = require('webpage');
var page = webPage.create();
//页面加载，长网页截图
page.viewportSize = { width: 1920, height: 1080 };
//网页加载的初始浏览器窗口大小
//viewportSize的Height字段必须指定，不可省略。
page.open("http://www.bilibili.com", function start(status) {
  page.render('page.jpeg', {format: 'jpeg', quality: '100'});
  //format字段用于指定图片格式，quality字段用于指定图片质量，最小为0，最大为100。
  phantom.exit();
});