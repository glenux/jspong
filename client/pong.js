(function(){
	var canvasDom = document.getElementById("jeu");
	var c = canvasDom.getContext("2d");
	
	c.fillStyle="#000";
	c.fillRect(0,0,100,100);
	
	function createRaquette(){
	
		return {
			
		};
	}
	
document.addEventListener( 'touchstart', function ( event ) {
        event.preventDefault();
        for ( var i = 0; i < event.touches.length; i++ ) {
            console.log('start'+event.touches[i].pageX,
            event.touches[i].pageY);
        }
    }, false );
    document.addEventListener( 'touchmove', function ( event ) {
        event.preventDefault();
        for ( var i = 0; i < event.touches.length; i++ ) {
            console.log('move'+event.touches[i].pageX,
            event.touches[i].pageY);
        }
    }, false );	
})();
