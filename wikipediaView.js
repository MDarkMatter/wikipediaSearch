
//--------Construct API

function getSearch(entry){
  var url = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrsearch="+ entry + "&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max";
  alert(url);
  //constructPage(url);
}

function constructPage (url) {
  $.getJSON(url, function (obj){
    for (var i = 1; obj.query.pages.index[i] <= 10; i++){
      $('.results').append('<a href="https://en.wikipedia.org/?curid=" + obj.query.pages.pageid'><h3>obj.query.pages.title</h3>)
    }
  })
}

https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrsearch=sublime&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max
