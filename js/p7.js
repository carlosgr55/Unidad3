let linkAr = ["https://www.youtube.com/watch?v=r1ueGwJjnbg",
    "https://www.youtube.com/watch?v=2TAZJHgGt_c",
    "https://www.youtube.com/watch?v=i2lGFabA0Qc",
    "https://www.youtube.com/watch?v=Lj72RYJ0zNs",
    "https://www.youtube.com/watch?v=myq6w3aNVio"
];

function eliminarNodo(){
    let documento = document.querySelector(".peli:nth-child(1)")
    linkAr.shift();
    documento.remove();
    console.log(links.join(", "));
}

function agregarLink(){
    for(let i = 0; i < linkAr.length; i++){
        let nodo = document.querySelector(".contenedor").children[i];
        const link = document.createElement("a");
        const texto = document.createTextNode("Clip");
        link.appendChild(texto);
        link.setAttribute("href", linkAr[i]);
        nodo.appendChild(link);
    }
}