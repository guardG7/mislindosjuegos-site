// Language: remembered choice, else the browser language (Spanish for es-*, English otherwise).
(function () {
  var root = document.documentElement;
  function saved() { try { return localStorage.getItem("mlj-lang"); } catch (e) { return null; } }
  function remember(lang) { try { localStorage.setItem("mlj-lang", lang); } catch (e) {} }
  function apply(lang) {
    root.dataset.lang = lang;
    root.lang = lang;
    var btn = document.querySelector(".lang-btn");
    if (btn) btn.textContent = lang === "es" ? "English" : "Español";
  }
  var browser = (navigator.language || "es").toLowerCase().indexOf("es") === 0 ? "es" : "en";
  apply(saved() || browser);
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".lang-btn")) return;
    var next = root.dataset.lang === "es" ? "en" : "es";
    apply(next);
    remember(next);
  });
})();
