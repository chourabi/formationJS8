console.log("js is working successfully");
/*
document.getElementById("mypara").innerHTML= "hello world";
document.getElementsByClassName("mypara") 
*/


var arr = [
    {
        produit:"samsung a30",
        date: new Date("2020-11-1"),
        amount:50
        
    },
    {
        produit:"samsung a30",
        date: new Date("2020-11-5"),
        amount:4
        
    },
    {
        produit:"samsung a30",
        date: new Date("2020-11-4"),
        amount:18
        
    },
    {
        produit:"samsung a30",
        date: new Date("2020-11-3"),
        amount:1
        
    },
    {
        produit:"samsung a30",
        date: new Date("2020-11-2"),
        amount:55
        
    },
    
    
];

arr.sort( (a , b) => a.amount- b.amount  );


console.log(arr);
console.log(x);










