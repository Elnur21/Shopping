let allProduct = document.querySelector(".allProduct");
let featured = document.querySelector(".featured");
let flash = document.querySelector(".flash");
let minute = document.querySelector(".minute");
let featured1 = document.querySelector(".featured1");
let featured2 = document.querySelector(".featured2");
let flash1 = document.querySelector(".flash1");
let flash2 = document.querySelector(".flash2");
let mute1 = document.querySelector(".mute1");
let mute2 = document.querySelector(".mute2");
let a = [featured1, featured2, flash1, flash2, mute1, mute2];
allProduct.addEventListener("click", function(){
    for (var i of a){
        if(allProduct.style.color != "red"){
            i.style.display = "inline-block";
        }
    }
});
function displays(a,b,c,d,y,e) {
    a.style.display = "inline-block";
    b.style.display = "inline-block";
    c.style.display = "none";
    d.style.display = "none";
    y.style.display = "none";
    e.style.display = "none";
    b.classList.add("displays");
    a.classList.remove("displays");
    c.classList.remove("displays");
    d.classList.remove("displays");
    y.classList.remove("displays");
    e.classList.remove("displays");
}