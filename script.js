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

////////////////////////////////// VALIDATION ///////////////////////
let inputs = document.querySelectorAll("input");
let errors = {
  name: [],
  address: [],
  email: [],
  cardNumber: [],
  cvc: [],
  expDate: [],
  coupon: [],
};
inputs.forEach((element) => {
  element.addEventListener("change", (e) => {
    let currentInput = e.target;
    let inputValeu = currentInput.value;
    let inputName = currentInput.getAttribute("name");
    if (inputValeu.length >= 0) {
      errors[inputName] = [];
      switch (inputName) {
        case "name":
          let validation = inputValeu.trim();
          validation = validation.split(" ");
          console.log(validation);
          if (validation.length < 2) {
            errors[inputName].push("Please enter a valid name!");
          }
          break;

        case "address":
          let validationAddress = inputValeu.trim();
          validationAddress = validationAddress.split(" ");

          if (validationAddress.length < 2) {
            errors[inputName].push("Please enter a valid address!");
          }
          console.log(validationAddress);
          break;

        case "email":
          if (!validateEmail(inputValeu)) {
            errors[inputName].push("Please enter a valid email!");
          }
          break;

        case "cardNumber":
          if (!validateCardNum(inputValeu)) {
            errors[inputName].push("Please enter a valid card number!");
          }
          break;

        case "cvc":
          if (!validateCVC(inputValeu)) {
            errors[inputName].push("Please enter a valid CVC!");
          }
          break;

        case "expDate":
          if (!validateCVC(inputValeu)) {
            errors[inputName].push("Please enter a valid date!");
          }
          break;

        case "coupon":
          if (!validateCoupon(inputValeu)) {
            errors[inputName].push("Please enter a valid date!");
          }
          break;
      }
    } else {
      errors[inputName] = [];
    }

    populateErrors();
  });
});
const populateErrors = () => {
  for (let elem of document.querySelectorAll("ul")) {
    elem.remove();
  }
  for (let key of Object.keys(errors)) {
    let input = document.querySelector(`input[name="${key}"]`);
    let parentElement = input.parentElement;
    let errorsElement = document.createElement("ul");
    parentElement.appendChild(errorsElement);

    errors[key].forEach((error) => {
      let li = document.createElement("li");
      li.innerText = error;
      errorsElement.appendChild(li);
    });
  }
};

const validateEmail = (email) => {
  if (
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    )
  ) {
    return true;
  }
  return false;
};
const validateCardNum = (cardNumber) => {
  if (
    /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(
      cardNumber
    )
  ) {
    return true;
  }
  return false;
};

const validateCVC = (cvc) => {
  if (/^[0-9]{3,4}$/.test(cvc)) {
    return true;
  }
  return false;
};

const validateExpDate = (expDate) => {
  if (/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/.test(expDate)) {
    return true;
  }
  return false;
};

///////////////////////// WIDGET ///////////////////////////
const closeWidget = document.querySelector(".xWidg");
const streamersBox = document.querySelector(".streamersBox");

closeWidget.addEventListener("click", function () {
  streamersBox.style.display = "none";
});
