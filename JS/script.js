/*Creating a grid 8x8 */
    const blackPieces = [
        'Rook-B', 'Knight-B', 'Bishop-B', 'Queen-B', 'King-B', 'Bishop-B', 'Knight-B', 'Rook-B','Pawn-B', 'Pawn-B', 'Pawn-B', 'Pawn-B', 'Pawn-B', 'Pawn-B', 'Pawn-B', 'Pawn-B'              
    ];
    const whitePieces = [
        'Pawn-W', 'Pawn-W', 'Pawn-W', 'Pawn-W', 'Pawn-W', 'Pawn-W', 'Pawn-W', 'Pawn-W','Rook-W', 'Knight-W', 'Bishop-W', 'Queen-W', 'King-W', 'Bishop-W', 'Knight-W', 'Rook-W'     
    ];

const start = document.getElementById("start").addEventListener("click", createGrid);
const grid = document.getElementsByTagName("section")[0];
let draggedElement = null;

function createGrid (){
    if(grid.hasChildNodes()){
        alert('La partita é gia stata avviata');
    }
    else{
        for (let index = 0; index < 32; index++) {
            console.log('Cell' + index);
            let createCell = document.createElement("div");
            grid.appendChild(createCell);
            createCell.addEventListener("dragover", dragOver);
            createCell.addEventListener("dragenter", dragEnter);
            createCell.addEventListener("dragleave", dragLeave);
            createCell.addEventListener("drop", dragDrop);
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
                img.draggable = true;
                createCell.appendChild(img);
                // createCell.addEventListener("drag", dragging)
                createCell.addEventListener("dragstart", dragStart)
                createCell.addEventListener("dragend", dragEnd);
            };
            if(index > 16){
                let img = document.createElement("img");
                img.src = " ";
                img.alt = " ";
                img.draggable = true;
                createCell.appendChild(img);
                // createCell.addEventListener("drag", dragging)
                createCell.addEventListener("dragstart", dragStart)
                createCell.addEventListener("dragend", dragEnd);
            };
        };
        function dragStart(event) {
            draggedElement = event.target;
        };
        // function dragging(event) {
        //     console.log(event)
        // };
        function dragOver(event) {
            event.preventDefault();
        };   
        function dragDrop(event) {
            event.preventDefault();
            if (event.target.tagName === "IMG") {
                event.target.parentNode.replaceChild(draggedElement, event.target);
            } else {
                event.target.appendChild(draggedElement);
            }
        };
        function dragEnter(event) {
            console.log(event)
        };
        function dragLeave(event) {
            console.log(event)
        }; 
        function dragEnd(event) {
            console.log(event)
            draggedElement = null;
        };     
        for (let index = 0; index < 32; index++) {
            console.log('Cell' + index);
            let createCell = document.createElement("div");
            grid.appendChild(createCell);
            createCell.addEventListener("dragover", dragOver);
            createCell.addEventListener("dragenter", dragEnter);
            createCell.addEventListener("dragleave", dragLeave);
            createCell.addEventListener("drop", dragDrop);
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
                // createCell.addEventListener("drag", dragging)
                createCell.addEventListener("dragstart", dragStart)
                createCell.addEventListener("dragend", dragEnd);
            };
            if(index < 16){
                let img = document.createElement("img");
                img.src = " ";
                img.alt = " ";
                img.draggable = true;
                createCell.appendChild(img);
                // createCell.addEventListener("drag", dragging)
                createCell.addEventListener("dragstart", dragStart)
                createCell.addEventListener("dragend", dragEnd);
            };
        };
    };
};