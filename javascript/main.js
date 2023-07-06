//toggle the light & dark mode
{
  const dark = document.getElementById("dark");
  const body = document.getElementById("body");

  dark.addEventListener("click", (eo) => {
    body.classList.toggle("dark");
  });
}

let changecolor = document.getElementById("changecolor");
let hiddenul = document.getElementById("hiddenul");
// change color hover show ul list
{
  changecolor.addEventListener("mousemove", () => {
    hiddenul.style.display = "block";
  });
  changecolor.addEventListener("mouseout", () => {
    hiddenul.style.display = "none";
  });
}

//change header color auto by click
let headerbg = document.getElementById("headerbg");
let header = document.getElementById("header");
{
  headerbg.addEventListener("click", () => {
    const random = Math.round(Math.random() * 360);
    header.style.backgroundColor = `hsl(${random}, 100%, 50%)`;
    const websitetitle = document.querySelector("#header > h1");
    websitetitle.style.backgroundColor = `hsl(${random}, 100%, 50%)`;
    const changemode = document.querySelector("#dark");
    changemode.style.backgroundColor = `hsl(${random}, 100%, 50%)`;
  });
}
//change title background color auto by click
let mytitle = document.querySelectorAll("h1:not(#header > h1)");
let titlebg = document.querySelector("#titlebg");
{
  titlebg.addEventListener("click", () => {
    let random = Math.round(Math.random() * 360);
    mytitle.forEach((item) => {
      item.style.backgroundColor = `hsl(${random}, 50%, 70%)`;
    });
  });
}

const randomnumber = () => {
  return Math.round(Math.random() * 360);
};

//change title color auto by click
let titlecolorid = document.getElementById("titlecolor");
{
  titlecolorid.addEventListener("click", () => {
    mytitle.forEach((x) => {
      x.style.color = `hsl(${randomnumber()},100%,30%)`;
    });
  });
}

// let sections = document.querySelectorAll("section");
// let sectionbg = document.querySelector("#sectionbg");
// sectionbg.addEventListener("click", () => {
//   sections.forEach((s) => {
//     s.style.backgroundColor = `hsl(${randomnumber()}, 50%, 70%)`;
//   });
// });
// console.log(sections);
// console.log(sectionbg);
