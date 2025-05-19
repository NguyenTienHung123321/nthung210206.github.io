"use strict";
const formatEmailEL =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const resultEl = function (message) {
  document.querySelector(".result").textContent = message;
};
const resultColorEl = function (color) {
  document.querySelector(".result").style.color = color;
};
document.querySelector(".btn-submit").addEventListener("click", function () {
  const emailEl = document.querySelector(".email").value;
  if (!emailEl) {
    resultEl("Yêu cầu nhập email của bạn để xác thực");
    resultColorEl("#ff0000");
  } else if (emailEl && formatEmailEL.test(emailEl)) {
    resultEl("Đăng nhập thành công");
    resultColorEl("#099520");
    document.querySelector(".container2-2").classList.add("hidden1");
    document.querySelector(".container2-1").classList.remove("hidden1");
  } else {
    resultEl("Email của bạn không hợp lệ");
    resultColorEl("#ff0000");
  }
});

// 10
function showInfo(document) {
  document.querySelector(".btn-viewmore").style.display = "block";
}

function hideInfo(document) {
  document.querySelector(".btn-viewmore").style.display = "none";
}

const btnViewmoreEl = document.querySelectorAll(".btn-viewmore");
const noidungEl = document.querySelectorAll(".noidung");
const doanEl = document.querySelectorAll(".doan");
const btn1 = document.querySelector(".btn-1");
for (let i = 0; i < btnViewmoreEl.length; i++) {
  btnViewmoreEl[i].addEventListener("click", function () {
    btnViewmoreEl[i].textContent = "View less";
    noidungEl[i].classList.toggle("hidden1");
    doanEl[i].classList.toggle("dai");
  });
}
btn1.addEventListener("click", function () {
  btn1.classList.toggle("btn-margin");
});
