$(document).ready(function(){
				 
	var killersGifs = {
		
		killerSearches: ["Freddy", "Jason", "Pennywise", "Ghost Face", "American Mary", "Chucky", "Bride of Chucky", "Candyman", "Cujo", "Hannibal", "Leatherface", "Michael Meyers", "Norman Bates", "Pinhead"],
		
		buttonLoop: function() {
			for (var i = 0; i < killersGifs.killerSearches.length - 1; i++) {
			var buttonM = $("<button class='dynGen'>" + killersGifs.killerSearches[i] + "</button>").click(killersGifs.divLoop);
			$("#buttons").append(buttonM);
			}
		},
		
		divLoop: function() {
			for (var i = 0; i < killersGifs.killerSearches.length - 1; i++) {
				//console.log(this.killerSearches[i]);
				var newDiv = $("<div class='gif-div'>");
				var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=B26sstJns2pZuNT5HiJpqS5FV8Su1sDd&q=" + killer + "&limit=10"
				var killer = killersGifs.killerSearches[i];
				//console.log(queryURL);
				$.ajax({
					url: queryURL,
					method: "GET"
				}).done(function(response) {
				   console.log(response);
					for (var x = 0; x < response.length - 1; x++) {
						var respData = response.data[x];
						var image = respData.images.fixed_height_small_still.url;
						var killerImg = $("<img>");
						killerImg.attr("src", image);
						killerImg.attr("alt", "Serial Killer still frame of gif");
						$("#append-img-div")
						$("#append-img-div").append(killerImg);
					
					};
				
				});
				
			};
		}
	};
	
	killersGifs.buttonLoop();
	
	
	
	
	
});
//CODE TO CREATE STILL IMAGE DIVS
