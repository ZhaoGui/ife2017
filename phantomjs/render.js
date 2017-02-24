const phantom = require('phantom');

(async function() {
    const instance = await phantom.create();
    const page = await instance.createPage();

    await page.property('viewportSize', {width: 1024, height: 600});
    const status = await page.open('http://ife.baidu.com/');
    console.log(`Page opened with status [${status}].`);

    await page.render('ife.pdf');
    console.log(`File created at [./ife.pdf]`);

    await instance.exit();
}());