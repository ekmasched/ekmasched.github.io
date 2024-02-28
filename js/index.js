console.log("Your index.js file is loaded correctly!");

const piButton = $("#p1_but");
const piiButton = $("#p2_but");
const piiiButton = $("#p3_but");
const cow1 = $("#cow1");

piButton
  .on("mouseenter", function () {
    piButton.css("background-color", "yellow");
  })
  .on("mouseleave", function () {
    piButton.css("background-color", "white");
  })
  .on("click", function () {
    cow1.addClass("rotate");
    setTimeout(function () {
      cow1.removeClass("rotate");
    }, 1000);
  });

piiButton
  .on("mouseenter", function () {
    piiButton.css("background-color", "yellow");
  })
  .on("mouseleave", function () {
    piiButton.css("background-color", "white");
  })
  .on("click", function () {
    alert("Clickyy");
  });

piiiButton
  .on("mouseenter", function () {
    piiiButton.css("background-color", "yellow");
  })
  .on("mouseleave", function () {
    piiiButton.css("background-color", "white");
  })
  .on("click", function () {
    alert("Clickyy");
  });
