"use strict";
// Hide Award Section
document.querySelector(".award__images").addEventListener("click", function () {
  document.querySelector(".award").remove();
});
// Video on Section 1
const btnClickVideo = document.querySelector(".content__btn2");
const video = document.querySelector("#content__videos");
btnClickVideo.addEventListener("click", function () {
  video.play();
});
