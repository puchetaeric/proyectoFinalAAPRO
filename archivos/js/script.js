
function menuToggle() {
    const menu= document.getElementById("menu")
    menu.classList.toggle("active")
}

const productos = [
    {
        titulo: "Producto 1",
        descripcion: "Descripción del producto 1",
        img: "https://placehold.co/400",
    },
    {
        titulo: "Producto 2",
        descripcion: "Descripción del producto 2",
        img: "https://placehold.co/400",
    },
    {
        titulo: "Producto 3",
        descripcion: "Descripción del producto 3",
        img: "https://placehold.co/400",
    },
    {
        titulo: "Producto 4",
        descripcion: "Descripción del producto 4",
        img: "https://placehold.co/400",
    },
    {
        titulo: "Producto 5",
        descripcion: "Descripción del producto 5",
        img: "https://placehold.co/400",
    },
    ];
    
    const container = document.querySelector("#cards-container");
    
    function crearCard(producto) {
    return `
            <div class="card">
                <img src="${producto.img}" alt="${producto.titulo}" class="card-img">
                <h2 class="card-title">${producto.titulo}</h2>
                <div class="card-content">
                    <p class="card-description">${producto.descripcion}</p>
                </div>
            </div>
        `;
    }
    
    productos.forEach((producto) => {
    container.innerHTML += crearCard(producto);
    });
    

