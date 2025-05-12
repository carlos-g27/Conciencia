/*ventana1*/
const botoniz=document.getElementById("b");
const botonde=document.getElementById("j");
const botonizz=document.getElementById("g");
const botondde=document.getElementById("h");
const botonizzz=document.getElementById("y");
const botonddee=document.getElementById("v")
const suplementos=document.getElementById("productos");
const suplementos1=document.getElementById("productos1")
const suplementos3=document.getElementById("productos3")
const MMenu=document.getElementById("menuuu")
const Menu=document.getElementById("menu");
const Menuu=document.getElementById("menuu");



MMenu.addEventListener("click",function(){
    Menu.classList.toggle("visible");
    Menuu.classList.toggle("visible");
    MMenu.classList.toggle("g");
    
    
})

botoniz.addEventListener("click",function(){
    suplementos.scrollLeft -= 400;
});
botonde.addEventListener("click",function(){
    suplementos.scrollLeft += 400;
});
botonizz.addEventListener("click",function(){
    suplementos1.scrollLeft -= 400;
});
botondde.addEventListener("click",function(){
    suplementos1.scrollLeft += 400;
});
botonddee.addEventListener("click",function(){
    suplementos3.scrollLeft += 400;
});
botonizzz.addEventListener("click",function(){
    suplementos3.scrollLeft -= 400;
});

function verproducto(producto) {

    const nombre = document.getElementById("nombre_" + producto).innerText;
    const precio = document.getElementById("Precio_" + producto).innerText;
    const Des = document.getElementById("Des_" + producto).innerText;
    const imagen = document.getElementById("imagen_" + producto).src;


    localStorage.setItem("nombre", nombre);
    localStorage.setItem("precio", precio);
    localStorage.setItem("Des", Des);
    localStorage.setItem("imagen", imagen);


    window.location.href = "index3.html";
}






 

