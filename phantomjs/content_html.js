var page = require('webpage').create();
page.viewportSize = { width: 400, height : 400 };
//phantomjs生成网页，使用content方法指定网页的HTML代码。
page.content = '<html><body><canvas id="surface"></canvas></body></html>';
phantom.exit();