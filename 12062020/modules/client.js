const { ObjectId } = require('bson');
const { response } = require('express');

exports.getClientslist = function (req, resg) {

    const users = [{ name: "test name", email: "email@email.email" }, { name: "test name", email: "email@email.email" }]

    var MongoClient = require('mongodb').MongoClient;
    var url = 'mongodb://localhost:27017';

    MongoClient.connect(url, function (err, db) {
        if (err) {
            throw err;
        }

        var dbo = db.db('todo');

        dbo.collection('users').find({ name: /^t/ }).toArray(function (err, result) {
            console.log(result);
        });
    })

    resg.send(users);

}

exports.addNewtodo = function (req, resg) {

    let body = [];
    let requestBody = {};

    req.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        try {
            requestBody = JSON.parse(body);

            var todoG = requestBody.todo;


            var MongoClient = require('mongodb').MongoClient;
            var url = 'mongodb://localhost:27017';

            MongoClient.connect(url, function (err, db) {
                if (err) {
                    throw err;
                }

                var dbo = db.db('todo');
                var todo = { todo: todoG, date: new Date() }

                dbo.collection('todos').insertOne(todo, function (err, r) {
                    if (err) {
                        throw err
                    }

                    resg.send({ success: true, message: 'successfully inserted' })
                })



            })





        } catch (e) {

        }

    })






}


exports.authUser = function (req, resg) {
    /*if (false) {
        next(); // allow the next route to run
      } else {
        // require the user to log in
        res.send({success:false, message:"Auth required"});
      }*/


    let body = [];
    let requestBody = {};

    req.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        try {
            requestBody = JSON.parse(body);

            var email = requestBody.email;
            var password = requestBody.password;


            var MongoClient = require('mongodb').MongoClient;
            var url = 'mongodb://localhost:27017';

            MongoClient.connect(url, function (err, db) {
                if (err) {
                    throw err;
                }

                var dbo = db.db('todo');

                dbo.collection('users').findOne({ email: email, password: password }, function (err, response) {
                    if (response) {


                        resg.send({ success: true, token: response._id })
                    } else {
                        resg.send({ success: false, token: null })
                    }



                })
            })





        } catch (e) {

        }

    })






}



exports.updateTodo = function (req, res) {
    let body = [];
    let requestBody = {};

    req.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        try {
            requestBody = JSON.parse(body);

            var id = requestBody.id;
            var newtodo = requestBody.newtodo;


            var MongoClient = require('mongodb').MongoClient;
            var url = 'mongodb://localhost:27017';

            MongoClient.connect(url, function (err, db) {
                if (err) {
                    throw err;
                }

                var dbo = db.db('todo');

                dbo.collection('todos').updateOne({ _id: ObjectId(id) },
                    { $set: { todo: newtodo } }, function (err, resp) {
                        if (err) {
                            throw err;
                        }

                        res.send({ success: true, message: "todo updated" });
                    }
                )

            })





        } catch (e) {

        }

    })
}



exports.deleteTodo = function (req, res) {
    let body = [];
    let requestBody = {};

    req.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        try {
            requestBody = JSON.parse(body);

            var id = requestBody.id;

            var MongoClient = require('mongodb').MongoClient;
            var url = 'mongodb://localhost:27017';

            MongoClient.connect(url, function (err, db) {
                if (err) {
                    throw err;
                }

                var dbo = db.db('todo');

                dbo.collection('todos').deleteOne({ _id: ObjectId(id) }, function (err, resp) {
                    if (err) throw err;
                    res.send({ success: true, message: "todo deleted !" })
                })
            })





        } catch (e) {

        }

    })



}

exports.getAllTodos = function (req, resg) {

    var MongoClient = require('mongodb').MongoClient;
    var url = 'mongodb://localhost:27017';

    MongoClient.connect(url, function (err, db) {
        if (err) {
            throw err;
        }

        var dbo = db.db('todo');

        dbo.collection('todos').find({}).toArray(function (err, result) {
            resg.send({ success: true, todos: result });
        });
    })


}



exports.addNewUser = function (req, resg) {




    let body = [];
    let requestBody = {};

    req.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        try {
            requestBody = JSON.parse(body);

            data = requestBody;
            var resonse = { success: true, data: requestBody }

            var MongoClient = require('mongodb').MongoClient;
            var url = 'mongodb://localhost:27017';

            MongoClient.connect(url, function (err, db) {
                if (err) {
                    throw err;
                }

                var dbo = db.db('todo');

                dbo.collection('users').inset(requestBody, function (err, res) {
                    if (err) throw err;
                    console.log("1 data inserted");

                    resg.send(resonse);
                })

            })









        } catch (err) {

        }


    })



}


/**
 *
 * var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { address: "Valley 345" };
  var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
  dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});
 */