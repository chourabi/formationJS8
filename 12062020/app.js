const { ObjectId } = require('bson');
const express = require('express');
const { getClientslist, addNewUser, authUser, addNewtodo, getAllTodos, deleteTodo, updateTodo } = require('./modules/client');
const app = express()
const port = 3002


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', "GET,HEAD,PUT,PATCH,POST,DELETE");
    next();
});



app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/users', (req, res) => {

    getClientslist(req,res)
    
})

function  requireLogin(req, resg, next) {

  const token = req.headers.authorization;

console.log(token);
      var MongoClient = require('mongodb').MongoClient;
      var url = 'mongodb://localhost:27017';
  
      MongoClient.connect(url,function(err,db){
          if (err) {
              throw err;
          }
  
          var dbo = db.db('todo');
  
          dbo.collection('users').findOne({ _id:ObjectId(token) },function(err,response){
            console.log(response);
            
            if (response) {
                

                next();
            } else {
                resg.send({ success:false, message:'access denied' })
            }

          })
        })
            



}

// Automatically apply the `requireLogin` middleware to all
// routes starting with `/admin`
app.all("/app/*", requireLogin, function(req, res, next) {
  next();
});


app.post('/app/test', (req,res) =>{

  res.send({success:true,message:"route is accessible"});

});




app.post('/users', (req,res) =>{

    addNewUser(req,res);

});


app.post('/auth', (req,res) =>{

  authUser(req,res);

});

app.post('/app/addtodo', (req,res) =>{

  addNewtodo(req,res);

});

app.get('/app/all',(req,res)=>{
  getAllTodos(req,res);
})

app.delete('/app/deletetodo',(req,res)=>{
  deleteTodo(req,res);
})

app.put('/app/update',(req,res)=>{
  updateTodo(req,res);
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


