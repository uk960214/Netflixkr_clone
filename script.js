const collapseItems = document.querySelectorAll(".collapse-title")
let i;

function showContent(e) {
  const collapseItem = document.querySelector(`#${this.id}-content`)
  if(collapseItem.style.display === "block") {
    collapseItem.style.display = "none";
  } else {
    collapseItem.style.display = "block";
  }
  
}
collapseItems.forEach(item => item.addEventListener('click', showContent));
