const mostrarCompras = document.querySelector('.hidde'),
    form = document.getElementById('form'),
    pedido = document.getElementById('pedido');

const precios = {
    mozzarella: 1000,
    calabresa: 1500,
    napolitana: 1300,
    albahaca: 1400,
    cebollas: 1200,
    anchoas: 1600,
    rucula: 1700,
    puttanesca: 1800,
    especial: 1900,
    roquefort: 2200,
    cheddar: 2200,
    tvag: 2400
};

const listaDeCompras = [[]];


class Elecc {
    constructor(gusto, precio, cantidad) {
        this.gusto = gusto;
        this.precio = precio;
        this.cantidad = cantidad;
    }
};

form.addEventListener('click', (e) => {
    mostrarCompras.classList.remove('hidde');

    if (e.target.checked) {
        let nombre = e.target.name;

        const lista = document.createElement('li');
        lista.style.color = 'black';
        lista.innerText = nombre;

        const inptCant = document.createElement('input');
        inptCant.type = 'number';
        let cantidad = 0;
        inptCant.value = cantidad;

        listaDeCompras.push(new Elecc(e.target.name, precios[nombre], cantidad));

        console.log(listaDeCompras);

        lista.appendChild(inptCant);

        pedido.appendChild(lista);

    }
})
