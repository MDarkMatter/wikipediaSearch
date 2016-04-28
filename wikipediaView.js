

//--------Construct API
  $( "#submitButton" ).click(function() {
     var entry = document.getElementById('wikiSearch').value;
     var url =
      "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrsearch=" + entry +  "&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&indexpageids=1&pageids=&callback=?";
    getWiki(url);
  });

  //---------------Call API
  function getWiki(url){
    $.getJSON(url, function(data){
          var pageid = data.query.pageids[0];
          //       for (var key in data) {
          //   if (data.query(key)) {
          //     alert(key + " -> " + p[key]);
          //   }
          // }
        console.log(data.query.pages[pageid].title);
    });
  }
