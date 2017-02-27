var http = require("http");  
http.createServer(function(request, response) {  
    console.log('request received');  
    response.writeHead(200, {"Content-Type": "text/plain"});  
    response.write("Hello Node.js");  
    response.end();  
}).listen(8888);  
console.log('server started');  