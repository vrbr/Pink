const popup = document.querySelector(".popup");
const openPopup = document.querySelector(".form-to-fill__submit-button");
const closePopup = document.querySelector(".popup__button");

openPopup.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
});

closePopup.addEventListener("click", function () {
    popup.classList.remove("modal-show");
});

document.addEventListener("keydown", function (evt) {
    if(evt.keyCode === 27) {
        popup.classList.remove("modal-show");
    }
});