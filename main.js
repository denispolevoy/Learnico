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

// const generateNumbers = {
//   start: 1,
//   end: 10,
// };

// generateNumbers[Symbol.iterator] = function () {
//   let start = this.start;
//   let end = this.end;
//   return {
//     next() {
//       if (start <= end) {
//         return {
//           done: false,
//           value: start++,
//         };
//       } else {
//         return { done: true };
//       }
//     },
//   };
// };

// for (let value of generateNumbers) {
//   console.log(value);
// }
