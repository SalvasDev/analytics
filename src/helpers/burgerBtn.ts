export function burgerBtn() {   
  // Get id burger menu  
  showingMenu();     
}



function showingMenu() {  

  // Working with burger menu event
  const contMenu = document.getElementById('menu__bg');
  const showMenu = document.getElementById('showMenuMobile');
  const btnBurg = document.getElementById('btn-burg');
  const btnClose = document.getElementById('close');

  contMenu?.classList.add('active__container');
  showMenu?.classList.add('active__menu');
  btnBurg?.classList.add('hide-burger');
  btnClose?.classList.add('show-x');
  btnClose?.classList.add('close__fixed'); 

}



