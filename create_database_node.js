var http=require('http');
var fs=require('fs');
var mysql=require('mysql');


//Create http server
http.createServer(function(req,res){
  res.writeHead(200,{'content-type':'text/plain'});
  res.write('hello bro');
  res.end();
}).listen(8080);

//Handle file
fs.readFile('file.txt',function(err,data){
  if (err) throw err;
  console.log(data);
});

//Create database
mysql.createConnection