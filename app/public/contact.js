$(document).ready(function() {
  $(".linkedin").on("click", function() {
    var a = document.createElement("a");

    var link = document.createTextNode("This is link");

    a.appendChild(link);

    a.title = "This is Link";

    a.href = "https://www.linkedin.com/in/spencer-mogil/";

    $(".linkedin").html(a);
  });
  $(".email").on("click", function() {
    var a = document.createElement("a");

    var link = document.createTextNode("smogil12@gmail.com");

    a.appendChild(link);

    a.title = "This is Link";

    window.location.href = "mailto:smogil12@gmail.com";

    $(".email").html(a);
  });
  $(".github").on("click", function() {
    var a = document.createElement("a");

    var link = document.createTextNode("https://github.com/smogil12");

    a.appendChild(link);

    a.title = "This is Link";

    a.href = "https://github.com/smogil12";

    $(".github").html(a);
  });
});
