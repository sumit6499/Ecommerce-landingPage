var mainImg = document.querySelector(".shirt");
var images = document.querySelectorAll(".shirts");
images[0].addEventListener("click", function change() {
    mainImg.setAttribute("src", "images/1.jpg");
    images[0].classList.toggle("active");
});
images[1].addEventListener("click", function change() {
    mainImg.setAttribute("src", "images/2.jpg");
    images[1].classList.toggle("active");
});
images[2].addEventListener("click", function change() {
    mainImg.setAttribute("src", "images/3.jpg");
    images[2].classList.toggle("active");
});
images[3].addEventListener("click", function change() {
    mainImg.setAttribute("src", "images/4.jpg");
    images[3].classList.toggle("active");
});
let n = 0;
function slide() {
    n++;
    if (n % 2 != 0) {

        document.getElementById("ham-btn").style.right = "0";
        document.getElementById("nav-links").style.display = "none";
        document.getElementById("hm").innerHTML = "X";
    }
    else {
        document.getElementById("hm").innerHTML = "\n < div ></div >\n < div ></div >\n < div ></div >\n  ";
    }

}

// var plus=document.getElementById("plus");
// var minus = document.getElementById("plus");
// var head=document.getElementById("incr");


let count = ["1", "2", "3", "4", "5", "6", "7", "8"]
let i = 0;
function inc() {
    i++;
    document.getElementById("incr").innerHTML = count[i];
}

function dcr() {
    i--;
    document.getElementById("incr").innerHTML = count[i];
}


var rate = document.getElementsByClassName("rate");
rate[0].addEventListener("click", function yellow() {
    rate[0].style.color = "yellow";
})
rate[1].addEventListener("click", function yellow() {
    rate[1].style.color = "yellow";
})
rate[2].addEventListener("click", function yellow() {
    rate[2].style.color = "yellow";
})
rate[3].addEventListener("click", function yellow() {
    rate[3].style.color = "yellow";
})
rate[4].addEventListener("click", function yellow() {
    rate[4].style.color = "yellow";
})
