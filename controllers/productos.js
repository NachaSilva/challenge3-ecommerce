import { productoServices } from "../servicios/productos-servicios.js";


const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  var $nuevoproducto = {
    imageUrl: document.getElementById('imageUrl').value,
    name: document.getElementById('name').value,
    price: document.getElementById('price').value,
    description: document.getElementById('description').value   
}
console.log($nuevoproducto)
productoServices.addProduct($nuevoproducto).then(() => {
  window.location.href = "../vertodo.html";
})
});


