var slideItem = 0;
window.onload = function(){
    setInterval(passarSlide, 3000);
    var y = document.getElementById("slideshow").offsetWidth;
    var x = document.getElementsByClassName("slide");
    for (var i in x){
        x[i].style.width = y + 'px';
    }
}
function passarSlide(){
    var x = document.getElementById("slideshow").offsetWidth;
    if(slideItem >= 3){
        slideItem = 0;
    }
    else{
        slideItem++;
    }
    document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(x*slideItem)+"px";
}
function mudarSlide(pos){
    slideItem = pos;
    var x = document.getElementById("slideshow").offsetWidth;
    document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(x*slideItem)+"px";
}
function toggleMenu(){
    var menu = document.getElementById("menu");
    if (menu.style.display == 'none' || menu.style.display == ''){
        menu.style.display = "block";
    }
    else{
        menu.style.display = "none";
    }
}