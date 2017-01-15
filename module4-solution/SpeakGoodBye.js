(function(window) {

	var byeSpeaker = {};

	// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
	var speakWord = "Good Bye";

	byeSpeaker.speak = function speak(name) {
	  console.log(speakWord + " " + name);
	}

	window.byeSpeaker = byeSpeaker;

})(window);