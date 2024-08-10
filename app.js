var result = document.querySelector('#result');
var image = document.querySelector('#image');

function toss(choice){
    var tossResult = Math.ceil(Math.random()*2);
    if(tossResult === 1 && choice === 'head'){
        result.innerHTML = 'You won the toss';
        image.src ='./assets/head.jpg';
    }
    else if(tossResult === 2 && choice === 'tail'){
        result.innerHTML = 'You won the toss';
        image.src ='./assets/tail.jpg';
    }
    else if(tossResult === 1 && choice === 'tail'){
        result.innerHTML = 'You lost the toss';
        image.src = './assets/head.jpg';
    }
    else if(tossResult === 2 && choice === 'head'){
        result.innerHTML = 'You lost the toss';
        image.src = './assets/tail.jpg';
    }
}