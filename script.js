"use strict";

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
const noMoreComments = document.querySelector(".noComment");

let data;
let i;
let currentComments = 0;

const show5comments = function (data) {
  currentComments = currentComments + 5;
  for (i = currentComments - 5; i < currentComments; i++) {
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
  if (currentComments >= 100) {
    noMoreComments.style.opacity = "1";
    loadMore.style.background = "#657785";
  }
};
const fetchComments = async function () {
  const res = await fetch("https://mockend.com/Infomedia-bl/fake-api/comments");
  data = await res.json();
  show5comments(data);
};
fetchComments();

loadMore.addEventListener("click", () => show5comments(data));

////////////////////////////////// VALIDATION ///////////////////////

let inputs = document.querySelectorAll("input");
let errors = {
  emailCoupon: [],
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
      console.log("asdasdasda", { inputValeu });
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

        case "emailCoupon":
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
    console.log(input);

    errors[key].forEach((error) => {
      let li = document.createElement("li");
      input.style.border = "1px solid #F63F34";
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

const closeWidget = document.querySelector(".widgX");
const streamersBox = document.querySelector(".streamersBox");
const streamersList = document.querySelector(".streamersList");
const openStreamerBox = document.querySelector(".widget");

openStreamerBox.addEventListener("click", function () {
  streamersBox.style.display = "block";
  overlay.style.display = "block";
});

closeWidget.addEventListener("click", function () {
  streamersBox.style.display = "none";
  overlay.style.display = "none";
});

let streamers;
let data2;

const showStreamers = function (data2) {
  const filterStreamers = data2.filter(
    (streamer) =>
      streamer.activity == "online" || streamer.activity == "streaming"
  );

  const sortedStreamers = filterStreamers.sort(function (a, b) {
    let x = a.activity;
    let y = b.activity;
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });
  console.log(sortedStreamers);

  sortedStreamers.forEach(function (streamer, i) {
    const streamerHtml = `
    <div class="streamer">
    <div class="status"></div>
    <div class="streamerImg"><img src='${streamer.avatarUrl}'/></div>
    <div class="streamerName">${streamer.name}</div>
    <div class="streamerEmail">(${streamer.email})</div>
    <div class="streamerAction">${streamer.statusMessage}</div>
  </div>
    `;

    streamersList.insertAdjacentHTML("beforeend", streamerHtml);

    const activityBorder = document.querySelectorAll(".streamerImg");
    const activityCircle = document.querySelectorAll(".status");

    if (streamer.activity == "online") {
      activityBorder[i].style.border = "3px solid #1AD838";
      activityCircle[i].style.backgroundColor = "#1AD838";
    }
    if (streamer.activity == "offline") {
      activityBorder[i].style.border = "3px solid #99A8B4";
      activityCircle[i].style.backgroundColor = "#99A8B4";
    }
    if (streamer.activity == "streaming") {
      activityBorder[i].style.border = "3px solid #E76A10";
      activityCircle[i].style.backgroundColor = "#E76A10";
    }
  });
};

const fetchStreamers = async function () {
  const res = await fetch("https://mockend.com/Infomedia-bl/fake-api/users");
  data2 = await res.json();
  showStreamers(data2);
};
fetchStreamers();

//////////////////// PRICING ///////////////////////////

const prekidacOff = document.querySelector(".prekidac2");
const prekidacOn = document.querySelector(".prekidac");
const oldPrice = document.querySelectorAll(".oldprice");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const indPrice = document.querySelectorAll(".indPrice");
const famPrice = document.querySelectorAll(".famPr");
const coPrice = document.querySelectorAll(".coPr");
const oldReg = document.querySelectorAll(".oldReg");
const famReg = document.querySelectorAll(".famReg");
const coReg = document.querySelectorAll(".coReg");

let individual = 4.99;
let family = 9.99;
let couple = 6.99;
let packetTime = "Monthly";
let totalFamily = family;
let totalIndividual = individual;
let totalCouple = couple;
let discountIndividual = 0.0;
let discountFamily = 0.0;
let discountCouple = 0.0;

let indYearReg = individual * 12;
let famYearReg = family * 12;
let coupleYearReg = couple * 12;

let individualYear = (individual * 12 - 0.2 * (individual * 12)).toFixed(2);
let famYear = (family * 12 - 0.2 * (family * 12)).toFixed(2);
let coupleYear = (couple * 12 - 0.2 * (couple * 12)).toFixed(2);

indPrice.forEach((el) => (el.innerHTML = `${individual}€`));
famPrice.forEach((el) => (el.innerHTML = `${family}€`));
coPrice.forEach((el) => (el.innerHTML = `${couple}€`));
prekidacOff.addEventListener("click", function () {
  prekidacOff.style.display = "none";
  prekidacOn.style.display = "flex";
  month.style.fontWeight = "400";
  year.style.fontWeight = "600";

  packetTime = "Yearly";

  individual = individualYear;
  family = famYear;
  couple = coupleYear;

  indPrice.forEach((el) => (el.innerHTML = `${individual}€`));
  famPrice.forEach((el) => (el.innerHTML = `${family}€`));
  coPrice.forEach((el) => (el.innerHTML = `${couple}€`));

  individual = indYearReg;
  family = famYearReg;
  couple = coupleYearReg;

  discountIndividual = (indYearReg - individualYear).toFixed(2);
  discountFamily = (famYearReg - famYear).toFixed(2);
  discountCouple = (coupleYearReg - coupleYear).toFixed(2);

  totalIndividual = individualYear;
  totalFamily = famYear;
  totalCouple = coupleYear;

  oldPrice.forEach((el) => {
    el.style.opacity = "1";
  });
  oldReg.forEach((el) => (el.innerHTML = `${indYearReg}€`));
  famReg.forEach((el) => (el.innerHTML = `${famYearReg}€`));
  coReg.forEach((el) => (el.innerHTML = `${coupleYearReg}€`));
});

prekidacOn.addEventListener("click", function () {
  prekidacOff.style.display = "flex";
  prekidacOn.style.display = "none";
  month.style.fontWeight = "600";
  year.style.fontWeight = "400";

  packetTime = "Monthly";
  individual = 4.99;
  family = 9.99;
  couple = 6.99;

  totalFamily = family;
  totalIndividual = individual;
  totalCouple = couple;

  discountIndividual = 0.0;
  discountFamily = 0.0;
  discountCouple = 0.0;

  indPrice.forEach((el) => (el.innerHTML = `${individual}€`));
  famPrice.forEach((el) => (el.innerHTML = `${family}€`));
  coPrice.forEach((el) => (el.innerHTML = `${couple}€`));

  oldPrice.forEach((el) => {
    el.style.opacity = "0";
  });
});
///////////////////// ORDER FORM ///////////////////////////////////

const Individual = document.querySelectorAll(".choose1");
const Family = document.querySelectorAll(".choose2");
const Couple = document.querySelectorAll(".choose3");
const paketTip = document.querySelector(".paketTip");
const paketVrijeme = document.querySelector(".paketVrijeme");
const paketCijena = document.querySelector(".packet-price");
const subtotal = document.querySelector(".subtotal");
const discount = document.querySelector(".discount");
const totalPrice = document.querySelector(".totalPrice");
const familyPaket = "FAMILY";
const couplePaket = "COUPLE";
const individualPaket = "INDIVIDUAL";

Individual.forEach((el) =>
  el.addEventListener("click", function () {
    paketTip.innerHTML = individualPaket;
    paketVrijeme.innerHTML = packetTime;
    discount.innerHTML = `${discountIndividual}€`;
    paketCijena.innerHTML = `${individual}€`;
    subtotal.innerHTML = `${individual}€`;
    totalPrice.innerHTML = `${totalIndividual}€`;
  })
);

Couple.forEach((el) =>
  el.addEventListener("click", function () {
    paketTip.innerHTML = couplePaket;
    paketVrijeme.innerHTML = packetTime;
    discount.innerHTML = `${discountCouple}€`;
    paketCijena.innerHTML = `${couple}€`;
    subtotal.innerHTML = `${couple}€`;
    totalPrice.innerHTML = `${totalCouple}€`;
  })
);

Family.forEach((el) =>
  el.addEventListener("click", function () {
    paketTip.innerHTML = individualPaket;
    paketVrijeme.innerHTML = packetTime;
    discount.innerHTML = `${discountFamily}€`;
    paketCijena.innerHTML = `${family}€`;
    subtotal.innerHTML = `${family}€`;
    totalPrice.innerHTML = `${totalFamily}€`;
  })
);

//////////////////////////////// PRICE MOBILE //////////////////

const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(1);
    createDots();

    activateDot(1);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
