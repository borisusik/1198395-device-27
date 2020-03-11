var button = document.querySelector(".show-map");
var map = document.querySelector(".map-popup");
var closeMap = map.querySelector(".map-close");

button.addEventListener("click", function (evt) {
    evt.preventDefault();
    map.classList.add("map-popup-show");
});

closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    map.classList.remove("map-popup-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (map.classList.contains("map-popup-show")) {
            map.classList.remove("map-popup-show");
        }
    } 
});