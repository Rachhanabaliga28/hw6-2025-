var video;
// Page load - Initialize the video element and turn off autoplay and turn off looping.
window.addEventListener("load", function () {
	console.log("Good job opening the window")

	video = this.document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	video.load(); // this applies the autoplay and loop false properly

	document.querySelector("#volume").textContent = video.volume * 100 + "%";

});

// Play Button - Play the video and update the volume information.
document.querySelector("#play").addEventListener("click", function () {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").textContent = video.volume * 100 + "%";
});

// Pause Button - Pause the video.
document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video");
	video.pause();
});

// Slow Down - Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.
document.querySelector("#slower").addEventListener("click", function () {
	console.log("Slow Down");
	video.playbackRate *= 0.9;
	console.log("New speed is " + video.playbackRate);
});

// Speed Up - Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down. CHECK THIS!!  If you slow down three times and then speed up three times you should be within 5 digits of 100% again.
document.querySelector("#faster").addEventListener("click", function () {
	console.log("Speed Up");
	video.playbackRate /= 0.9;
	console.log("New speed is " + video.playbackRate);
}
);

// Skip Ahead - Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther. Log the current location of the video.
document.querySelector("#skip").addEventListener("click", function () {
	console.log("Skip Ahead");
	if (video.currentTime + 10 >= video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime += 10;
	}
	console.log("Current location of the video is " + video.currentTime);
});

// Mute - Mute/unmute the video and update the text in the button.
document.querySelector("#mute").addEventListener("click", function () {
	console.log("Mute Video");
	// Toggles the mute state of the video
	if (video.muted) {
		video.muted = false;
		this.textContent = "Mute";
	} else {
		video.muted = true;
		this.textContent = "Unmute";
	}
});
// Volume Slider - Change the volume based on the slider and update the volume information.
document.querySelector("#slider").addEventListener("input", function () {
	console.log("Change Volume");
	video.volume = this.value / 100;
	document.querySelector("#volume").textContent = video.volume * 100 + "%";
});
// Styled - Utilize the existing oldSchool class on the video element
document.querySelector("#vintage").addEventListener("click", function () {
	console.log("Old School");
	video.classList.add("oldSchool");
}
);
// Original - Remove the oldSchool class from the video.
document.querySelector("#orig").addEventListener("click", function () {
	console.log("Original");
	video.classList.remove("oldSchool");
}
);








