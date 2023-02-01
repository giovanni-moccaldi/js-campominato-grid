const quadro = document.getElementById("big-square");
// assegno numeri in una funzione per 100
generate(quadro);
function generate(quadro) {
    for (let i = 0; i < 100; i++) {
        // console.log(quadro)
        // poi genero un div e una classe
        const element = document.createElement("div");
        element.classList.add("smallsquare");
        // assegno i valori
        const numbershtml = random(0, 100);
        console.log(numbershtml);


    }

}
function random(quadro) {
    const numbers = Math.floor(Math.random() * 10) + 1;
}