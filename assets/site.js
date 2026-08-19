(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  document.querySelectorAll("[data-appt-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var get = function (name) {
        var el = form.elements.namedItem(name);
        return el && el.value ? el.value.trim() : "";
      };
      var lines = [
        "Name: " + get("name"),
        "Phone: " + get("phone"),
        "Email: " + get("email"),
        "Lesson: " + get("lesson"),
        "",
        get("message")
      ];
      window.location.href = "mailto:ericarosenblum5@gmail.com?subject=" +
        encodeURIComponent("Lesson inquiry — Music In Bloom") +
        "&body=" + encodeURIComponent(lines.join("\n"));
    });
  });
})();
