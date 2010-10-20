(function(){
	if ("WebSocket" in window) {
		var ws = new WebSocket("ws://example.com/service");
		ws.onopen = function() {
			// Web Socket is connected. You can send data by send() method.
			ws.send("message to send"); ....
		};
		ws.onmessage = function (evt) { var received_msg = evt.data; ... };
		ws.onclose = function() { // websocket is closed. };
	} else {
		// use Socket.io instead
	}

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
