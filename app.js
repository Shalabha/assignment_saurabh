var express = require('express');
var app = express();
  
var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');

var mongo=require('mongodb');
var mongoClient=mongo.MongoClient;
var url="mongodb://shalu:shalu@ds037195.mlab.com:37195/name";

var user1,user2,pwrd,uc,useral,pwrd1,pwrd2,pass2,ur;
var tit,desc,dat,auth,image;


app.post('/login', function(req,res) {
      user1 = req.body.user;
      pass2=req.body.pass;
  uc.find({username: user1}).toArray(function(err, docs) { 
    if(docs.length==0&&user1!=null&&pass2!=null){
      uc.insert({username:user1,password:pass2});
  res.sendFile(__dirname+'/home.html'); 
    }else if(docs.length!=0){
      console.log("user name already exists!!!");
      res.sendFile(__dirname+'/signup.html'); 
    }
})
   pwrd1 = req.body.pass1;
     pwrd2 =req.body.pass2;
     console.log(pwrd1)
   if(pwrd1==pwrd2){
uc.update({username:useral},
   {$set:{password:pwrd1}},{multi:true});
      res.sendFile(__dirname+'/login.html'); 
   }else{
    console.log("Password mismatch");
     res.sendFile(__dirname+'/changepass.html');
   }
});

app.post('/blog', function(req,res) {
     user2 = req.body.loguser;
     pwrd = req.body.logpass;
   
  uc.find({username: user2,password:pwrd}).toArray(function(err, docs) { 
     if(docs.length==0){
      console.log("Login details incorrect");
      res.sendFile(__dirname+'/login.html'); 
    }else{
      res.sendFile(__dirname+'/blog.html'); 
    //  console.log(window.location.href);
    }
})

   tit = req.body.addtitle;
     desc=req.body.text;
     dat=req.body.date;
     auth=req.body.author;
     image=req.body.image
  
     if(desc&&tit&&auth&&image&&desc){
      uc1.insert({title:tit,doc:desc,an:auth,img:image,des:desc,});
    }
});



app.post('/changepass', function(req,res) {
     useral = req.body.gotuser;
    // console.log(useral);
  uc.find({username: useral}).toArray(function(err, docs) { 
if(docs.length==0){
  console.log("incorrect username");
  res.sendFile(__dirname+'/forgotpass.html'); 
}else{
  res.sendFile(__dirname+'/changepass.html'); 
}
// res.sendFile(__dirname+'/changepass.html'); 
})
});




app.get('/display',function(req,res){
uc1.find().toArray(function(err,docs){
  var jsondata=docs;
res.send(jsondata);
})
})

mongoClient.connect(url,function(err,db){
   uc=db.collection('userdetails');
   uc1=db.collection('data');
})

app.use(express.static(path.join(__dirname, '/public'))); 

app.get('/', function (req, res) {
   res.sendFile(__dirname+'/home.html'); 
});
app.get('/home', function (req, res) {
   res.sendFile(__dirname+'/home.html'); 
});
app.get('/forgotpass', function (req, res) {
   res.sendFile(__dirname+'/forgotpass.html'); 
});
app.get('/changepass', function (req, res) {
   res.sendFile(__dirname+'/changepass.html'); 
});
app.get('/signup', function (req, res) {
   res.sendFile(__dirname+'/signup.html'); 
});
app.get('/login', function (req, res) {
   res.sendFile(__dirname+'/login.html'); 
});
app.get('/logout', function (req, res) {
   res.sendFile(__dirname+'/logout.html'); 
});
app.get('/blog', function (req, res) {
   res.sendFile(__dirname+'/blog.html'); 
});
app.get('/addpost', function (req, res) {
   res.sendFile(__dirname+'/addpost.html'); 
});





app.listen(5000, function () {
  console.log('Example app listening on port 3000!');
});
