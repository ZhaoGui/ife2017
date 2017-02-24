var page = require('webpage').create();
//page对象代表一个网页实例
//open方法表示打开某个网址，它的第一个参数是目标网址，第二个参数是网页载入成功后，运行的回调函数
//render方法则是渲染页面，然后以图片格式输出
//zoomFactor表示将截图缩小至原图的25%大小
//renderBase64方法则是表示将截图（PNG格式）编码成Base64格式的字符串输出。
page.open('http://www.jianshu.com', function () {
    page.render('jianshu.png');
    page.zoomFactor = 0.25;
    console.log(page.renderBase64());
    phantom.exit();
});