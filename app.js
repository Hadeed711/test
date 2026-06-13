const routes = Array.from(document.querySelectorAll("[data-view]"));
const links = Array.from(document.querySelectorAll("[data-route]"));
const message = document.querySelector("#message");
const button = document.querySelector("#ctaButton");

function getRoute() {
  const route = window.location.hash.replace("#", "") || "home";
  return routes.some((view) => view.dataset.view === route) ? route : "home";
}

function showRoute(route) {
  routes.forEach((view) => {
    view.hidden = view.dataset.view !== route;
  });

  links.forEach((link) => {
    link.classList.toggle("active", link.dataset.route === route);
  });
}

window.addEventListener("hashchange", () => {
  showRoute(getRoute());
});

button?.addEventListener("click", () => {
  message.textContent = "Button clicked at " + new Date().toLocaleTimeString();
});

showRoute(getRoute());
