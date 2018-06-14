(function(){
	const close_cross = document.querySelector('#cross');
	const open_menu =  document.querySelector('.open_menu');
	const hamburger_open = document.querySelector('.hamburger');

	// close
	close_cross.addEventListener('click', function(){
		open_menu.style.display = 'none';
	});
	//close with esc
	addEventListener('keyup', function(e){
		if(e.keyCode == 27) open_menu.style.display = 'none'; 
	})
	;
	//open
	hamburger_open.addEventListener('click', function(){
		open_menu.style.display = 'flex';
	});
})();

