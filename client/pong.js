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
	c.rect(0,0,10,10);

})();
