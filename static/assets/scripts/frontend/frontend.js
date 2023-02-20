// var mobileNav = document.getElementById ('mobileNav');
// var menuIcon = document.getElementById ('menuIcon');
// var menuClose = document.getElementById('menuClose')
// menuIcon.addEventListener('click', ()=>{
//     mobileNav.style.display = "block";
//     menuIcon.style.display="none";
//     menuClose.style.display = "block";
// });
// menuClose.addEventListener('click', ()=>{
//     console.log('hi');
// });


var sidemenu = document.getElementById("sidemenu");
function openmenu(){
 sidemenu.style.right= "0";
}
function closemenu(){
 sidemenu.style.right ="-300px";
}