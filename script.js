let buttons = document.querySelectorAll('.btn');
let won = document.querySelector('.won');
let playAgainButton = document.querySelector('.play--again');
let activePlayer = 1;

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){

        if(activePlayer === 1){
            buttons[i].style.backgroundColor = 'red';
            buttons[i].textContent = 'X'
            buttons[i].value = '1';
            buttons[i].classList.add('disabled');
            activePlayer = 2;

            if(buttons[0].value === '1' && buttons[1].value === '1' && buttons[2].value === '1' || 
               buttons[3].value === '1' && buttons[4].value === '1' && buttons[5].value === '1' ||
               buttons[6].value === '1' && buttons[7].value === '1' && buttons[8].value === '1' ||
               buttons[0].value === '1' && buttons[3].value === '1' && buttons[6].value === '1' ||
               buttons[1].value === '1' && buttons[4].value === '1' && buttons[7].value === '1' ||
               buttons[2].value === '1' && buttons[5].value === '1' && buttons[8].value === '1' ||
               buttons[0].value === '1' && buttons[4].value === '1' && buttons[8].value === '1' ||
               buttons[6].value === '1' && buttons[7].value === '1' && buttons[8].value === '1' ||
               buttons[2].value === '1' && buttons[4].value === '1' && buttons[6].value === '1'){
                
                won.textContent = '🎉🎉Player X You Won🎉🎉';
                for(let color = 0; color < buttons.length; color++){
                    buttons[color].classList.add('disabled');
                }
            }

        } else {
            buttons[i].style.backgroundColor = '#ff8000';
            buttons[i].textContent = 'O'
            buttons[i].value = '2';
            buttons[i].classList.add('disabled');
            activePlayer = 1;

            if(buttons[0].value === '2' && buttons[1].value === '2' && buttons[2].value === '2' || 
               buttons[3].value === '2' && buttons[4].value === '2' && buttons[5].value === '2' ||
               buttons[6].value === '2' && buttons[7].value === '2' && buttons[8].value === '2' ||
               buttons[0].value === '2' && buttons[3].value === '2' && buttons[6].value === '2' ||
               buttons[1].value === '2' && buttons[4].value === '2' && buttons[7].value === '2' ||
               buttons[2].value === '2' && buttons[5].value === '2' && buttons[8].value === '2' ||
               buttons[0].value === '2' && buttons[4].value === '2' && buttons[8].value === '2' ||
               buttons[6].value === '2' && buttons[7].value === '2' && buttons[8].value === '2' ||
               buttons[2].value === '2' && buttons[4].value === '2' && buttons[6].value === '2'){
                
                won.textContent = '🎉🎉Player O You Won🎉🎉';
                for(let el = 0; el < buttons.length; el++){
                    buttons[el].classList.add('disabled');
                }
            }
        };
    });
    
    playAgainButton.addEventListener('click', function(){
        won.textContent = '';
                    for(let el = 0; el < buttons.length; el++){
                        buttons[el].classList.remove('disabled');
                        buttons[el].style.backgroundColor = '#9a9696';
                        buttons[i].textContent = '';
                        buttons[i].value = '0';
                    }
    })
};

