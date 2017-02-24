var page = require('webpage').create();
var system = require('system');
var t, address;
//测试指定页面加载用时
if (system.args.length === 1) {
    console.log('Usage:loadspeed.js url');
    phantom.exit();
}

t = Date.now();
address = system.args[1];

page.open(address, function (status) {
    if (status !== 'success') {
        console.log('fail to load the address');
    } else {
        t = Date.now() - t;
        console.log('loading ' + address);
        console.log('loading time ' + t + ' msec');
    }
    phantom.exit();
})