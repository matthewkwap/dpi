const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var path = require('path');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
/*
//C:\Users\FAUSTINA\Desktop\Face-Detection-JavaScript-master
app.post('/user', (req,res) =>{
  console.log(req.body)
})
app.get('/j', (req ,res) =>{
    res.sendfile('gi.html');
    console.log("requested")
})
app.get('/', (req ,res) =>{
    res.sendFile(__dirname + "/" + "index.html");
    console.log("requested and sent")
})
app.get('/face-api.min.js', function(req, res) {
    res.sendFile(__dirname + "/" + "face-api.min.js");
  });
  app.get('/script.js', function(req, res) {
    res.sendFile(__dirname + "/" + "script.js");
  });

app.get('/models/tiny_face_detector_model-weights_manifest.json',(req,res) =>{
    res.sendFile( __dirname + "/" + "models/tiny_face_detector_model-weights_manifest.json")})
app.get('/models/face_landmark_68_model-weights_manifest.json',(req,res) =>{
    res.sendFile(__dirname + "/" + "models/face_landmark_68_model-weights_manifest.json")})

app.get('/models/face_recognition_model-weights_manifest.json ',(req,res) =>{
    res.sendFile( __dirname + "/" + "models/face_recognition_model-weights_manifest.json")})
app.get('/models/face_expression_model-weights_manifest.json',(req,res) =>{
    res.sendFile( __dirname + "/" + "models/face_expression_model-weights_manifest.json")})
*/
    app.get('/m',(req,res) =>{
        res.sendFile(   __dirname + "/" + "models")})
    
        app.use(express.static('models'))
    
        app.use('/models/', express.static(path.join(__dirname, 'face_expression_model-weights_manifest.json')))
        app.use('/models/', express.static(path.join(__dirname, 'public')))
        
        app.use('/Admin/Admininfo', express.static(path.join(__dirname, 'user.json')))
        app.use('/Admin/Admininfo', express.static(path.join(__dirname, '1.PNG')))
        app.use('/Admin/Admininfo', express.static(path.join(__dirname, '2.PNG')))
  
  //models/face_landmark_68_model-weights_manifest.json




















  app.post('/user', (req,res) =>{
  let r = req.body
  console.log(r)

})


app.listen(3000, '0.0.0.0', function() {
    console.log('Listening to port: ' + 3000);
    });
    
