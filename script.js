// pc frame
$(document).ready(function () {
  let totalPages = 102;
  let book = $("#book");
  let pageAspectRatio = 1.35; // 세로:가로 비율
  let bookWidth = window.innerHeight * 0.55 * 2;
  let bookHeight = (bookWidth * pageAspectRatio) / 2;

  for (let i = 1; i <= totalPages; i++) {
    book.append(
      `<div class="page" style="background-image: url('./images/page${i}.png');"></div>`
    );
  }

  $("#book").turn({
    // 1512 × 2244
    width: bookWidth,
    height: bookHeight,
    autoCenter: true,
  });

  $("#prevBtn").click(function () {
    $("#book").turn("previous");
  });

  $("#nextBtn").click(function () {
    $("#book").turn("next");
  });
});

// mobile frame
let totalPages = 102;
let book_mobile = document.getElementById("book_mobile");
for (let i = 1; i <= totalPages; i++) {
  let imageElement = document.createElement("div");
  imageElement.classList.add("swiper-slide");

  let img = document.createElement("img");
  img.setAttribute("src", `./images/page${i}.png`);
  img.classList.add("swiper-lazy");
  img.setAttribute("width", "100%");
  // let lazyPreloader = document.createElement("div");
  // lazyPreloader.classList.add("swiper-lazy-preloader");

  imageElement.appendChild(img);
  // imageElement.appendChild(lazyPreloader);
  book_mobile.appendChild(imageElement);
}

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper-container", {
    loop: false,
    lazy: true,
    preloadImages: false,
    observer: false, // Swiper가 변경된 DOM을 감지하도록 설정
    observeParents: false, // Swiper 부모 요소의 변경도 감지
    touchMoveStopPropagation: false,
    virtual: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    on: {
      slideChange: function () {
        currentPage = swiper.realIndex + 1;
        pageNumber.innerText = `${currentPage} / ${totalPages}`;
      },
    },
  });
});

let pageNumber = document.getElementById("pageNumber");
pageNumber.innerText = `1 / ${totalPages}`;
let currentPage = 1;
