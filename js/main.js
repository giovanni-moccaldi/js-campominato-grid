// const bottone = document.getElementById("play")
// bottone.addEventListener(
//     "click",
//     function () {
//         this.value.toggle();
//     }
// )
const listtowrite = document.getElementById("big-square");
// assegno numeri in una funzione per 100
generate(listtowrite);
function generate() {
    // assegno i valori
    const whitelist = [];
    for (let i = 0; i < 100; i++) {
        whitelist.push(i);
        // console.log(whitelist);
    }

    for (let i = 0; i < 100; i++) {
        // creo un div per mettere i numeri
        const listitem = document.createElement("div");
        // qui scrivo i numeri nel html
        listitem.innerHTML = whitelist[i];
        // aggiungo una classe
        listitem.classList.add("smallsquare");
        listtowrite.append(listitem);
        // aggiungo un click
        listitem.addEventListener(
            "click",
            function () {
                this.classList.toggle("azzurro");
                console.log(whitelist[i])
            }
        )
    }

}