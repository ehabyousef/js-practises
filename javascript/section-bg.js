let sectionbg = document.getElementById("sectionbg");
let sections = document.querySelectorAll("section");
let arrcolor = ["#820000", "#4E6C50", "#F2DEBA", "#FAECD6"];
// ++++++++++++++++++++++++++++++  1   +++++++++++++++++++++++
// let i = 0;
// sectionbg.addEventListener("click", () => {
//   sections.forEach((x) => {
//     x.style.backgroundColor = arrcolor[i];
//     console.log(i);
//   });
//   if (i >= 0 && i < arrcolor.length - 1) {
//     i++;
//   } else {
//     i = 0;
//   }
// });
// +++++++++++++++++++++++++++++++++  2     **********************************

// sectionbg.addEventListener("click", () => {
//   let random = Math.floor(Math.random() * arrcolor.length);
//   sections.forEach((x) => {
//     x.style.backgroundColor = arrcolor[random];
//   });
//   console.log(random);
// });
// +++++++++++++++++++++++++++++++++++++  3   +++++++++++++++++++++++++++
// const random255 = () => {
//   return Math.round(Math.random() * 255);
// };
// sectionbg.addEventListener("click", () => {
//   let rgb1 = random255();
//   let rgb2 = random255();
//   let rgb3 = random255();
//   sections.forEach((i) => {
//     i.style.backgroundColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
//   });
// });

//  +++++++++++++++++++++++++++++    4   +++++++++++++++++++++++++++++++++
// const randomhex = () => {
//   return `#${Math.random().toString(16).slice(2, 8)}`;
// };
// sectionbg.addEventListener("click", () => {
//   let rgb1 = randomhex();
//   sections.forEach((i) => {
//     i.style.backgroundColor = rgb1;
//   });
// });
//  +++++++++++++++++++++++++++++    5   +++++++++++++++++++++++++++++++++

// const randomhex = () => {
//   return `#${Math.random().toString(16).slice(2, 8)}`;
// };
// sectionbg.addEventListener("click", () => {
//   let hex = randomhex();
//   for (let i = 0; i < sections.length; i++) {
//     const item = sections[i];
//     item.style.backgroundColor = hex;
//   }
// });

//  +++++++++++++++++++++++++++++    6   +++++++++++++++++++++++++++++++++

const randomhex = () => {
  return `#${Math.random().toString(16).slice(2, 8)}`;
};
sectionbg.addEventListener("click", () => {
  let hex = randomhex();
  for (let i of sections) {
    const item = i;
    item.style.backgroundColor = hex;
  }
});
