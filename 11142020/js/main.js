
/*
var gotoprofilebtn  = document.getElementById("gotoprofile");


try {
    gotoprofilebtn.addEventListener('click',function(){
        var isConnected ;
        if ( localStorage.getItem('token') ) {
            window.location="home.html";
        }else{
            // not connected
            alert("Sorry, auth first");
            window.location ="auth.html";
    
        }
    
    
    
    });
} catch (error) {
    console.log(error);
}

/************************auth******************** 

var connectbtn = document.getElementById("connect");


connectbtn.addEventListener("click",function(){
    localStorage.setItem("token","123456789");
    window.location = "home.html";
})*/
/*

if (navigator.geolocation) {
    
    /*navigator.geolocation.getCurrentPosition((position)=>{
        console.log(position);
        
    },(error)=>{
        console.log(error);
    })


    var x = navigator.geolocation.watchPosition((position)=>{
        console.log(position);
        
    },(error)=>{
        console.log(error);
    });

    navigator.geolocation.clearWatch(x);
}

*/


/****************** Promise  ******************* */

/*
async function instruction2(){
    var instruction2 = new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Instruction 2");
        },2000);
    })

    return await instruction2;
}



console.log("Instruction 1");

instruction2().then((retour)=>{
    console.log(retour);
    //
}).catch((error)=>{

})


*/



/*var instruction2Retour = instruction2.then((retour)=>{
    console.log(retour);

    console.log("Instruction 3");
},(error)=>{

})*/











/*
async function firstAsync() {
    let promise = new Promise((res, rej) => {
        setTimeout(() => res("Now it's done!"), 3000)
    });

    // wait until the promise returns us a value
    let result = await promise; 
  
    // "Now it's done!"
    alert(result); 
    }

firstAsync();*/






/**********************  Observable ********************** */

/*
class Observable {
    
    constructor(functionThatTakesObserver){
      this._functionThatTakesObserver = functionThatTakesObserver;
    }

    subscribe(observer) {
      return this._functionThatTakesObserver(observer)
    }
}

let myObservable = new Observable(observer => {
  setInterval(() => {
    observer.next("got data!")
    observer.complete()
  }, 1000)
})

let myObserver = {
  next(data) {
    console.log(data)
  },
  error(e) {
    console.log(e)
  },
  complete() {
    console.log("request complete")
  }
}

myObservable.subscribe(myObserver)*/



