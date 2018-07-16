var express = require('express');
var app = express();
var bp = require('body-parser');

app.listen(3300, function() 
{
	console.log('listening on port 3300!');
});


app.use("/static", express.static(__dirname + "/public"));
app.use(bp.urlencoded({ extended: false }));

// app.get('/', function(req, res)
// {
// 	res.sendFile('index.html');
// });

var user =
{
	login:"adeline",
	mdp:"annie"
};


app.post('/', function (req,res)
{
	console.log(req.body);
  	console.log(user.login);
  	console.log(user.mdp);
  if (user.login === req.body.login && user.mdp === req.body.mdp) {
    console.log(req.body.login);
    console.log(req.body.password);
    res.send("success");
    console.log('success');
}else{
res.send("error");
console.log("error");
}

});

