function abrirWhatsapp(){
    window.open("https://wa.me/59172866357","_blank")
}

const links = {
    sal: "https://drive.google.com/uc?export=download&id=1Q8VqHGYa5pVbKENR_XW70bC7fR_SBsRR",
    puzolana: "https://drive.google.com/uc?export=download&id=1U3MAEkINa0aYrvUJr4N4rq0tjpNjmoYo",
    baritina: "https://drive.google.com/uc?export=download&id=1xeAv5z-czxMOFZLmDBVl1hjkTrD3ZITZ",
    bentonita: "https://drive.google.com/uc?export=download&id=18_rzFIRXhuqa5u8qVnhVyUmrTvs7Zum7",
    rodio: "https://drive.google.com/uc?export=download&id=1MQzVJjza_Gsh8muT3s7nw2Ij0a8LDle",
    caolin: "https://drive.google.com/uc?export=download&id=17IfPGjHwnGP54y5qhoUJ8MlfkBHc6W3"
}

function descargar(mineral){
    const url = links[mineral.toLowerCase()]
    if(!url) return
    const a = document.createElement("a")
    a.href = url
    a.click()
}
