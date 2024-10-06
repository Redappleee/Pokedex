document.addEventListener("DOMContentLoaded", function () {
    const leftGate = document.getElementById("leftGate");
    const rightGate = document.getElementById("rightGate");
    const content = document.getElementById("content");
  
    // Delay for 0.5s to allow page load, then trigger animation
    setTimeout(() => {
      leftGate.classList.add("open");
      rightGate.classList.add("open");
  
      // Once the gates are open, show the content
      setTimeout(() => {
        content.style.opacity = "1";
      }, 2000); // Matches the duration of gate opening (2 seconds)
    }, 500);
  });


const inputElement = document.querySelector("#search-input");
const search_icon = document.querySelector("#search-close-icon");
const sort_wrapper = document.querySelector(".sort-wrapper");

inputElement.addEventListener("input", () => {
  handleInputChange(inputElement);
});
search_icon.addEventListener("click", handleSearchCloseOnClick);
sort_wrapper.addEventListener("click", handleSortIconOnClick);

function handleInputChange(inputElement) {
  const inputValue = inputElement.value;

  if (inputValue !== "") {
    document
      .querySelector("#search-close-icon")
      .classList.add("search-close-icon-visible");
  } else {
    document
      .querySelector("#search-close-icon")
      .classList.remove("search-close-icon-visible");
  }
}

function handleSearchCloseOnClick() {
  document.querySelector("#search-input").value = "";
  document
    .querySelector("#search-close-icon")
    .classList.remove("search-close-icon-visible");
}

function handleSortIconOnClick() {
  document
    .querySelector(".filter-wrapper")
    .classList.toggle("filter-wrapper-open");
  document.querySelector("body").classList.toggle("filter-wrapper-overlay");
}
