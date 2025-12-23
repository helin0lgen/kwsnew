const STORAGE_KEY = "serviceData";

window.addEventListener("DOMContentLoaded", () => {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (!savedData) return;

  const data = JSON.parse(savedData);

  const titleEl = document.getElementById("serviceTitle");
  const descEl = document.getElementById("serviceDesc");

  if (!titleEl || !descEl) return;

  titleEl.textContent = data.title;
  descEl.textContent = data.description;
});
