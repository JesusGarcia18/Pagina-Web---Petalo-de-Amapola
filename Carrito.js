const btnCart = document.querySelector('.container-principal')
const carrito = document.querySelector('.carrito')


const cartInfo = document.querySelector('.producto-carrito');
const rowProducto = document.querySelector('.row-producto');

const productosLista = document.querySelector('.container-productos');

let allProductos = [];

const valorTotal = document.querySelector('.total-pagar');
const countProducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

productosLista.addEventListener('click', e => {

    if(e.target.classList.contains('btn-producto')){
        const producto = e.target.parentElement

        const infoProducto = {
            quantity: 1,
            title: producto.querySelector('h4').textContent,
            price: producto.querySelector('.precio').textContent,
        }

        const exist = allProductos.some(product => product.title === infoProducto.title)

        if(exist){
            const products = allProductos.map(product => {
                if(product.title === infoProducto.title){
                    product.quantity++;
                    return product;
                } else{
                    return product;
                }
            });
            allProductos = [...products];
        } else {
            allProductos = [...allProductos, infoProducto];
        }

        showHTML();
    }
});

rowProducto.addEventListener('click', e => {
	if (e.target.classList.contains('close')) {
		const product = e.target.parentElement;
		const title = product.querySelector('p').textContent;

		allProductos = allProductos.filter(
			product => product.title !== title
		);

		showHTML();
	}
});

const showHTML = () => {

    if(!allProductos.length){
        carrito.innerHTML=`
            <p class="w3-panel m-2">El carrito esta vacio</p>
        `
    }


    rowProducto.innerHTML = ``;

    let total = 0;
    let totalOfProducts = 0;

    allProductos.forEach(product => {
        const containerProducto = document.createElement('div');
        containerProducto.classList.add('producto-carrito');

        containerProducto.innerHTML = `
            <span onclick="this.parentElement.style.display='none'"
            class="w3-bar-item w3-button w3-xlarge w3-right">&times;</span>
            <div class="w3-bar-item mt-2 info-producto">
                <span class="cantidad">${product.quantity}</span>
                <span class="producto">${product.title}</span>
                <span class="precio">${product.price}</span>
            </div>
        
        `;

        rowProducto.append(containerProducto);

        total = total + parseInt(product.quantity * product.price.slice(1));
        totalOfProducts = totalOfProducts + product.quantity;
    })

    valorTotal.innerText = `$${total}`;
    countProducts.innerText = totalOfProducts;
}
