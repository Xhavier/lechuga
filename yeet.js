function dropbutton() {
	document.getElementById("myList").classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches(".button2")) {
		var drop = document.getElementsById("mtList");
		var i;
		for (var i = 0; i < drop.length; i++) {
			var openDrop = drop[i];
			if (openDrop.classList.contains("show")) {
				openDrop.classList.remove("show");
			}
		}
	}
}
