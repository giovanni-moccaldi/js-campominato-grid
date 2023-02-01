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
        const listitem = document.createElement("div");
        listitem.innerHTML = whitelist[i];
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