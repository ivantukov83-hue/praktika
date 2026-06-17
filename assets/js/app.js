var menuBtn = document.querySelector(".burger");
var menu = document.querySelector(".mobile-menu");

if (menuBtn && menu) {
  menuBtn.onclick = function () {
    menu.classList.toggle("show");
  };
}

var faqs = document.querySelectorAll(".faq-item");

for (var i = 0; i < faqs.length; i++) {
  faqs[i].onclick = function () {
    this.classList.toggle("open");
    var sign = this.querySelector(".faq-sign");
    if (sign) {
      sign.textContent = this.classList.contains("open") ? "x" : "+";
    }
  };
}

var forms = document.querySelectorAll("form");

for (var f = 0; f < forms.length; f++) {
  forms[f].onsubmit = function (event) {
    event.preventDefault();
    var msg = this.querySelector(".message");
    if (msg) {
      msg.textContent = "Done, message saved on this demo page.";
    }
  };
}

var filterInput = document.querySelector("[data-filter]");

if (filterInput) {
  filterInput.oninput = function () {
    var text = filterInput.value.toLowerCase();
    var cards = document.querySelectorAll(".course-card");

    for (var c = 0; c < cards.length; c++) {
      var cardText = cards[c].innerText.toLowerCase();
      cards[c].style.display = cardText.indexOf(text) > -1 ? "" : "none";
    }
  };
}
