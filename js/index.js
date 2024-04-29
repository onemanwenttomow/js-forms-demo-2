// console.log("sanity check");

const form = document.querySelector('[data-js="form"]');

// console.log("form: ", form);

// listen for the submit event.
form.addEventListener("submit", (event) => {
  // stop the browser submitting the form
  event.preventDefault();

  // event.target (where the event happened)
  // console.log(event.target.elements);
  const formElements = event.target.elements;

  // we can target specific inputs
  // based on their id.
  // console.log("formElements.firstName.value", formElements.firstName.value);

  // OR, use formData to grab the contents
  // of the entire form
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log("data: ", data);

  /////////////////////////////////
  // reset form after submitting //
  /////////////////////////////////
  event.target.reset();

  //////////////////////////////
  // focus a specific element //
  //////////////////////////////
  formElements.firstName.focus();
});

// 10 min break
// meet back at 9:57

/////////////////////////////////////////
// TODO - more specific event listener //
/////////////////////////////////////////

// grab a reference to the text area

const input = document.querySelector('[data-js="personal-message"]');
// grab a ref to the span with 150
const charactersLeftElement = document.querySelector(
  '[data-js="remaining-characters"]'
);

console.log("charactersLeftElement: ", charactersLeftElement);

// add an event listener to the text area

// we need to know when user
// adds input to textarea
input.addEventListener("input", (event) => {
  // calculate how many chars are in text area
  const numberOfCharsEntered = event.target.value.length;
  charactersLeftElement.textContent = 150 - numberOfCharsEntered;
});

// update number to be 150 - length of text area
