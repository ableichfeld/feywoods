/*

Template for Waypoint trigger:

var WAYPOINT = new Waypoint({
  element: document.querySelector(SELECTION),
  handler: function(direction) {
    if(direction === "down") {

      <-- ACTION GOES HERE FOR DOWNWARD SCROLLING-->

    } else if(direction === "up") {

      <-- ACTION GOES HERE FOR UPWARD SCROLLING -->

    }
  }
});

*/

/*Element is what triggers the event, handler is the function triggered when the element is triggered.
You can have different actions for different directions of scrolling.
*/
var castleFade1 = new Waypoint({
  element: document.querySelector("#trigger1"),
  handler: function(direction) {
    if(direction === "down") {

      $("#castleFade2").fadeOut("fast");
      $("#castleFade3").fadeOut("fast");

    } else if(direction === "up") {



    }
  }
});

var castleFade2 = new Waypoint({
  element: document.querySelector("#trigger2"),
  handler: function(direction) {
    if(direction === "down") {

      $("#castleFade1").fadeOut("slow");
      $("#castleFade2").fadeIn("slow");

    } else if(direction === "up") {

      $("#castleFade2").fadeOut("slow");
      $("#castleFade1").fadeIn("slow");

    }
  }
});

var castleFade3 = new Waypoint({
  element: document.querySelector("#trigger3"),
  handler: function(direction) {
    if(direction === "down") {

      $("#castleFade2").fadeOut("slow");
      $("#castleFade3").fadeIn("slow");

    } else if(direction === "up") {

      $("#castleFade2").fadeIn("slow");
      $("#castleFade3").fadeOut("slow");

    }
  }
});
