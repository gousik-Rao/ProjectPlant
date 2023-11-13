var news=false;
var sidebar = document.querySelector(".sidebar");
var menubar = document.getElementById("bars");
var closebars = document.getElementById("closenav");
var body=document.getElementById("body");


menubar.addEventListener("click", function (e) {
    e.preventDefault();
    sidebar.style.right = "0px";
});

closebars.addEventListener("click", function (e) {
    e.preventDefault();
    sidebar.style.right = "-600px";
  
});
var i=document.getElementById("i");
var news=document.querySelector(".news");
news.addEventListener("keyup",function(){
    // var newsValue=news.value
    if(news==""){
        i.style.visibility="hidden";
    }
    else{
        i.style.visibility="visible";
    }
})


var popup=document.querySelector(".popup");
var button1=document.querySelector(".btn1");
button1.addEventListener("click",function(e){
        e.preventDefault();
        if(news==true){
            popup.textContent="Subscription Successfull";
            popup.style.backgroundColor="rgba(127, 255, 212, 0.485)";
            popup.style.bottom="2%";
            popup.style.opacity="1";
        }
        else{
            popup.textContent="Error";
            popup.style.backgroundColor="red";
            popup.style.bottom="2%";
            popup.style.opacity="1";
            
        }
        setTimeout(function(){ 
            popup.style.bottom="-50%";
            popup.style.opacity="0";
        },3000 )

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

