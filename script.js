let newsFill = false;
let sidebar = document.querySelector(".sidebar");
let menubar = document.getElementById("bars");
let closebars = document.getElementById("closenav");
let body = document.getElementById("body");

let newsLetter = document.querySelector(".newsletter");
let icon = newsLetter.querySelector("i");
let news = document.querySelector(".news");
let mailLabel = newsLetter.querySelector("label");

// Method to display the menu bar when the screen size reduces below 901 px
function toggleNavBar() {
    if (window.innerWidth < 1101) {
        menubar.style.display = "block";
    } else {
        menubar.style.display = "none";
        sidebar.style.right = "-60%"; // Ensure sidebar is hidden
    }
}
toggleNavBar();

window.addEventListener("resize", toggleNavBar);

menubar.addEventListener("click", function (e) {
    e.preventDefault();
    sidebar.style.right = "0%";
});

closebars.addEventListener("click", function (e) {
    e.preventDefault();
    sidebar.style.right = "-60%";
});

news.addEventListener("keyup", function() {
    let enteredValue = news.value;

    if (enteredValue == "") {
        icon.style.visibility = "hidden";
        mailLabel.style.visibility = "visible";
        newsFill = false;
    } else {
        icon.style.visibility = "visible";
        mailLabel.style.visibility = "hidden";
        newsFill = true;
    }
});

let popup = document.querySelector(".popup");
let button1 = document.querySelector(".btn1");

button1.addEventListener("click", function (e) {
    
    if (newsFill === true) {
        popup.textContent = "Subscription Successful";
        popup.style.backgroundColor = "#F2CFF8";
		popup.style.color = "#285B23"
        popup.style.top = "2%";
        popup.style.opacity = "1";
		
    } else if(newsFill === false){
		e.preventDefault();
		popup.style.color = "#F2CFF8"
        popup.textContent = "Enter e-mail ID";
        popup.style.backgroundColor = "red";
        popup.style.top = "2%";
        popup.style.opacity = "1";
    }

    //run line after 2 seconds
    //set timeout (What should happen, after how many  milliseconds)
    setTimeout(function () {
        popup.style.top = "-50%";
        popup.style.opacity = "0";
    }, 3000)
});

let box = document.querySelector(".boxes");
let destn = document.querySelector(".destn");
let seller = document.querySelector(".seller");

window.addEventListener("scroll", function () {
    let windowHeight = window.innerHeight;
    let boxTop = box.getBoundingClientRect().top;

    if (windowHeight > boxTop) {
        box.style.opacity = "1";
        destn.style.opacity = "1";
        seller.style.opacity = "1";
    } else {
        box.style.opacity = "0";
        destn.style.opacity = "0";
        seller.style.opacity = "0";
    }
});
