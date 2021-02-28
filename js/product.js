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
let row1 = document.querySelector(".row1");
let row1 = document.querySelector(".row2");
let a = [featured1, featured2, flash1, flash2, mute1, mute2];
allProduct.addEventListener("click", function(){
    for (var i of a){
        if(allProduct.style.color != "red"){
            i.style.display = "inline";
        }
    }
});
function displays(a,b,c,d,y,e) {
    
    b.style.display = "inline";
    a.style.display = "inline";
    
    c.style.display = "none";
    
    d.style.display = "none";
    
    y.style.display = "none";
    
    e.style.display = "none";
}
// featured.addEventListener("click", function(){
//     alert
// })


// allProduct.addEventListener("click", function(){
    
// });
