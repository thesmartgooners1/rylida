// Just a simple script to show how JS connects
console.log("Portfolio site loaded!");

// Example: Alert when clicking on project link
document.querySelectorAll(".project-card a").forEach(link => {
  link.addEventListener("click", () => {
    alert("Opening " + link.textContent + "!");
  });
});
