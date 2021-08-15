let classesWithColoredParents =
  /checkbox-container__input|radio-container__input|input-container__input|textarea-container__textarea|slider-container__slider/g;

const callFunction = (callback, e) => {
  let element = e.target;
  //if element has any of those classes in regex then its parent will change class.
  if (element.className && element.className.match(classesWithColoredParents))
    callback(element.parentElement);
};

const blur = (element) => element.classList.remove("selected");

const focus = (element) => element.classList.add("selected");

window.addEventListener("focus", (e) => callFunction(focus, e), true);
window.addEventListener("blur", (e) => callFunction(blur, e), true);
