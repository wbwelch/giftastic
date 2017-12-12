$(document).ready(function(){
				 
	var killersGifs = {
		
		killerSearches: ["Freddy", "Jason", "Pennywise", "Ghost Face", "American Mary", "Chucky", "Bride of Chucky", "Candyman", "Cujo", "Hannibal", "Leatherface", "Michael Meyers", "Norman Bates", "Pinhead"],
		
		divLoop: function() {
			for (var i = 0; i < this.killerSearches.length - 1; i++) {
				console.log(this.killerSearches[i]);
				var newDiv = $("<div class='gif-div'>");
				var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=B26sstJns2pZuNT5HiJpqS5FV8Su1sDd&q=" + "cats" + "&limit=10"
				console.log(queryURL);
			};
		}
	};
	
	killersGifs.divLoop();
	
});