const board         = document.getElementById('board')
const hasDuplicates = array => new Set(array).size < array.length
let   boardValue    = board.innerHTML = 'Choose your level first'
let   randomArray   = []
const easy          = 20
const midLevel      = 30
const hardlevel     = 60   

function drawBoard(iterator){
    const fieldBox = document.createElement('button')
    const buttonImage = document.createElement('img')  
    fieldBox.setAttribute('data-id', iterator)
    fieldBox.addEventListener('click', hasAnyMine)
    fieldBox.appendChild(buttonImage)
    board.appendChild(fieldBox)
}

function generateRandomMineArray(boardSize){  
    randomArray = [] 
    for(let i = 0; i < (Math.floor( boardSize / 8)); i++){
        const randomNumber = Math.floor(Math.random() * boardSize) + 1
        randomArray.push(randomNumber);
    }
        return randomArray
}

function drawGrid(dificulty, dimension){   
    
    board.innerHTML = ''  
    for(let i = 1; i < dificulty; i++){        
        drawBoard(i)        
    }   
   generateRandomMineArray(dificulty)   
}

function explodethemines(id){
    console.log("bum!", id, randomArray.sort((a, b) => a - b))
};

function hasAnyMine(){
    
    let boxId = this.getAttribute('data-id')

    if(!hasDuplicates(randomArray)){        
        for(let i = 0; i < randomArray.length; i++){         
            if (boxId == randomArray[i]){               
                this.style.backgroundColor ="red"
                this.style.backgroundImage = 'url("./img/bomb.png")';
                explodethemines(boxId);                
            }       
        }
    } 
}



