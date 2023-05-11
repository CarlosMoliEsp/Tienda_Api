window.onload = () => {
    let json,json2, res;
    let categoriasjson;
    let nProductos=0;
    inicio();
    const contenedor = document.querySelector('#contenedor');

    // Productos
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json=>json2= json)

    function muestraProductos(j) {
        i = nProductos;
        while(i < j.length && i < (nProductos + 8)){
        // for (i = 0; i < j.length; i++) {
            contenedor.innerHTML +=`
                <div class="card" style="width: 18rem;">    
                    <img class="card-img-top" src="${j[i].image}" alt="Card image cap" with="200px" height="300px">
                    <div class="card-body">
                        <h5 class="card-title">${j[i].title}</h5>
                        <p class="card-subtitle mb-2 text-muted">Precio: ${j[i].price}$</p>

                        <button class="btn btn-primary"> Ver </button>
                        <a href="#" class="btn btn-primary">Comprar</a>
                    </div>
                </div>  
            `;
            i++;
        }
        nProductos = i;

    }

    // Categorias
    fetch('https://fakestoreapi.com/products/categories?sort=desc')
            .then(res=>res.json())
            .then(json=>categoriasjson=json)

    function muestraCategorias(j){
        for (i = 0; i < j.length; i++) {
            // $("#contenedor").append(j[i]);
            $("#list").append('<li><h3>'+ j[i]+'</h3></li>');
        }
    }

    // Ver un solo Producto al Completo
    // async function verProducto(id){
    //     console.log(id);
    // }






// Capas para Mostrar

    // Capa Inicio
    document.getElementById("inicio").addEventListener("click", inicio);
    function inicio() {
        limpiarBody();
        document.getElementById("contenedor").innerHTML = "<h2>&nbsp;&nbsp;Estas en el Inicio de la tienda</h2>";
    }
    // Capa Productos
    document.getElementById("Productos").addEventListener("click", function(){
        limpiarBody();
        muestraProductos(json2);
    });

    // Scroll infinito
    $(window).scroll(function(){
        console.log($(window).scrollTop());
        if($(window).scrollTop()+$(window).height()>=$(document).height()-100){
            alert("Cargando");
            muestraProductos(json2);
        }
    });

    // Capa Categorias
    document.getElementById("Categorias").addEventListener("click", function(){
        limpiarBody();
        document.getElementById('categorias').style = 'display:block'
        // console.log(categoriasjson);
        muestraCategorias(categoriasjson);
    });

    // Pone en blanco el Body para cargar otra funcion
    function limpiarBody(){
        document.getElementById("contenedor").innerHTML = "";
        document.getElementById("categorias").style.display="none";
    }

}