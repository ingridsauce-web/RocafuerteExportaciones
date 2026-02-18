function abrirWhatsapp(){
    window.open("https://wa.me/59172866357","_blank")
}

const links = {
    sal: "https://drive.google.com/file/d/1sNEKJzytMh-yNj4SyzU4Ftg1evAmrOeK/view?usp=sharing",
    puzolana: "https://drive.google.com/file/d/1BJzhHN5Hfs6QAbxmoL-7CUyWagt5v5sj/view?usp=sharing",
    baritina: "https://drive.google.com/file/d/1mneaS_rQ5yX35C9Te_LGiSQx0-1mFDbL/view?usp=sharing",
    bentonita: "https://drive.google.com/file/d/1SixZyyc0xw8JZ-v9ZAtS6h3W7Bx1pcmn/view?usp=sharing",
    rodio: "https://drive.google.com/file/d/1ImhXt3YjN6uQVMKDKYMtiNtA9DwFwzkf/view?usp=sharing",
    caolin: "https://drive.google.com/file/d/1JLOM4VRTmBjTo_H-USN90Vh212VD-XpS/view?usp=sharing",
    ulexita:"https://drive.google.com/file/d/1TtcvGRvNp16COZ9ded88KWGdVwpAYIxQ/view?usp=sharing",
    ulexita2:"https://drive.google.com/file/d/1pcdNxyd5ujVzgaDvNSkPFiiHBJyFz6tu/view?usp=sharing"
}

function descargar(mineral){
    const url = links[mineral.toLowerCase()]
    if(!url) return
    const a = document.createElement("a")
    a.href = url
    a.click()
}
