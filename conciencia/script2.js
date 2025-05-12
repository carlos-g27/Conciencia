document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("nombreDetalle").innerText = localStorage.getItem("nombre");
  document.getElementById("precioDetalle").innerText = localStorage.getItem("precio");
  document.getElementById("imgDetalle").src = localStorage.getItem("imagen");
  document.getElementById("DesDetalle").innerText = localStorage.getItem("Des");
});

