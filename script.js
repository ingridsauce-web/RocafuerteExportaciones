function abrirWhatsapp(){
    const telefono = "59172866357";
    const mensaje = "Hola, deseo información y cotización de minerales.";
    window.open(
        `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`,
        "_blank"
    );
}

function mostrarInfo(mineral){
    const archivos = {
        "Sal": "Ficha técnica SAL GRANULADA.pdf",
        "Puzolana": "Ficha técnica PUZOLANA.pdf",
        "Baritina": "Ficha técnica BARITINA.pdf",
        "Bentonita": "Ficha técnica BENTONITA.pdf",
        "Rodio": "FICHA TECNICA RODIO.pdf",
        "Caolín": "Ficha técnica KAOLIN.pdf"
    };

    const archivo = archivos[mineral];

    if(archivo){
        const enlace = document.createElement("a");
        enlace.href = `pdf/${archivo}`;
        enlace.download = archivo;
        document.body.appendChild(enlace);
        enlace.click();
        document.body.removeChild(enlace);
    }
}
