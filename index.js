var moreBtn = document.querySelector(".see-more");
var lessBtn = document.querySelector(".see-less");
var sectTwo = document.querySelector(".dis-click");


moreBtn.addEventListener("click", function(){
    sectTwo.style.display = "flex";
})

lessBtn.addEventListener("click", function(){
    sectTwo.style.display = "none";
})

