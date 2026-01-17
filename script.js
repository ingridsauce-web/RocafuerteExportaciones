function abrirWhatsapp() {
    const telefono = "59172866357";
    const mensaje = "Hola, deseo una cotización de minerales.";
    window.open(`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`, "_blank");
}

function mostrarInfo(mineral) {
    alert(
        "Información del mineral:\n\n" +
        mineral +
        "\n\nPara más detalles y cotización, contáctanos por WhatsApp o correo."
    );
}