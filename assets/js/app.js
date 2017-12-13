$(document).ready(function() {

lastClick = [];

	
var killersGifs = {

  killerSearches: ["Freddy Krueger", "Jason Voorhees", "Pennywise", "Ghostface", "American Mary", "Chucky", "Bride of Chucky", "The Candyman", "Cujo", "Hannibal", "Leatherface", "Michael Myers", "Norman Bates", "Pinhead"],

  buttonLoop: function() {
    for (var b = 0; b < killersGifs.killerSearches.length - 1; b++) {
      var buttonM = $("<button class='dynGen'>").text(killersGifs.killerSearches[b]).attr("data-index", killersGifs.killerSearches[b]);
      $("#buttons").append(buttonM);
    }
  },

  divLoop: function(click) {

      var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=B26sstJns2pZuNT5HiJpqS5FV8Su1sDd&q=" + lastClick + "&limit=10"

      $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {

		  
        for (var i = 0; i < response.data.length; i++) {
        	var respData = response.data[i];
        	var image = respData.images.fixed_height_still.url;
			var gif = respData.images.fixed_height.url;
        	var rating = respData.rating;

        	var dynDiv = $("<div class='dyn-div'>");

        	var killerImg = $("<img class='still-image'>");

        	killerImg.attr("src", image);
        	killerImg.attr("alt", "Serial Killer still frame of gif");
			killerImg.attr("data-gif", gif);
			killerImg.attr("class", "killerImg");
			killerImg.attr("data-index", i);
			killerImg.attr("data-img", image);

        	dynDiv.append("<p> Rating: " + rating + "</p>");
        	dynDiv.append(killerImg);

        	$("#append-img-div").prepend($(dynDiv));
			};

      	});
  	},
	userPush: function () {
     	var userInput = $("input[type='text']").val().trim();
        //console.log(userInput);
        killersGifs.killerSearches.push(userInput);
        var buttonU = $("<button class='dynGen'>").text(userInput).attr("data-index", userInput);
        $("#buttons").append(buttonU);
        //console.log(killersGifs.killerSearches);
  	}
};

killersGifs.buttonLoop();

$("#killer-add-submit").on("click", function(event) {
	event.preventDefault();
	killersGifs.userPush();
});

$(document).on("click", "button.dynGen", function(event) {
  	var currentIndex = $(this).attr("data-index");
	lastClick.push(currentIndex);
	//console.log(currentIndex);
	event.preventDefault();
	$("#append-img-div").empty();
	killersGifs.divLoop();
	lastClick = [];
});
	
$(document).on("click", ".killerImg", function(event) {
	//console.log("test");
	var currentIn = $(this).attr("data-index");
	var tempUrl = $(this).attr("data-gif");
	var tempUrl2 = $(this).attr("data-img");
	//console.log(currentIn);
	//console.log(tempUrl);
	if ($(this).attr("src") == tempUrl2) {

	$(this).attr("src", tempUrl);
	}
	else if ($(this).attr("src") == tempUrl) {
	$(this).attr("src", tempUrl2);
	};
});

		
});