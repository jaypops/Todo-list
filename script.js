"use strict";
const plus = document.querySelector(".plus_form");
const TextFeild = document.querySelector("#display_text");
const textCopy = document.querySelector("#text_copy");
const deletee = document.querySelector(".delete");
const container = document.querySelector(".container");
const itemList = JSON.parse(localStorage.getItem("todos")) || [];
const cancelClass = "cancel";
plus.addEventListener("submit", function (e) {
  e.preventDefault();
  if (TextFeild.value === "") {
    alert("Input a task");
  } else {
    const inputValue = TextFeild.value.trim();
    const creatNewList = function () {
      const html = `
        <li class="list-of-items">
          <div class="items" id="hidden">
            <p>${inputValue}</p>
          </div>
          <div class="DelCal">
            <span>
              <i class="fa fa-solid fa-trash ${cancelClass} item"></i>
            </span>
          </div>
        </li>
      `;
      textCopy.insertAdjacentHTML("afterbegin", html);
    };
    creatNewList();
    TextFeild.value = "";
    textCopy.addEventListener("click", function (e) {
      e.preventDefault();
      const clicked = e.target.closest(".item");
      if (!clicked) return;
      if (!clicked.classList.contains("cancelClass")) {
        e.target.parentElement.parentElement.parentElement.remove();
      }
    });
    itemList.push(inputValue);
    localStorage.setItem("todos", JSON.stringify(itemList));
    console.log(localStorage.getItem("todos"));
  }
});
