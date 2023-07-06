let conatiner = document.querySelector(".containeriframe");
let buttonClass = document.querySelector(".buttonClass");
buttonClass.addEventListener("click", () => {
  const arr = [
    `<iframe
            id="my-frame"
            src="https://www.youtube.com/embed/oOc4vwEOBUI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>`,
    `<iframe
            id="my-frame"
            src="https://www.youtube.com/embed/AM5jgcj1TJc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>`,
    `<iframe
            id="my-frame"
            src="https://www.youtube.com/embed/c3RWWCp1Fcs"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>`,
    `<iframe
            id="my-frame"
            src="https://www.youtube.com/embed/iAtcheL3PtA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>`,
  ];
  let random = Math.floor(Math.random() * arr.length);
  conatiner.innerHTML = arr[random];
  // console.log(random);
});
//++++++++++++++++++++++++++++++++++++++++++++++++++ random quotes ++++++++
let containquote = document.querySelector("#containquote");
let quotebut = document.getElementById("quotebut");
// console.log(containquote, quotebut);

quotebut.addEventListener("click", () => {
  const arr2 = [
    `<blockquote>
هل أنت واثق أن حياة الإنسان تبدأ بولادته؟</blockquote>`,
    `<blockquote>
الخوف لا يمنع من الموت ولكنه يمنع من الحياة</blockquote>`,
    `<blockquote>
 في النهاية ، سنصبح جميعًا قصصًا</blockquote>`,
    `<blockquote>
أخلاقك تهمني أكثر من جمالك</blockquote>`,
  ];
  let random = Math.floor(Math.random() * arr2.length);
  containquote.innerHTML = arr2[random];
  // console.log(random);
});
// ++++++++++++++++++++ hearts +++++++++++++++++++++++
let heartbut = document.getElementById("heartbut");

let heartcontainer = document.querySelector(".hearts");
const reusableRandomHearts = () => {
  let intervalTime = setInterval(() => {
    let heartdiv = document.createElement("div");
    heartdiv.classList.add("emoji");
    heartdiv.innerHTML = "&#129505;";
    heartcontainer.append(heartdiv);
    heartdiv.style.left = `${Math.random() * 100}%`;
  }, 50);
  setTimeout(() => {
    clearInterval(intervalTime);
  }, 1000);
  setTimeout(() => {
    heartcontainer.innerHTML = "";
  }, 4000);
};
heartbut.addEventListener("click", () => {
  reusableRandomHearts();
});

// ++++++++++++++++++++ accordion +++++++++++++++++++++++

let allplus = document.querySelectorAll(".plus");

allplus.forEach((item) => {
  item.addEventListener("click", (eo) => {
    let divcontent =
      eo.target.parentElement.parentElement.getElementsByClassName(
        "content"
      )[0];
    //+++++++++++++++++ height +++++++++++++++

    divcontent.classList.toggle("acc-active");
    if (divcontent.classList.contains("acc-active")) {
      divcontent.style.height = `${divcontent.scrollHeight}px`;
    } else {
      divcontent.style.height = "0px";
    }
    // +++++   plus & minus +++++++++++++++
    item.classList.toggle("hide-plus");
    if (item.classList.contains("hide-plus")) {
      item.innerHTML = "-";
    } else {
      item.innerHTML = "+";
    }
  });
});

// +++++++++++++++++++++ clock +++++++++++++++++++++++

const clockdiv = document.getElementById("clockcontainer");
const digitalclock = () => {
  const now = new Date();

  let sec = now.getSeconds();
  let min = now.getMinutes();
  let hours = now.getHours();
  let date = now.toDateString();
  let ampm = "PM";

  if (hours > 12) {
    ampm = "AM";
  }
  if (sec < 10) {
    sec = `0${sec}`;
  }
  if (min < 10) {
    min = `0${min}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (hours == 0) {
    hours = `12`;
  }
  const clock = `
    <div class="date">${date}</div>
    <div class="time">${hours} : ${min} : ${sec} ${ampm}</div>`;

  clockdiv.innerHTML = clock;
};
setInterval(digitalclock, 1000);

// ++++++++++++++++++++ slider   ++++++++++++++++++++
{
  let imgarray = [
    `<img src="images/batman.jpg" alt="" />`,
    `<img src="images/captinAmerica.jpg" alt="" />`,
    `<img src="images/ironman.jpg" alt="" />`,
    `<img src="images/moonKnight.jpg" alt="" />`,
    `<img src="images/spiderman.jpg" alt="" />`,
  ];
  let next = document.getElementById("next");
  let prev = document.getElementById("prev");
  let order = document.getElementById("order");
  let images = document.getElementById("imagescontainer");
  let btncontainer = document.querySelectorAll("#buttons button");
  let buttons = document.getElementsByClassName("buttons")[0];
  prev.setAttribute("disabled", "");
  let i = 0;
  images.innerHTML += imgarray[i];

  order.innerHTML += `${i + 1} of ${imgarray.length}`;
  next.addEventListener("click", (x) => {
    i++;
    images.innerHTML += imgarray[i];
    prev.removeAttribute("disabled");
    order.innerHTML = `${i + 1} of ${imgarray.length}`;
    if (i == 4) {
      next.setAttribute("disabled", "");
    }
    buttons.getElementsByClassName("activate")[0].classList.remove("activate");
    buttons.getElementsByTagName("button")[i].classList.add("activate");
  });
  prev.addEventListener("click", (x) => {
    i--;
    images.innerHTML += imgarray[i];
    next.removeAttribute("disabled");
    order.innerHTML = `${i + 1} of ${imgarray.length}`;
    if (i == 0) {
      prev.setAttribute("disabled", "");
    }
    buttons.getElementsByClassName("activate")[0].classList.remove("activate");
    buttons.getElementsByTagName("button")[i].classList.add("activate");
  });

  btncontainer.forEach((boton, index) => {
    boton.addEventListener("click", (eo) => {
      buttons
        .getElementsByClassName("activate")[0]
        .classList.remove("activate");
      boton.classList.add("activate");
      images.innerHTML += imgarray[index];
      order.innerHTML = `${index + 1} of ${imgarray.length}`;
      i = index;

      if (index == imgarray.length - 1) {
        next.setAttribute("disabled", "");
      } else if (index == 0) {
        prev.setAttribute("disabled", "");
      } else {
        next.removeAttribute("disabled");
        prev.removeAttribute("disabled");
      }
    });
  });
}
