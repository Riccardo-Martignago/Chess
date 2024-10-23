/*Creating a grid 8x8 */
/*  Creo una costate che selezioni il tag in cui inserire la griglia
    */

const start = document.getElementById("start").addEventListener("click", createGrid);
const grid = document.getElementsByTagName("section")[0];

function createGrid (){
    // if(){
        for (let index = 0; index < 17; index++) {
            console.log('Cell' + index);
            let createCell = document.createElement("div");
            grid.appendChild(createCell);
        };
    // }
    // else{
    //     prompt('La partita é gia stata avviata');
    // }
};