var newsFill=false;
var sidebar = document.querySelector(".sidebar");
var menubar = document.getElementById("bars");
var closebars = document.getElementById("closenav");
var body=document.getElementById("body");

menubar.addEventListener("click", function (e) {
    e.preventDefault();
    sidebar.style.right = "0%";
});

closebars.addEventListener("click", function (e) {
    e.preventDefault();
    sidebar.style.right = "-600px";
  
});


var newsLetter=document.querySelector(".newsletter");
var icon=newsLetter.querySelector("i");
var news=document.querySelector(".news");
var mailLabel=newsLetter.querySelector("label");

news.addEventListener("keyup",function(e){
    //user input value
    var enteredValue=news.value;

    if(enteredValue=="")
    //hide icon and show label
    {
        icon.style.visibility="hidden";
        mailLabel.style.visibility="visible";
        newsFill=false;
    }
    else
    //show icon and hide label
    {
        icon.style.visibility="visible";
        mailLabel.style.visibility="hidden";
        newsFill=true;
    }
})


var popup=document.querySelector(".popup");
var button1=document.querySelector(".btn1");

button1.addEventListener("click",function(e){
        //prevent default execution
        e.preventDefault();
        if(newsFill==true){
            popup.textContent="Subscription Successful";
            popup.style.backgroundColor="black";
            popup.style.bottom="2%";
            popup.style.left="43%";
            popup.style.opacity="1";
        }
        else{
            popup.textContent="Error";
            popup.style.backgroundColor="red";
            popup.style.bottom="2%";
            popup.style.opacity="1";
            
        }

        //run line after 2 seconds
        //set timeout (What should happen, after how many  milliseconds)
        setTimeout(function(){ 
            popup.style.bottom="-50%";
            popup.style.opacity="0";
        },2500 )

});


var box=document.querySelector(".box");
var destn=document.querySelector(".destn");
var seller=document.querySelector(".seller");

    window.addEventListener("scroll",function(){
        var windowheight=window.innerHeight;
        var boxtop=box.getBoundingClientRect().top;
        
        if(windowheight>boxtop){
            box.style.opacity="1";
            destn.style.opacity="1";
            seller.style.opacity="1";
        }
        else{
            box.style.opacity="0";
            destn.style.opacity="0";
            seller.style.opacity="0";
            // box.style.opacity="0";

        }
        
    
})

