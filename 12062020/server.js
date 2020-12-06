var http = require('http');
var dates = require('./modules/DateModule');
var url = require('url');
var fs = require('fs');
var uppercase = require('upper-case');
var formidable = require('formidable');

const port = 3001;


http.createServer(function(req,res){
    

    var q ;
    q= url.parse(req.url,true);
/*
    if (q.username) {
        res.writeHead(200,{'content-type':'text/html'});
        res.end('<h1>welcome '+q.username+' </h1>');
    }else{
        res.writeHead(403,{'content-type':'text/html'});
        res.end('<h1>access denied</h1>');
        
    }*/

    /*console.log(q.query);
    console.log(q.pathname);
    console.log(q.search);*/


    const path = q.pathname;

    /*switch (path) {
        case '/summer':
            fs.readFile('./template/summer.html',function(err,data){
                res.writeHead(200,{'content-type':'text/html'});
                res.write(data);
                res.end();
            });

            break;

            case '/winter':
                fs.readFile('./template/winter.html',function(err,data){
                    res.writeHead(200,{'content-type':'text/html'});
                    res.write(data);
                    res.end();
                });
            break;
    
        default:
            fs.readFile('./template/notfound.html',function(err,data){
                res.writeHead(404,{'content-type':'text/html'});
                res.write(data);
                res.end();
            });
            break;
    }*/


    /*fs.open('template/produit.txt','w',function(err,file){
        if (err) throw err;
        console.log("file created !");
    });*/

    /*fs.writeFile('template/produit.txt','toffeh;',function(err){
        if ( err) {
            throw err;
        }

        console.log('saved !');
    })*/

    /*fs.appendFile('template/produit.txt','toffeh;',function(err){
        if ( err) {
            throw err;
        }

        console.log('saved !');
    })*/


    /*fs.readFile('./template/produit.txt',function(err,data){
        res.writeHead(200,{'content-type':'text/html'});
        
        let produits = data.toString().split(';');

        console.log(produits);


        res.end();
    });*/


    /*fs.unlink('./template/produit.txt',function(err){
        if (err) {
            throw err;
        }

        console.log("deleted !");
    })*/


    if (q.pathname === '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req,function(err,feilds,files){
            console.log(feilds);
            var oldpath = files.filetoupload.path;
            var newpath = 'C:/Users/tchou/Documents/formation fullstack js/12062020/template/'+files.filetoupload.name;
           fs.rename(oldpath,newpath,function(err){
               if (err) {
                   throw err;
               }

               console.log("uploaded");

               res.writeHead(200,{'content-type':'text/html'});

                res.write('<img src="./template/'+files.filetoupload.name+'" width="100%" />');
                
                res.end();
                })
        });
        
     
    }else{
        res.writeHead(200,{'content-type':'text/html'});

        res.write('<form action="fileupload" method="post" enctype="multipart/form-data"> ');
        res.write('<input type="file" name="filetoupload"  /><br/> ');
        res.write('<input type="text" name="key"  /><br/> ');
        res.write('<input type="submit"   /><br/> ');
        res.write('</form> ');
        res.end();
    }





    
}).listen(port);
console.log("server is listning on posr ",port);