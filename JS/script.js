/*Creating a grid 8x8 */
    const blackPieces = [
        'Rook-B', 'Knight-B', 'Bishop-B', 'Queen-B', 'King-B', 'Bishop-B', 'Knight-B', 'Rook-B','Pawn-B', 'Pawn-B', 'Pawn-B', 'Pawn-B', 'Pawn-B', 'Pawn-B', 'Pawn-B', 'Pawn-B'              
    ];
    const whitePieces = [
        'Pawn-W', 'Pawn-W', 'Pawn-W', 'Pawn-W', 'Pawn-W', 'Pawn-W', 'Pawn-W', 'Pawn-W','Rook-W', 'Knight-W', 'Bishop-W', 'Queen-W', 'King-W', 'Bishop-W', 'Knight-W', 'Rook-W'     
    ];

const start = document.getElementById("start").addEventListener("click", createGrid);
const grid = document.getElementsByTagName("section")[0];

function createGrid (){
    if(grid.hasChildNodes()){
        alert('La partita é gia stata avviata');
    }
    else{
        for (let index = 0; index < 32; index++) {
            console.log('Cell' + index);
            let createCell = document.createElement("div");
            grid.appendChild(createCell);
            if(index < 8 && index % 2 === 0){
                createCell.classList.add("green")
            }
            else if(index < 8 && index % 2 !== 0){
                createCell.classList.add("brown")
            }
            else if(index < 16 && (index + 1) % 2 === 0){
                createCell.classList.add("green")
            }
            else if(index < 16 && (index + 1) % 2 !== 0){
                createCell.classList.add("brown")
            }
            else if(index < 24 && index % 2 === 0){
                createCell.classList.add("green")
            }
            else if(index < 24 && index % 2 !== 0){
                createCell.classList.add("brown")
            }
            else if(index < 32 && (index + 1) % 2 === 0){
                createCell.classList.add("green")
            }
            else if(index < 32 && (index + 1) % 2 !== 0){
                createCell.classList.add("brown")
            };
            if(index < 16){
                let img = document.createElement("img");
                img.src = "img/" + blackPieces[index] + ".png";
                img.alt = blackPieces[index];
                createCell.appendChild(img);
            };
        };
        for (let index = 0; index < 32; index++) {
            console.log('Cell' + index);
            let createCell = document.createElement("div");
            grid.appendChild(createCell);
            if(index < 8 && index % 2 === 0){
                createCell.classList.add("green")
            }
            else if(index < 8 && index % 2 !== 0){
                createCell.classList.add("brown")
            }
            else if(index < 16 && (index + 1) % 2 === 0){
                createCell.classList.add("green")
            }
            else if(index < 16 && (index + 1) % 2 !== 0){
                createCell.classList.add("brown")
            }
            else if(index < 24 && index % 2 === 0){
                createCell.classList.add("green")
            }
            else if(index < 24 && index % 2 !== 0){
                createCell.classList.add("brown")
            }
            else if(index < 32 && (index + 1) % 2 === 0){
                createCell.classList.add("green")
            }
            else if(index < 32 && (index + 1) % 2 !== 0){
                createCell.classList.add("brown")
            };
            if(index > 15){
                let img = document.createElement("img");
                img.src = "img/" + whitePieces[index - 16] + ".png";
                img.alt = whitePieces[index - 16];
                createCell.appendChild(img);
            };
        };
    };
};