  function closeModal() {
    document.getElementById("product-modal").style.display = "none";
  }

  document.querySelectorAll(".buy-now").forEach(btn => {
    btn.addEventListener("click", () => {
      const name = btn.dataset.name;
      const price = btn.dataset.price;
      const img = btn.dataset.img;

      document.getElementById("modal-title").textContent = name;
      document.getElementById("modal-price").textContent = price;
      document.getElementById("modal-image").src = img;

      document.getElementById("product-modal").style.display = "flex";
    });
  });