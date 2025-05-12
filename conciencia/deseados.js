let carrito = [];
let deseado = [];


const botonVerCarrito = document.getElementById("verCarrito");
const menuCarrito = document.getElementById("carritoMenu");
const botonVerDeseado = document.getElementById("verDeseado");
const menuDeseado = document.getElementById("menuDeseado");
const botonAgregar = document.querySelector(".botonp");
const botonDeseados = document.querySelector(".deseados");
const listaCarrito = document.getElementById("listaCarrito");
const listaDeseado = document.getElementById("listaDeseado");
const totalTexto = document.getElementById("totalCarrito");



botonVerCarrito.addEventListener("click", () => menuCarrito.classList.toggle("visible"));
botonVerDeseado.addEventListener("click", () => menuDeseado.classList.toggle("visible"));

window.addEventListener("load", function () {
  const carritoGuardado = JSON.parse(localStorage.getItem("carrito"));
  const deseadoGuardado = JSON.parse(localStorage.getItem("deseado"));
  
  if (carritoGuardado) {
    carrito = carritoGuardado;
    carrito.forEach((producto, index) => agregarProductoAlCarrito(producto, index));
    actualizarTotal();
  }

  if (deseadoGuardado) {
    deseado = deseadoGuardado;
    deseado.forEach((producto, index) => agregarProductoADeseado(producto, index));
  }
});


botonAgregar.addEventListener("click", () => {
  const imagen = document.getElementById("imgDetalle").src;
  const nombre = document.getElementById("nombreDetalle").textContent;
  const precioTexto = document.getElementById("precioDetalle").textContent;
  const cantidadTexto = document.getElementById("cantidad").value;

  const precio = Number(precioTexto.replace("$", "").replace(/\./g, ""));
  const cantidad = Number(cantidadTexto);

  if (!cantidad) {
    alert("Selecciona una cantidad");
    return;
  }

  const producto = { imagen, nombre, precio, cantidad };
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));

  agregarProductoAlCarrito(producto, carrito.length - 1);
  actualizarTotal();
   menuCarrito.classList.add("visible");
});


botonDeseados.addEventListener("click", () => {
  const imagen = document.getElementById("imgDetalle").src;
  const nombre = document.getElementById("nombreDetalle").textContent;
  const precioTexto = document.getElementById("precioDetalle").textContent;
  const cantidadTexto = document.getElementById("cantidad").value;

  const precio = Number(precioTexto.replace("$", "").replace(/\./g, ""));
  const cantidad = Number(cantidadTexto);

  if (!cantidad) {
    alert("Selecciona una cantidad");
    return;
  }

  const producto = {  imagen, nombre, precio, cantidad };
  deseado.push(producto);
  localStorage.setItem("deseado", JSON.stringify(deseado));

  agregarProductoADeseado(producto, deseado.length - 1);
});


function trasladarAlCarrito(index) {
  const producto = deseado[index];
  carrito.push(producto);
  deseado.splice(index, 1);

  localStorage.setItem("carrito", JSON.stringify(carrito));
  localStorage.setItem("deseado", JSON.stringify(deseado));

  listaCarrito.innerHTML = "";
  listaDeseado.innerHTML = "";

  carrito.forEach((producto, i) => agregarProductoAlCarrito(producto, i));
  deseado.forEach((producto, i) => agregarProductoADeseado(producto, i));

  actualizarTotal();
}


function agregarProductoADeseado(producto, index) {
  const item = document.createElement("li");
  
   const img = document.createElement("img");
  img.src = producto.imagen;
  img.alt = producto.nombre;
  img.style.width = "50px";
  img.style.height = "50px";
  img.style.objectFit = "cover";
  img.style.marginRight = "10px";

  const texto = document.createElement("span");
  texto.textContent = `${producto.nombre} - ${producto.cantidad} x $${producto.precio.toLocaleString("es-CO")}`;


  const botonTrasladar = document.createElement("button");
  botonTrasladar.textContent = "Trasladar al Carrito";
  botonTrasladar.style.marginLeft = "10px";
  botonTrasladar.style.color = "white";
  botonTrasladar.style.background = "green";
  botonTrasladar.style.border = "none";
  botonTrasladar.style.borderRadius = "5px";
  botonTrasladar.style.cursor = "pointer";

  botonTrasladar.addEventListener("click", () => trasladarAlCarrito(index));
  
  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.style.marginLeft = "10px";
  botonEliminar.style.color = "white";
  botonEliminar.style.background = "red";
  botonEliminar.style.border = "none";
  botonEliminar.style.borderRadius = "5px";
  botonEliminar.style.cursor = "pointer";

  botonEliminar.addEventListener("click", () => {
    deseado.splice(index, 1);
    localStorage.setItem("deseado", JSON.stringify(deseado));
    listaDeseado.innerHTML = "";
    deseado.forEach((producto, i) => agregarProductoADeseado(producto, i));
    actualizarTotal();
  });
  
  item.style.display = "flex";
  item.style.alignItems = "center";
  item.style.marginBottom = "10px";
  item.appendChild(img);
  item.appendChild(texto);
  item.appendChild(botonTrasladar);
  item.appendChild(botonEliminar);
  listaDeseado.appendChild(item);
}


function agregarProductoAlCarrito(producto, index) {
  const item = document.createElement("li");
  
  const img = document.createElement("img");
  img.src = producto.imagen;
  img.alt = producto.nombre;
  img.style.width = "50px";
  img.style.height = "50px";
  img.style.objectFit = "cover";
  img.style.marginRight = "10px";

  const texto = document.createElement("span");
  texto.textContent = `${producto.nombre} - ${producto.cantidad} x $${producto.precio.toLocaleString("es-CO")}`;

  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.style.marginLeft = "10px";
  botonEliminar.style.color = "white";
  botonEliminar.style.background = "red";
  botonEliminar.style.border = "none";
  botonEliminar.style.borderRadius = "5px";
  botonEliminar.style.cursor = "pointer";

  botonEliminar.addEventListener("click", () => {
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    listaCarrito.innerHTML = "";
    carrito.forEach((producto, i) => agregarProductoAlCarrito(producto, i));
    actualizarTotal();
  });

  item.style.display = "flex";
  item.style.alignItems = "center";
  item.style.marginBottom = "10px";

  item.appendChild(img);
  item.appendChild(texto);
  item.appendChild(botonEliminar);
  listaCarrito.appendChild(item);
}


function actualizarTotal() {
  let total = 0;
  carrito.forEach(producto => {
    total += producto.precio * producto.cantidad;
  });
  totalTexto.textContent = total.toLocaleString("es-CO");
}