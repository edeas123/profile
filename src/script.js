var settings = {
  "url": "https://api.mybytesni.com/visitor",
  "method": "POST",
};
$.ajax(settings).done(function (response) {
  $("#uv" ).text(response.unique_visits);      
  $("#nv" ).text(response.visits);
});
