$(document).ready(function() {

lastClick = [];

	
var killersGifs = {

  killerSearches: ["Freddy Krueger", "Jason Voorhees", "Pennywise", "Ghostface", "American Mary", "Chucky", "Bride of Chucky", "The Candyman", "Cujo", "Hannibal", "Leatherface", "Michael Meyers", "Norman Bates", "Pinhead"],

  buttonLoop: function() {
    for (var b = 0; b < killersGifs.killerSearches.length - 1; b++) {
      var buttonM = $("<button class='dynGen'>").text(killersGifs.killerSearches[b]).attr("data-index", killersGifs.killerSearches[b]);
      $("#buttons").append(buttonM);
    }
  },

  divLoop: function(click) {
    //for (var i = 0; i < killersGifs.killerSearches.length - 1; i++) {
      //console.log(this.killerSearches[i]);
	  //var killer = killersGifs.killerSearches[i];
      var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=B26sstJns2pZuNT5HiJpqS5FV8Su1sDd&q=" + lastClick + "&limit=10"

     
      //console.log(queryURL);
      $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
        console.log(response.data);
        for (var x = 0; x < response.data.length - 1; x++) {
          var respData = response.data[x];
          var image = respData.images.fixed_height_small_still.url;
		  var gif = respData.images.fixed_height_small.url;
          var rating = respData.rating;

          var dynDiv = $("<div class='dyn-div'>");
		  dynDiv.attr("data-index", response.data[x]);
	
          var killerImg = $("<img class='still-image'>");

          killerImg.attr("src", image);
          killerImg.attr("alt", "Serial Killer still frame of gif");
		 

          dynDiv.append("<p> Rating: " + rating + "</p>");
          dynDiv.append(killerImg);


          $("#append-img-div").prepend($(dynDiv));
		
		  

			};

      	});

	
  },
  

  userPush: function () {
        var userInput = $("input[type='text']").val().trim();
        console.log(userInput);
        killersGifs.killerSearches.push(userInput);
        var buttonU = $("<button class='dynGen'>").text(userInput).attr("data-index", userInput);
        $("#buttons").append(buttonU);
        console.log(killersGifs.killerSearches);
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
	console.log(currentIndex);
	event.preventDefault();
	$("#append-img-div").empty();
	killersGifs.divLoop();
	lastClick = [];
});
	

		
});