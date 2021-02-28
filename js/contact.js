let inputName = document.querySelector("form>input");
if (inputName = null){

}




let pElements = document.querySelectorAll("li>p");
let aElements = document.querySelectorAll(".accordions ul li a");
for(var aElement of aElements){
    aElement.addEventListener("click", function(){
        changeDisplay(this);
        var dataId = this.getAttribute("data-id");
        for(var pElement of pElements){
            pElement.classList.remove("DisplayBlock");
            pElement.style.transition = "all 1s ease-in-out";
        }
        for(var pElement of pElements){
            if(pElement.getAttribute("data-number") == dataId){
                pElement.classList.add("DisplayBlock");
                pElement.style.transition = "all 1s ease-in-out";
            }
        }

    });
}
function changeDisplay(list){
    for(var x of aElements){
        x.classList.remove("DisplayBlock");
        x.style.transition = "all 1s ease-in-out"
    }
    list.classList.add("DisplayBlock");
    list.style.transition = "all 1s ease-in-out"
}


function clickDown(x){
    x.style.position = "relative";
    x.style.top = "100px";
}