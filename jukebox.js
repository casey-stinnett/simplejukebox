function Jukebox() {
	this.audio = new Audio();
	this.audio.src = 'bright.mp3';

	this.getName = function(){
		return this.audio.src.substring(this.audio.src.lastIndexOf('/') + 1, this.audio.src.lastIndexOf('.'));
	}
	document.getElementById('playing').innerText = this.getName();
	this.songName = this.getName();

	this.play = function(){
		if (this.audio.paused) {
			this.audio.play();

		} else {
			this.audio.pause();
		}
	}
	this.stop = function(){
		this.audio.pause();
		this.audio.currentTime = 0;
	}
	this.loadSong = function(songPath){
		this.audio.src = songPath;
		this.songName = this.getName();
		this.play();
		document.getElementById('add-song').blur();
		document.getElementById('playing').innerText = this.songName;
	}
	
}

document.addEventListener('DOMContentLoaded', function(){
	var juke = new Jukebox();

	document.addEventListener('keyup', function(e){
		if (e.key === ' '){
			juke.play();
		}
	});

	document.getElementById('add-song').addEventListener('change', function(){
		var path = this.value.replace('C:\\fakepath\\', '');
		juke.loadSong(path);
	});
});