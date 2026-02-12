const binPhoto = document.getElementById("binPhoto");
const parLine = document.getElementById("parLine");
const togglePhotoBtn = document.getElementById("togglePhotoBtn");
const toggleParBtn = document.getElementById("toggleParBtn");

togglePhotoBtn.addEventListener("click", () => {
  binPhoto.classList.toggle("off");
});

toggleParBtn.addEventListener("click", () => {
  parLine.classList.toggle("off");
});
