window.onload = function() {

var clickIt = document.getElementById("button");
    
clickIt.addEventListener("click", function(){
    
    var textToShow = document.getElementsByClassName("show_me");
    
    for (var a = 0; a < textToShow.length; a++) {
          textToShow[a].style.display = "block";
    }
    
});
    
}; 