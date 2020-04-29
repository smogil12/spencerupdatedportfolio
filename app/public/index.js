$(document).ready(function () {
  $(".email").on("click", function () {
    var a = document.createElement("a");

    var link = document.createTextNode("smogil12@gmail.com");

    a.appendChild(link);

    a.title = "This is Link";

    window.location.href = "mailto:smogil12@gmail.com";

    $(".email").html(a);
  });
});
