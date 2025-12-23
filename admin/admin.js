const form = document.getElementById('servicesForm');

const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');

// LOCALSTORAGE ANAHTARI
const STORAGE_KEY = 'serviceData';

// SAYFA AÇILINCA (VARSA ESKİ VERİYİ DOLDUR)
window.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (!savedData) return;

  const data = JSON.parse(savedData);
  titleInput.value = data.title || "";
  descriptionInput.value = data.description || "";
});

// FORM KAYDET
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();

  if (!title || !description) {
    alert('Başlık ve açıklama boş olamaz.');
    return;
  }

  const serviceData = {
    title: title,
    description: description
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(serviceData));
  alert('Kaydedildi ✅');
});
