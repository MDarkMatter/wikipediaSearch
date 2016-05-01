//--------Get Entry From Form
$("#submitButton").click(function() {
    var entry = document.getElementById('wikiSearch').value;
    getWiki(entry);
});

//---------------Call API

function getWiki(entry) {
    $.ajax({
        url: "https://en.wikipedia.org/w/api.php",
        jsonp: "callback",
        dataType: "jsonp",
        data: {
            action: "opensearch",
            search: entry,
            limit: "10",
            format: "json"
        },
        success: function(data) {
            for (var i = 0; i < data[1].length; i++) {
                $('.results').append('<div class"return"><a href="' + data[3][i] + '">' + data[1][i] + "</a></div>");

            }
        }
    });

}
