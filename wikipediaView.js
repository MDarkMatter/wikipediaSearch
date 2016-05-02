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

                $('<a href=' + data[3][i] + '><div class="returnResults well"><h3>' + data[1][i] + '</h3><p>' + data[2][i] + '</p></div></a>').appendTo('.results');

                // $('<div/>', {
                //     "class": 'returnResults',
                // }).appendTo('.results');
                //
                // $('<a/>', {
                //     href: data[3][i],
                //     text: data[1][i]
                // }).appendTo('.returnResults');


            }
        }
    });

}
