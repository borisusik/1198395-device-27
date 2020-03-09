var link = document.querySelector(".modal-link");
var popup = document.querySelector(".contact-modal");
var close = popup.querySelector(".button-close");
var form = popup.querySelector("form");
var userName = popup.querySelector("[name=name]");
var userEmail = popup.querySelector("[name=email");
var userMessage = popup.querySelector("[name=message]");
var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
    storageName = localStorage.getItem("userName");
    storageEmail = localStorage.getItem("userEmail");
} catch (err) {
    isStorageSupport = false;
};

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    if (storageName && storageEmail) {
        userName.value = storageName;
        userEmail.value = storageEmail;
        userMessage.focus();
    } else {
        userName.focus();
    }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    if (!userName.value || !userEmail.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("userName", userName.value);
            localStorage.setItem("userEmail", userEmail.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
});