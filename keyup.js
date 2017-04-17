document.onkeyup = keyUp;
function keyUp(e){
	currKey=e.keyCode||e.which||e.charCode;
	switch(currKey)
	{
		case 37:app.left();break;
		case 38:app.up();break;
		case 39:app.right();break;
		case 40:app.down();break;
	}
}