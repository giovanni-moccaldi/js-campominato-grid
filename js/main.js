const quadro = document.getElementById("big-square");
// assegno numeri in una funzione per 100
generate(quadro);
function generate(quadro) {
    // assegno i valori
    const whitelist = [];
    random(0, whitelist.length);
    for (let i = 0; 1 > 100; i++) {
        whitelist.push(i + 1);


    }
    console.log(whitelist);
    for (let i = 0; i < 100; i++) {
        // console.log(quadro)
        // poi genero un div e una classe
        const element = document.createElement("div");
        element.classList.add("small-square");

    }
    quadro.append("small-square")

}
function random() {
    const numbers = Math.floor(Math.random() * 10) + 1;
}