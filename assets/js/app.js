var killersGifs = {

  killerSearches: ["Freddy", "Jason", "Pennywise", "Ghost Face", "American Mary", "Chucky", "Bride of Chucky", "Candyman", "Cujo", "Hannibal", "Leatherface", "Michael Meyers", "Norman Bates", "Pinhead"],

  buttonLoop: function() {
    for (var b = 0; b < killersGifs.killerSearches.length - 1; b++) {
      var buttonM = $("<button class='dynGen'>").text(killersGifs.killerSearches[b]).attr("data-index", killersGifs.killerSearches[b]);
      $("#buttons").append(buttonM);
    }
  },

  divLoop: function(event) {
    for (var i = 0; i < killersGifs.killerSearches.length - 1; i++) {
      //console.log(this.killerSearches[i]);
      //var newDiv = $("<div class='gif-div'>");
      var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=B26sstJns2pZuNT5HiJpqS5FV8Su1sDd&q=" + killer + "&limit=10"

      var killer = killersGifs.killerSearches[i];
      //console.log(queryURL);
      $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
        console.log(response.data.length);
        for (var x = 0; x < response.data.length - 1; x++) {
          var respData = response.data[x];
          var image = respData.images.fixed_height_small_still.url;
          var rating = respData.rating;

          var dynDiv = $("<div class='dyn-div'></div>");
          var killerImg = $("<img>");

          killerImg.attr("src", image);
          killerImg.attr("alt", "Serial Killer still frame of gif");

          dynDiv.append("Rating: " + rating);
          dynDiv.append(image);


          $("#append-img-div").prepend($(dynDiv));

        };

      });

    };
  },

  userPush: function() {
    var userInput = $("input[type='text']").val().trim();
    console.log(userInput);
    killersGifs.killerSearches.push(userInput);
    console.log(killersGifs.killerSearches);
  }

};

killersGifs.buttonLoop();

$("#killer-add-submit").on("click", function(event) {
  event.preventDefault();
  killersGifs.userPush();
});

$(document).on("click", "button.dynGen", function(event) {
  event.preventDefault();
  $("#append-img-div").empty();
  killersGifs.divLoop(event);
});