
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
    



// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="styles.css">
//     <title>Document</title>
// </head>

// <body>
//     <h1>Productos</h1>

//     <div class="card">
//         <img src="https://placehold.co/400" alt="Producto" class="card-img">
//         <div class="card-content">
//             <h2 class="card-title">Nombre del Producto</h2>
//             <p class="card-description">Esta es una breve descripción del producto. Es de gran calidad y a un excelente
//                 precio.</p>
//             <p class="card-price">$ 99.99</p>
//         </div>
//     </div>

//     <div id="cards-container"></div>

//     <script src="cards.js"></script>
// </body>

// </html>

// body {
//     font-family: Arial, sans-serif;
//     background-color: #333;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     margin: 0;
//     padding: 2rem;
// }

// .card {
//     background-color: #fff;
//     border-radius: 8px;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//     overflow: hidden;
//     width: 300px;
//     text-align: center;
//     transition: transform 0.3s ease;
//     margin-bottom: 2rem;
// }

// .card:hover {
//     transform: translateY(-10px);
//     transition: transform 0.3s ease;
// }

// .card-img {
//     width: 100%;
//     height: auto;
// }

// .card-content {
//     padding: 16px;
// }

// .card-title {
//     font-size: 1.5em;
//     margin: 10px 0;
//     color: #333;
// }

// .card-description {
//     font-size: 0.9em;
//     color: #777;
//     margin-bottom: 15px;
// }

// .card-price {
//     font-size: 1.2em;
//     color: #e67e22;
//     font-weight: bold;
// }

// const productos = [
// {
//     titulo: "Producto 1",
//     descripcion: "Descripción del producto 1",
//     precio: "$ 49.99",
//     img: "https://placehold.co/400",
// },
// {
//     titulo: "Producto 2",
//     descripcion: "Descripción del producto 2",
//     precio: "$ 59.99",
//     img: "https://placehold.co/400",
// },
// {
//     titulo: "Producto 3",
//     descripcion: "Descripción del producto 3",
//     precio: "$ 69.99",
//     img: "https://placehold.co/400",
// },
// {
//     titulo: "Producto 4",
//     descripcion: "Descripción del producto 4",
//     precio: "$ 79.99",
//     img: "https://placehold.co/400",
// },
// {
//     titulo: "Producto 5",
//     descripcion: "Descripción del producto 5",
//     precio: "$ 89.99",
//     img: "https://placehold.co/400",
// },
// ];

// const container = document.querySelector("#cards-container");

// function crearCard(producto) {
// return `
//         <div class="card">
//             <img src="${producto.img}" alt="${producto.titulo}" class="card-img">
//             <div class="card-content">
//                 <h2 class="card-title">${producto.titulo}</h2>
//                 <p class="card-description">${producto.descripcion}</p>
//                 <p class="card-price">${producto.precio}</p>
//             </div>
//         </div>
//     `;
// }

// productos.forEach((producto) => {
// container.innerHTML += crearCard(producto);
// });
