$(document).ready(function () {
    // alert("Pagina cargada");
    $('#onload').fadeOut();
    let json, json2, res;
    let categoriasjson;
    let nProductos = 0;

    let carrito;
    inicio();
    crearCarrito();
    const contenedor = document.querySelector('#contenedor');

    // Carrito
    async function crearCarrito() {
        await fetch('https://fakestoreapi.com/carts', {
            method: "POST",
            body: JSON.stringify(
                {
                    userId: 5,
                    date: 2020 - 02 - 03,
                    products: []
                }
            )
        })
            .then(res => res.json())
            .then((json) => {
                carrito = json
                console.log(carrito);

            })

        // console.log(carrito);
    }
    console.log(carrito);


    // Productos
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => json2 = json)

        
    function muestraProductos(j) {
        i = nProductos;
        while (i < j.length && i < (nProductos + 8)) {
            // for (i = 0; i < j.length; i++) {
            contenedor.innerHTML += `
            <div class="col-3">
                <div class="card" style="width: 18rem;">    
                    <img class="card-img-top" src="${j[i].image}" alt="Card image cap" with="200px" height="300px">
                    <div class="card-body">
                        <h5 class="card-title">${j[i].title}</h5>
                        <p class="card-subtitle mb-2 text-muted">Precio: ${j[i].price}$</p>
                        <h5 class="card-title">${j[i].category}</h5>
 

                        <button onclick="verProducto(${j[i].id})" class="btn btn-primary"> Ver </button>
                        <a id="comprar${i}" class="btn btn-primary">Comprar</a>
                    </div>
                </div> 
            </div> 
            `;
            console.log(j[i].id);
            document.getElementById("comprar".j[i].id).addEventListener("click", function () {
                console.log("Hila");
            });
            i++;
        }
        nProductos = i;
        // for (let index = 0; index <= j.length; index++) {
        //     console.log(j[i].id);
        //     document.getElementById("comprar".i).addEventListener("click", function () {
        //         console.log("Hila");
        //     });
        // }
        

    }
    // No va
    function verProducto(id) {
        console.log(id);
    }

    // document.getElementById("comprar").addEventListener("click", function () {
    //     console.log("Hila");
    // });

    // var compritas = document.getElementById("comprar");
    // console.log(compritas);
    // if (compritas) {
    //     console.log(compritas);
    //     compritas.addEventListener("click", function () {
    //         console.log("Hila");
    //     });
    // }


    // Categorias

    // Categoria Electronics
    fetch('https://fakestoreapi.com/products/category/electronics')
        .then(res => res.json())
        .then(json => categoria1 = json)
    function muestraCategoria(j) {
        for (i = 0; i < j.length; i++) {
            contenedor.innerHTML += `
            <div class="col-2">
                <div class="card" style="width: 15rem;">    
                    <img class="card-img-top" src="${j[i].image}" alt="Card image cap" with="200px" height="300px">
                    <div class="card-body">
                        <h5 class="card-title">${j[i].title}</h5>
                        <p class="card-subtitle mb-2 text-muted">Precio: ${j[i].price}$</p>
                        <h5 class="card-title">${j[i].category}</h5>
 

                        <button onclick="" class="btn btn-primary"> Ver </button>
                        <a href="#" class="btn btn-primary">Comprar</a>
                    </div>
                </div> 
            </div> 
            `;
        }
    }
    // Categoria Ropa Hombre
    fetch("https://fakestoreapi.com/products/category/men's clothing")
        .then(res => res.json())
        .then(json => categoria2 = json)
    
    // Categoria Ropa Mujer
    fetch("https://fakestoreapi.com/products/category/women's clothing")
        .then(res => res.json())
        .then(json => categoria3 = json)
    

    // Categoria Joyas
    fetch('https://fakestoreapi.com/products/category/jewelery')
        .then(res => res.json())
        .then(json => categoria4 = json)



    // Capas para Mostrar

    // Capa Inicio
    document.getElementById("inicio").addEventListener("click", inicio);
    function inicio() {
        limpiarBody();
        document.getElementById("contenedor").innerHTML = "<h2>&nbsp;&nbsp;Estas en el Inicio de la tienda</h2>";
    }

    // Capa Productos
    document.getElementById("Productos").addEventListener("click", function () {
        limpiarBody();
        muestraProductos(json2);
    });
    // Scroll infinito
    $(window).scroll(function () {
        console.log($(window).scrollTop());
        if ($(window).scrollTop() + $(window).height() >= $(document).height() - 100) {
            alert("Cargando");
            muestraProductos(json2);
            // $('#onload').fadeOut();
        }
    });

    // Capa Categoria
    //  Electronics
    document.getElementById("Electronics").addEventListener("click", function () {
        limpiarBody();
        document.getElementById('categorias').style = 'display:block'
        // console.log(categoriasjson);
        muestraCategoria(categoria1);
    });
    // Ropa Hombre
    document.getElementById("Men").addEventListener("click", function () {
        limpiarBody();
        document.getElementById('categorias').style = 'display:block'
        // console.log(categoriasjson);
        muestraCategoria(categoria2);
    });
    // Ropa Mujer
    document.getElementById("Women").addEventListener("click", function () {
        limpiarBody();
        document.getElementById('categorias').style = 'display:block'
        // console.log(categoriasjson);
        muestraCategoria(categoria3);
    });
    // Joyas
    document.getElementById("Joyas").addEventListener("click", function () {
        limpiarBody();
        document.getElementById('categorias').style = 'display:block'
        // console.log(categoriasjson);
        muestraCategoria(categoria4);
    });

    // Pone en blanco el Body para cargar otra funcion
    function limpiarBody() {
        document.getElementById("contenedor").innerHTML = "";
        document.getElementById("categorias").style.display = "none";
    }

})
