document.addEventListener("DOMContentLoaded", function () {
	var btn = document.querySelector('.btn'),
		menuLeft = document.querySelector('.menuLeft'),
		blackScreen = document.querySelector('.blackScreen');
	console.log(btn + menuLeft + blackScreen);	

	btn.onclick = function(){
		blackScreen.classList.add('showBlackUp');
	}
}, false);