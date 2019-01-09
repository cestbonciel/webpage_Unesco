/*gnb메뉴*/
function afterLoading(){
		var gnbWrap = document.querySelector('#header-bottom nav');
		var mainMenu = document.querySelectorAll('#header-bottom nav > ul > li > a');
		var bgMenuOpen = document.querySelector('#header-bottom .bg-menu-open');

		for (var i in mainMenu){
			mainMenu[i].onmouseover = mainMenu[i].onfocus = mainMenuHandler;
		}
		function mainMenuHandler(){
			gnbWrap.setAttribute('class','on');
			bgMenuOpen.setAttribute('class','bg-menu-open on');
		}
		gnbWrap.onmouseleave = gnbMouseleaveHandler;

		function gnbMouseleaveHandler(){
			gnbWrap.setAttribute('class','');
			bgMenuOpen.setAttribute('class','bg-menu-open');
		}
	}
	if (window.addEventListener){
	  window.addEventListener('load',afterLoading);
	} else {
	  window.addEventListener('onload',afterLoading);
	} 