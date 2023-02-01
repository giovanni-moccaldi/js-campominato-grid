const quadro = document.getElementById("big-square");
// assegno numeri in una funzione per 100
generate(quadro);
function generate(quadro) {
    // assegno i valori
    const whitelist = [];
    for (let i = 0; i < 100; i++) {
        whitelist.push(i);
        console.log(whitelist);


    }
    for (let i = 0; i < 100; i++) {

        const element = document.createElement("div");
        element.classList.add("smallsquare");
        quadro.append("smallsquare");
    }

}