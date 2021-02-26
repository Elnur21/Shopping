setTimeout(function(){
     let mother = document.querySelector('.mother');
    mother.classList.add("deactive"); 
}, 500);
let header = document.querySelector("header");
window.addEventListener("scroll", function(){
    let scrollTop = document.documentElement.scrollTop;
    if( scrollTop>410){
        header.classList.add("active");
    }
    else{
        header.classList.remove("active")
    }
    console.log(scrollTop)
});
