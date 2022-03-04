function openNav() {
    $(".menu-overlay").fadeIn(500);
  document.getElementById("mySidenav").style.width = "70%";
}

function closeNav() {
    $(".menu-overlay").fadeOut(500);
  document.getElementById("mySidenav").style.width = "0";
}        
       
$(".menu-overlay").click(function(event) {
  $(".menu-overlay").fadeOut(500);
    closeNav();
});
        