//1: DEFINIR LOS PRODUCTOS
const productos = [
    // textiles
    { 
        id: 1, 
        nombre: 'Mochila Wayuu', 
        categoria: 'textiles', 
        precio: 85000, 
        imagen: 'img/mochila-wayuu.jpg', 
        descripcion: 'Mochila artesanal tejida a mano' 
    },
    { 
        id: 2, 
        nombre: 'Ruana de Lana', 
        categoria: 'textiles', 
        precio: 120000, 
        imagen: 'img/ruana.jpg', 
        descripcion: 'Ruana tradicional colombiana' 
    },
    { 
        id: 3, 
        nombre: 'Mantel Bordado', 
        categoria: 'textiles', 
        precio: 65000, 
        imagen: 'img/mantel.jpg', 
        descripcion: 'Mantel con bordados típicos' 
    },
    { 
        id: 4, 
        nombre: 'Tapiz Decorativo', 
        categoria: 'textiles', 
        precio: 95000, 
        imagen: 'img/tapiz.jpg', 
        descripcion: 'Tapiz tejido con diseños autóctonos' 
    },
    
    // ceramica
    { 
        id: 5, 
        nombre: 'Vasija de Ráquira', 
        categoria: 'ceramica', 
        precio: 45000, 
        imagen: 'img/vasija.jpg', 
        descripcion: 'Cerámica tradicional de Ráquira' 
    },
    { 
        id: 6, 
        nombre: 'Plato Decorativo', 
        categoria: 'ceramica', 
        precio: 35000, 
        imagen: 'img/plato.jpg', 
        descripcion: 'Plato pintado a mano' 
    },
    { 
        id: 7, 
        nombre: 'Jarrón Colonial', 
        categoria: 'ceramica', 
        precio: 75000, 
        imagen: 'img/jarron.jpg', 
        descripcion: 'Jarrón estilo colonial' 
    },
    { 
        id: 8, 
        nombre: 'Taza Artesanal', 
        categoria: 'ceramica', 
        precio: 25000, 
        imagen: 'img/taza.jpg', 
        descripcion: 'Taza de cerámica única' 
    },
    
    // joyeria
    { 
        id: 9, 
        nombre: 'Collar de Esmeraldas', 
        categoria: 'joyeria', 
        precio: 250000, 
        imagen: 'img/collar.jpg', 
        descripcion: 'Collar con esmeraldas colombianas' 
    },
    { 
        id: 10, 
        nombre: 'Aretes de Filigrana', 
        categoria: 'joyeria', 
        precio: 85000, 
        imagen: 'img/aretes.jpg', 
        descripcion: 'Aretes en filigrana de plata' 
    },
    { 
        id: 11, 
        nombre: 'Pulsera Tagua', 
        categoria: 'joyeria', 
        precio: 35000, 
        imagen: 'img/pulsera.jpg', 
        descripcion: 'Pulsera de semillas de tagua' 
    },
    { 
        id: 12, 
        nombre: 'Anillo de Plata', 
        categoria: 'joyeria', 
        precio: 95000, 
        imagen: 'img/anillo.jpg', 
        descripcion: 'Anillo artesanal en plata' 
    }
];

//2: CREAR EL CARRITO VACIO
let carrito = [];

// PASO 3: MOSTRAR LOS PRODUCTOS EN PANTALLA
function mostrarProductos() {
    // Mostramos todos los productos
    document.getElementById('allProducts').innerHTML = crearTarjetas(productos);
    
    // Mostramos solo textiles
    document.getElementById('textilesProducts').innerHTML = crearTarjetas(
        productos.filter(p => p.categoria === 'textiles')
    );
    
    // Mostramos solo ceramicas
    document.getElementById('ceramicaProducts').innerHTML = crearTarjetas(
        productos.filter(p => p.categoria === 'ceramica')
    );
    
    // Mostramos solo joyeria
    document.getElementById('joyeriaProducts').innerHTML = crearTarjetas(
        productos.filter(p => p.categoria === 'joyeria')
    );
}

// Esta funcion crea el HTML de las tarjetas de productos, con img
function crearTarjetas(listaProductos) {
    return listaProductos.map(producto => `
        <div class="card">
            <img src="${producto.imagen}" alt="${producto.nombre}" class="card-img">
            <div class="card-body">
                <span class="tag">${producto.categoria}</span>
                <div class="card-title">${producto.nombre}</div>
                <p class="card-text">${producto.descripcion}</p>
                <div class="card-footer">
                    <span class="price">$${producto.precio.toLocaleString()}</span>
                    <button class="btn" onclick="agregarAlCarrito(${producto.id})">Agregar</button>
                </div>
            </div>
        </div>
    `).join('');
}

//4: CAMBIAR ENTRE LAS CATEGORIAS
function showCategory(categoria) {
    // Primero ocultamos TODAS las secciones
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Ahora mostramos solo la seccion que queremos
    document.getElementById(categoria).classList.add('active');
    
    // Actualizamos los botones quitamos "active" de todos
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Y agregamos "active" al botón que se oprimio
    event.target.classList.add('active');
}
mostrarProductos();