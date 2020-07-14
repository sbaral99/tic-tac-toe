//restart game button
var restart = document.querySelector('#b');


//grab all the square
var squares = document.querySelectorAll('td');


//clear all the square
function clearBoard(){
    for(var i = 0; i < squares.length; i++ ){
        squares[i].textContent = '';
    }
}
restart.addEventListener('click',clearBoard);


//check the square marker
function changeMarker(){
    if(this.textContent === ''){
        this.textContent = 'X';
    }else if(this.textContent === 'X'){
        this.textContent = 'O';
    }else{
        this.textContent = '';
    }
}

//for loop to add event Listener to all the square
for( var i =0; i < squares.length; i++){
    squares[i].addEventListener('click',changeMarker)
}



