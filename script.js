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
const closeModal = document.querySelector(".x");
const modal = document.querySelector(".modal");

closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});

// ///////////////////////////// COMMENTS ////////////////////////////////////////////////////

// let comments = [];
// const fetchComments = function () {
//   fetch("https://mockend.com/Infomedia-bl/fake-api/comments")
//     .then((response) => response.json())
//     .then((data) => {
//       comments = data;
//     });
// };
// function displayComments(comments) {
//   commentsCon.innerHTML = "";
//   console.log(comments);
//   let html = "";
//   for (const comment1 of comments) {
//     html = `
//     <div class="comment">
//     <div class="slikaCom">${comments.avatarUrl}</div>
//     <div class="comText">
//       <div class="comName">
//         ${comments.name}
//         <div class="comMail">${comments.email}</div>
//       </div>
//       <div class="comDate">${comments.postedAt}</div>
//       <div class="comContent">
//        ${comments.comment}
//       </div>
//     </div>
//   </div>
//     `;
//   }

//   commentsCon.innerHTML = html;
// }
// displayComments(comments);

///////////////////////////
let comments;
const commentsCon = document.querySelector(".commentsCon");

const showComments = function () {
  comments.forEach(function (comment) {
    let commentHtml = `
    <div class="comments centarC">
    <div class="comment">
    <div class="slikaCom"><img src="${comment.avatarUrl}"/></div>
    <div class="comText">
      <div class="comName">
        ${comment.name}
        <div class="comMail">${comment.email}</div>
      </div>
      <div class="comDate">${comment.postedAt}</div>
      <div class="comContent">
       ${comment.comment}
      </div>
    </div>
    </div>
    </div>`;
    commentsCon.insertAdjacentHTML("beforeend", commentHtml);
  });
};

const fetchComments = async function () {
  const res = await fetch("https://mockend.com/Infomedia-bl/fake-api/comments");
  const data = await res.json();
  comments = data;
  console.log(comments);
  showComments();
};
fetchComments();
