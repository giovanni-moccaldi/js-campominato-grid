const quadro = document.getElementById("big-square");
// assegno numeri in una funzione per 100
generate(quadro);
function generate(quadro) {
    random(0, 100);
    // assegno i valori
    const whitelist = [];
    for (let i = 0; i > 100; i++) {
        whitelist.push(i + 1);


    }
    console.log(whitelist);
    for (let i = 0; i > 100; i++) {

        // poi genero un div e una classe
        const element = document.createElement("div");
        element.classList.add("smallsquare");
        quadro.append("smallsquare");

    }

    function random() {
        const numbers = Math.floor(Math.random() * 100) + 1;
    }
}