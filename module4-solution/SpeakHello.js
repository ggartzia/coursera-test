(function(window) {

	var helloSpeaker = {};

	// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
	var speakWord = "Hello";

	helloSpeaker.speak = function speak(name) {
	  console.log(speakWord + " " + name);
	}

	window.helloSpeaker = helloSpeaker;

})(window);
