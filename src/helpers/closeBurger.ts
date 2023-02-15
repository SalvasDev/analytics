export function closeBurger() {   
  // Get id burger menu  
  hideMenu();     
}


function hideMenu () {

  const contMenu = document.getElementById('menu__bg');
  const showMenu = document.getElementById('showMenuMobile');
  const btnBurg = document.getElementById('btn-burg');
  const btnClose = document.getElementById('close');

  contMenu?.classList.remove('active__container');
  showMenu?.classList.remove('active__menu');
  btnBurg?.classList.remove('hide-burger');
  btnClose?.classList.remove('show-x');
  btnClose?.classList.remove('close__fixed'); 


}

