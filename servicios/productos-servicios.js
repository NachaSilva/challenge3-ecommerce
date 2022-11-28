//GET

const listaProductos = () => fetch("http://localhost:3000/producto").then(respuesta => respuesta.json());
const addProduct = (_dato) => fetch("http://localhost:3000/producto",{
    method: "POST",
    body: JSON.stringify(_dato),
    headers: {
        "Content-type":"application/json; charset=UTF-8"
    }
})

export const productoServices = {
    listaProductos,
    addProduct
} 