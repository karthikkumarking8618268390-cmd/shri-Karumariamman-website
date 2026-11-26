console.log("Welcome to Shri Karumariyamman Temple!");

document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    console.log("Navigation:", link.textContent);
  });
});