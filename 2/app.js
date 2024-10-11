// function changeText(){
//     document.getElementById("text").innerHTML = "Metin başarıyla değiştirildi";
// }


function changeText(){
    const messages = [
        "Metin başarıyla değiştirildi",
        "Her şey yolunda",
        "Güncelleme Başarılı",
        "İşlem Tamam",
        "Harika bir değişiklik oldu"
    ];

    //Rastgele bir dizin seç
    const randomIndex = Math.floor(Math.random() * messages.length);

    //Seçilen reastgele mesajı metne atama
    document.getElementById("text").innerHTML = messages[randomIndex];

    // Rastgele bir renk seç (RGB formatında)
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

    // Seçilen rengi metne uygula
    document.getElementById("text").style.color = randomColor;
}