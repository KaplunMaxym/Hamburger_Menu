var hamburger = document.getElementById('hamburger');
var rotate_line = document.getElementById('rotate_line');
var up_line = document.getElementById('up_line');
var down_line = document.getElementById('down_line');
var menu_mobile = document.getElementById('menu_mobile');
menu_mobile.style.cssText = "right: -100%;";
function appear_menu(){
  up_line.style.cssText = "transition: all 0.5s ease-out; transform: rotate(-30deg)  scaleX(0.7) translate(0%, 300%); ";
  down_line.style.cssText = "transition: all 0.5s ease-out; transform: rotate(30deg) scaleX(0.7) translate(0%, -300%);";
  rotate_line.style.cssText = "transition: all 0.4s ease-out; opacity: 0;";
}
function disapear_menu(){
  up_line.style.cssText = "transition: all 0.5s ease-out; transform: rotate(0deg);";
  down_line.style.cssText = "transition: all 0.5s ease-out; transform: rotate(0deg);";
  rotate_line.style.cssText = "transition: all 0.4s ease-out; opacity: 1;";
}
hamburger.addEventListener("click", function(){
  if (menu_mobile.style.cssText == "right: -100%;") {
    menu_mobile.style.cssText = "right: 0%;";
    hamburger.style.cssText = "transition: all 0.5s ease-out; transform: rotate(180deg);";
  }
  else{
    menu_mobile.style.cssText = "right: -100%;";
    hamburger.style.cssText = "transition: all 0.5s ease-out; transform: rotate(360deg);";
  }
});
hamburger.addEventListener("mouseover", function(){
  if (menu_mobile.style.cssText == "right: -100%;" || menu_mobile.style.cssText == "right: 0%;") {
    appear_menu();
  }
  if  (menu_mobile.style.cssText == "right: -100%;") {
    hamburger.addEventListener("mouseout", function(){
      disapear_menu();
    });
  }
});









// ass
