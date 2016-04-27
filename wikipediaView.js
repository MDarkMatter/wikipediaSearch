

//--------Construct API
  $( "#submitButton" ).click(function() {
     var entry = document.getElementById('wikiSearch').value;
     var url = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrsearch=" + entry +  "&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&callback=?";
    getWiki(url);
  });

  //---------------Call API
  function getWiki(url){
    $.getJSON(url, function(data){
      console.log(data.query);
    });
  }
