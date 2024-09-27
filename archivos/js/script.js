
function menuToggle() {
    const menu= document.getElementById("menu")
    menu.classList.toggle("active")
}

const productos = [
    {
        titulo: "El grito-Munch",
        img: "./archivos/img/susto.jpg",
        etiquetas: "#arte #Munch",
    },
    {
        titulo: "noche.jpg",
        img: "./archivos/img/noche.jpg",
        etiquetas: "#Van Gogh",
    },
    {
        titulo: "lajoven.jpg",
        img: "./archivos/img/lajoven.jpg",
        etiquetas: "#Johannes Vermeer",
    },
    {
        titulo: "rafael.jpg",
        img: "./archivos/img/rafael.jpg",
        etiquetas: "#Rafael Sanzio",
    },

    ];
    
    const container = document.querySelector("#cards-container");
    
    function crearCard(producto) {
    return `
            <div class="card">
                <img src="${producto.img}" alt="${producto.titulo}" class="card-img">
                <div class="card-content">
                    <p class="card-description">${producto.etiquetas}</p>
                </div>
            </div>
        `;
    }
    
    productos.forEach((producto) => {
    container.innerHTML += crearCard(producto);
    });
    
    const botonDerecha = document.querySelector(".derecha")
    const botonIzquierda = document.querySelector(".izquierda")
    const contenedorCarrusel = document.querySelector(".carrusel")
//no olvidar usae let cuando vas a cambiar la variable
    let actual = 0
    const totalDeCards = document.querySelectorAll(".card").length
    
    
    botonDerecha.addEventListener("click", () => {
        if (actual < totalDeCards - 1) {
            actual++
        } else {
            actual = 0
        }
        actualizarCarrusel()
    })

    botonIzquierda.addEventListener("click", () => {
        if (actual > 0) {
            actual--
        } else {
            actual = totalDeCards - 1
        }
        actualizarCarrusel()
    })

    function actualizarCarrusel() {
        const anchoCarrusel = contenedorCarrusel.clientWidth;
        const nuevoDesplazamiento = -anchoCarrusel * actual;
        contenedorCarrusel.style.transform = `translateX(${nuevoDesplazamiento}px)`;
    }


