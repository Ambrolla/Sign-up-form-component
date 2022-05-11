const fields = [
  document.getElementById("firstName"),
  document.getElementById("lastName"),
  document.getElementById("email"),
  document.getElementById("password")
],
  errorMsgs = document.getElementsByClassName("error"),
  failureIcons = document.getElementsByClassName("failure-icon");

// Adding the submit event Listener

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  fields.forEach((field, i) => {
    const err = `${field.placeholder} cannot be empty`;
    styleInputElement(field, i, err);
  });
});


function styleInputElement(el, index, errMsg) {
  const inputValue = el.value.trim();

  if (!inputValue) {
    errorMsgs[index].innerHTML = errMsg;
    showError(el, index);
  } else if (index === 2 && (! /(.+)@(.+){2,}\.(.+){2,}/.test(inputValue))) {
    errorMsgs[index].innerHTML = "Looks Like this is not an email";
    showError(el, index);
  }
};

function showError(el, index) {
  el.style.border = "2px solid red";
  el.style.color = "red";

  failureIcons[index].style.opacity = "1";
  failureIcons[index].style.color = "red";
}
