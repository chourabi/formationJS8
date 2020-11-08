console.log("js is working successfully");
/*
document.getElementById("mypara").innerHTML= "hello world";
document.getElementsByClassName("mypara") 
*/

/************************** sort array of obj date**************************** 
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
        amount:9
        
    },
    {
        produit:"samsung a30",
        date: new Date("2020-11-2"),
        amount:55
        
    },
    
    
];

arr.sort()

console.log(arr);

arr.sort( (a , b) => a.date.getTime()- b.date.getTime()  );


console.log(arr);*/

/************************************************************************************* */

var arr  = [
    {
        title:"product",
        price:180
    },
    {
        title:"product",
        price:50
    },
    {
        title:"product",
        price:60
    },
    {
        title:"product",
        price:200
    },
    {
        title:"product",
        price:500
    },
    
];

/***  filter array

var newArr = arr.filter((a)=>{
   if (a.price < 100) {
       return a;
   }

})

*/


/*********************loops and confitions **************************** 


if (condition) {
    
}

switch (key) {
    case value:
        
        break;

    default:
        break;
}

if (condition) {
    
} else {
    
}


if (condition) {
    
} else if (  ) {
    
}else{

}

try {
    
} catch (ex) {
    
}




var isLoading = false;

/*var msg ="";

if (isLoading) {
 msg = "Loading..."   
}else{
    msg = "Welcome";
}

var msg = isLoading ? "Loading..." : "welcome";


console.log(msg);*/

/*
var x = 10 ;

if (x === "10") {
    console.log("temchi");
}else{
    console.log("temchich");
}*/

/*
var x = 10;

// == if forbiden => ===
switch (x) {
    case "10":
        console.log("ok");
        break;


}*/

/*
//let a = "hello";
var b = "world";

console.log(window.a);
console.log(window.b);


{
    let a = "x";
    console.log(a);
}

console.log(a);
*/


/*
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
    
}


while (condition) {
    //do                    0
}

do {
    // instruction         +1
} while (condition);



var arr = [];

arr.forEach(element => {
    
});

*/

/************************************* events ************************************ */


var square = document.getElementById("square");

//square.style.backgroundColor = "red";

square.addEventListener("click",function(event){
    this.style.width = "100%";
    this.style.height = "100vh";
})











