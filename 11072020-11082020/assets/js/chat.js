var messages = [
    {
        text:"hello first message",
        sender:true
    },
    {
        text:"hello second message",
        sender:true
    },
    {
        text:"hello  message",
        sender:false
    },
    {
        text:"hello first ",
        sender:false
    },
    {
        text:" first message",
        sender:true
    },

    
];


var messagesC = document.getElementsByClassName("messageholder");

messagesC.forEach(element => {
    console.log(element);
});



initMessages();

var btnSend = document.getElementById("sendbtn");

var blockMessagesG = document.getElementById("messages");

function initMessages(){
    var blockMessages = document.getElementById("messages");
var blockMessagesContent ="";

messages.forEach(message => {
    var blocMessage ="";

    switch (message.sender) {
        case true:
            blocMessage = '<div class="messageholder"><div class="message message-sent">'+message.text+'</div></div>';
            break;

            case false:
            blocMessage = '<div class="messageholder"><div class="message message-recu">'+message.text+'</div></div>';
            break;
            
    }

    // insert the message block in messages block

    // first we get the old data
    blockMessagesContent+=blocMessage;
    

});

blockMessages.innerHTML = blockMessagesContent;

//add script on added elements

}




var myInput = document.getElementById("myinput");
var myStat = document.getElementById("status");




myInput.addEventListener('keyup',function(event){


    var val = event.target.value;
    
    if (val!=="") {
        blockMessagesG.style.height = " calc( 100vh - 78px)";

        myStat.innerHTML="Typing...";
    }else{
        blockMessagesG.style.height = " calc( 100vh - 54px)";

        myStat.innerHTML="";
    }




})


btnSend.addEventListener('click',function(e){
    let val = myInput.value;

    if (val !== "") {
        //send
        messages.push({
            text:val,
            sender:true
        });

        initMessages();

        blockMessagesG.style.height = " calc( 100vh - 54px)";

        myStat.innerHTML="";

        myInput.value="";

    }else{
        alert("Please type somrthing first.");
    }
    
})