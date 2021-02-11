let fields = [];
let currentShape = 'cross';


function fillShape(id) {
    if(!fields[id]) {
        if(currentShape == 'cross') {
            currentShape = 'circle';
            document.querySelector('#player-1').classList.add('player-inactive');
            document.querySelector('#player-2').classList.remove('player-inactive');
        } else {
            currentShape = 'cross';
            document.querySelector('#player-1').classList.remove('player-inactive');
            document.querySelector('#player-2').classList.add('player-inactive');
        }
        fields[id] = currentShape;
        console.log(fields);
        draw();
        checkForWin();
    }
}

function draw() {
    for(let i = 0; i < fields.length; i++) {
        if(fields[i] == 'circle') {
            document.querySelector('#circle-' + i).classList.remove('d-none');
        }
        if(fields[i] == 'cross') {
            document.querySelector('#cross-' + i).classList.remove('d-none');
        }
    }
}

function checkForWin() {
    let winner;
    if(fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.querySelector('#line-0').style.transform = 'scaleX(1)';
    } 
    if(fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.querySelector('#line-1').style.transform = 'scaleX(1)';
    } 
    if(fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.querySelector('#line-2').style.transform = 'scaleX(1)';
    } 
    if(fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.querySelector('#line-3').style.transform = 'rotate(90deg) scaleX(1)';
    } 
    if(fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.querySelector('#line-4').style.transform = 'rotate(90deg) scaleX(1)';
    } 
    if(fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.querySelector('#line-5').style.transform = 'rotate(90deg) scaleX(1)';
    } 
    if(fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.querySelector('#line-6').style.transform = 'rotate(45deg) scaleX(1)';
    } 
    if(fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.querySelector('#line-7').style.transform = 'rotate(-45deg) scaleX(1)';
    }
    if(winner) {
        console.log(winner + 'is the winner!');
    } 
}
