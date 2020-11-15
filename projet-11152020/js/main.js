
/*var mainbtn = document.getElementById("mainbtn");
var reset = document.getElementById("reset");

mainbtn.addEventListener("click",function(e){

    var val1 = document.getElementById("input1").value;
    var val2 = document.getElementById("input2").value;

    //bloc des erreurs
    var bloc1 = document.getElementById("error-input1");
    var bloc2 = document.getElementById("error-input2");

    //bloc result
    var result = document.getElementById("result");
    

    console.log(val1,val2);


    if (val1 == "") {
        bloc1.innerHTML="<small>erreur, champs requis !</small>";

    }else{
        bloc1.innerHTML="";

        if (val2 == "") {
            bloc2.innerHTML="<small>erreur, champs requis !</small>";
            
        }else{
            bloc2.innerHTML="";

            console.log("ready to calculate");

            var op = document.getElementById("operation").value;

            // switch values from chars to numbers
            val1 = parseFloat(val1);
            val2 = parseFloat(val2);
            
            
            

            switch (op) {
                case "+":
                    result.innerHTML = val1+val2;
                    break;

                case "*":
                    result.innerHTML = val1*val2;
                    break;
                
                case "-":
                    result.innerHTML = val1-val2;
                    break;

                    case "/":
                        result.innerHTML = val1/val2;
                        break;    
            
                default:
                    break;
            }



        }
    }

})


reset.addEventListener('click',function(){
    document.getElementById("input1").value="";
    document.getElementById("input2").value="";
    document.getElementById("result").innerHTML="";
    document.getElementById("operation").value="+";

});



/* file input*/
/*
var file = document.getElementById("file");

file.addEventListener('change',function(e){
    console.log(e);
    //
    console.log(e.target.files);

    readURL(e.target);

    var img  =  document.getElementById("preview");
    


});


function readURL(input) {
    var img  =  document.getElementById("preview");
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      
      reader.onload = function(e) {
        img.setAttribute('src',e.target.result)
      }
      
      reader.readAsDataURL(input.files[0]); // convert to base64 string
    }
  }*/
  

  var counter = 0;

  var products = [
    { id:1, category:0,  title:"HP pavillon", price:2500, image:"https://images-na.ssl-images-amazon.com/images/I/81LaRDm7leL._AC_SL1500_.jpg" },
    { id:2, category:1,  title:"HP serie 2 ", price:1500, image:"https://images-na.ssl-images-amazon.com/images/I/61Srnd0L8YL._AC_SX679_.jpg" },
    { id:3 ,category:1,  title:"HP serie 3", price:1000, image:"https://thegoodguys.sirv.com/products/50068094/50068094_655887.PNG?scale.height=505&scale.width=773&canvas.height=505&canvas.width=773&canvas.opacity=0&q=90" },


  ];

  var slectedCategoryG = "all";
  var maxpriceG = 2500;



  function initProductHTML(){

    var blocDesProduit ="";

      products.map((produit)=>{

        var blocProduit ='<div class="col-sm-4 my-2">';
        blocProduit+='<div class="card" style="width: 100%">';
        blocProduit+='<img class="card-img-top" src="'+produit.image+'" alt="Card image cap">';
        blocProduit+='  <div class="card-body">';
        blocProduit+='<h5 class="card-title">'+produit.title+'</h5>';
        blocProduit+='<p class="card-text"> ' + ( false ? '<button  class="btn btn-primary addToCart" onclick="addToCart('+produit.id+')" > add to cart</button>' : ' already in cart'  )  +  '  price : '+produit.price+'<br/> ' +  (produit.category == 0 ? "NEW" : "OLD" )   +  ' </p> </div></div></div>';


        if (produit.price <= maxpriceG  ) {
            if (slectedCategoryG == "all") {
                blocDesProduit+=blocProduit;
            }else{
                if (produit.category == slectedCategoryG) {
                    blocDesProduit+=blocProduit;
                }
            }
        }

      });

      if (blocDesProduit == "" ) {
          blocDesProduit = " <h1>No products to show  &#129409;</h1> ";
      }
      var listproducts = document.getElementById("listproducts").innerHTML = blocDesProduit;
  }

  initProductHTML();



  var pricerange = document.getElementById("pricerange");
  var maxprice = 2500;

  pricerange.addEventListener("change",function(e){

    var percent = parseInt(e.target.value);

     var toPutValue = (2500 * percent ) / 100;

    document.getElementById("pricerangevalue").innerHTML = toPutValue;
    maxpriceG = toPutValue;
    
    initProductHTML();

    
  })

  var categorySearch = document.getElementById("category");

  categorySearch.addEventListener('change',function(e){
    slectedCategoryG = e.target.value;
    initProductHTML();
  });


  function addToCart(id){
    var cartItems = localStorage.getItem('items') != null ? localStorage.getItem('items').split(",") : [];

    // test if id already exisit items

    cartItems.push(id);

    localStorage.setItem('items',cartItems);


    updateUICart();
    
  }

  function updateUICart(){
      document.getElementById("counter").innerHTML = '( '+getCartLength()+' )';
  }

  function getCartLength(){
    var cartItems = localStorage.getItem('items') != null ? localStorage.getItem('items').split(",") : [];
    return cartItems.length;
  }
  

  updateUICart();