const btn = document.getElementById("btn");
const rslt = document.getElementById("rslt");
let isLoggedIn = false;
let count = 0;

const isTrue = function () {
  count++;
  if (count > 10) {
    alert("count is greater then 10");
  } else {
    console.log(count);
  }
  isLoggedIn = true;
  console.log(isLoggedIn);
  return isLoggedIn;
};
const isFalse = () => {
  count++;
  if (count > 10) {
    alert("count is greater then 10");
  } else {
    console.log(count);
  }
  console.log(count);
  isLoggedIn = false;
  console.log(isLoggedIn);
  return isLoggedIn;
};

const logResults = () => {
  if (isLoggedIn == false) {
    console.log("double click");
  }
  if (isLoggedIn == true) {
    console.log("onclick");
  }
};

btn.addEventListener("click", isTrue);
btn.addEventListener("dblclick", isFalse);
rslt.addEventListener("click", logResults);
