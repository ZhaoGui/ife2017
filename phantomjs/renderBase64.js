var webPage = require('webpage');
var page = webPage.create();

page.viewportSize = {
	width: 1920,
	height: 1080
};

page.open('http://phantomjs.org', function (status) {
  var base64 = page.renderBase64('PNG');
  console.log(base64);
  phantom.exit();
});