let input = document.querySelector("#input-box");
let Btns = document.querySelectorAll("button");

let str = "";
let arr = Array.from(Btns);

arr.forEach((Btn) => {
  Btn.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      str = eval(str);
      input.value = str;
    } else if (e.target.innerHTML == "AC") {
      str = "";
      input.value = str;
    } else if (e.target.innerHTML == "DEL") {
      str = str.slice(0, str.length - 1);
      input.value = str;
    } else {
      str += e.target.innerHTML;
      input.value = str;
    }
  });
});
