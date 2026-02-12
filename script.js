const binPhoto = document.getElementById("binPhoto");
const parLine = document.getElementById("parLine");
const togglePhotoBtn = document.getElementById("togglePhotoBtn");
const toggleParBtn = document.getElementById("toggleParBtn");

const compare = document.getElementById("compare");
const toggleCompareBtn = document.getElementById("toggleCompareBtn");

togglePhotoBtn.addEventListener("click", () => {
  binPhoto.classList.toggle("off");
});

toggleParBtn.addEventListener("click", () => {
  parLine.classList.toggle("off");
});

toggleCompareBtn.addEventListener("click", () => {
  // If compare grid is showing, hide the old panel by toggling a class
  compare.classList.toggle("showNewOnly");
});

// Optional: if you want showNewOnly to work, add this CSS rule:
