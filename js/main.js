const quadro = document.getElementById("big-square");
// assegno numeri in una funzione per 100

function generate(quadro) {
    for (let i = 0; i < 100; i++) {
        // poi genero un div e una classe
        const element = document.createElement("div");
        element.classList.add("small-square");
        quadro.append("smallsquare");



    }

}
