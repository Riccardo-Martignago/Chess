/*Creating a grid 8x8 */

const start = document.getElementById("start").addEventListener("click", createGrid);
const grid = document.getElementsByTagName("section")[0];

function createGrid (){
    if(grid.hasChildNodes()){
        alert('La partita é gia stata avviata');
    }
    else{
        for (let index = 0; index < 64; index++) {
            console.log('Cell' + index);
            let createCell = document.createElement("div");
            grid.appendChild(createCell);
        };
    }
};