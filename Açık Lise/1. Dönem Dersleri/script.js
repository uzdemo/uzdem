function kontrolEt(){
    var dogruCevap = "A";
    var secilenCevap = document.querySelector('input[name="cevap"]:checked').value;
    if(secilenCevap == dogruCevap){
        alert("Cevabınız doğru!");
    } else {
        alert("Cevabınız yanlış! Doğru cevap: " + dogruCevap);
    }
}