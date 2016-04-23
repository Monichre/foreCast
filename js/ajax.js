//gets called on button click in index.html
function runAjax() {
  
  $.get('/tweets', function(data, status){

    //put the values into an array, seemed chill
    var outputArr = [JSON.parse(data)];

    for (var i = 0; i < 10; i++) {
      //we could loop through different parts of our data now, grab what we want.
      console.log(outputArr[0].statuses[i].text);
      
      $('#twitter').append("<blockquote>" + outputArr[0].statuses[i].text + "</blockquote>");
      
      // $('#twitter-data').text("<li>" + outputArr[i].statuses[i].text + "</li>");
    }
    //just putting it in the dom to test.
      // output.text(data.statuses.);


   });
};

$(document).ready(function(){
  $('h2').click(function(){
    
   

  runAjax();

});
});

