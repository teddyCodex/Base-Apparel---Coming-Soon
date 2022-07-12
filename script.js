let errorMsg = document.getElementById("error-msg");
let inputEl = document.getElementById("name");
let svgEl = document.getElementById("hidden");

function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    document.form1.text1.focus();
    return true;
  } else {
    errorMsg.textContent = "Please provide a valid email";
    inputEl.classList.add("active");
    svgEl.classList.remove("hidden");
    document.form1.text1.focus();
    return false;
  }
}

document.addEventListener(
  "invalid",
  (function () {
    return function (e) {
      e.preventDefault();
      document.getElementById("name").focus();
    };
  })(),
  true
);
