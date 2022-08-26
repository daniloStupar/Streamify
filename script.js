"use strict";
////////////////////////////////////////////////////////
//////////////////// PRICING ///////////////////////////
////////////////////////////////////////////////////////
const prekidacOff = document.querySelector(".prekidac2");
const prekidacOn = document.querySelector(".prekidac");
const oldPrice = document.querySelectorAll(".oldprice");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const indPrice = document.querySelector(".indPrice");
const famPrice = document.querySelector(".famPr");
const coPrice = document.querySelector(".coPr");
const oldReg = document.querySelector(".oldReg");
const famReg = document.querySelector(".famReg");
const coReg = document.querySelector(".coReg");

let individualMonth = 4.99;
let familyMonth = 9.99;
let coupleMonth = 6.99;

let indYearReg = individualMonth * 12;
let famYearReg = familyMonth * 12;
let coupleYearReg = coupleMonth * 12;

let individualYear = individualMonth * 12 - 0.2 * (individualMonth * 12);
individualYear = individualYear.toFixed(2);

let famYear = familyMonth * 12 - 0.2 * (familyMonth * 12);
famYear = famYear.toFixed(2);

let coupleYear = coupleMonth * 12 - 0.2 * (coupleMonth * 12);
coupleYear = coupleYear.toFixed(2);
console.log(coupleYearReg);

indPrice.innerHTML = `${individualMonth}€`;
famPrice.innerHTML = `${familyMonth}€`;
coPrice.innerHTML = `${coupleMonth}€`;

prekidacOff.addEventListener("click", function () {
  prekidacOff.style.display = "none";
  prekidacOn.style.display = "flex";
  month.style.fontWeight = "400";
  year.style.fontWeight = "600";

  indPrice.innerHTML = `${individualYear}€`;
  famPrice.innerHTML = `${famYear}€`;
  coPrice.innerHTML = `${coupleYear}€`;

  oldPrice.forEach((el) => {
    el.style.opacity = "1";
  });
  oldReg.innerHTML = `${indYearReg}€`;
  famReg.innerHTML = `${famYearReg}€`;
  coReg.innerHTML = `${coupleYearReg}€`;
});

prekidacOn.addEventListener("click", function () {
  prekidacOff.style.display = "flex";
  prekidacOn.style.display = "none";
  month.style.fontWeight = "600";
  year.style.fontWeight = "400";

  indPrice.innerHTML = `${individualMonth}€`;
  famPrice.innerHTML = `${familyMonth}€`;
  coPrice.innerHTML = `${coupleMonth}€`;

  oldPrice.forEach((el) => {
    el.style.opacity = "0";
  });
});

/////////////////// MODAL //////////////////////////////////
const btnCloseModal = document.querySelector(".x");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal.addEventListener("click", closeModal);

/////////////////////////// COMMENTS ////////////////////////////
const loadMore = document.querySelector(".showMoreCom");
const commentsCon = document.querySelector(".commentsCon");

let i, currentComments;
const show5comments = function (data) {
  for (i = 0; i < 5; i++) {
    currentComments = data;
    let commentHtml = `
    <div class="comments centarC">
    <div class="comment">
    <div class="slikaCom"><img src="${data[i].avatarUrl}"/></div>
    <div class="comText">
      <div class="comName">
        ${data[i].name}
        <div class="comMail">${data[i].email}</div>
      </div>
      <div class="comDate">${data[i].postedAt}</div>
      <div class="comContent">
       ${data[i].comment}
      </div>
    </div>
    </div>
    </div>
          `;
    commentsCon.insertAdjacentHTML("beforeend", commentHtml);
  }
};
const fetchComments = async function () {
  const res = await fetch("https://mockend.com/Infomedia-bl/fake-api/comments");
  const data = await res.json();
  show5comments(data);
};
fetchComments();

loadMore.addEventListener("click", (e) => {
  for (let i = currentComments; i < currentComments + 5; i++)
    currentComments += 5;
  console.log("currentComments");
  show5comments();
});
