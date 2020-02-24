
randy = (min, max) => {
    let rand = Math.floor((Math.random()*(max - min)) + min);
    return rand;
};

let hiddenNum = randy(1,100);

const inquirer = require('inquirer');

let questions = [
    {
    type: 'input',
    name: 'guess',
    message: "Guess the number"
    }
]

let tries = 1;

ask = () =>{
    inquirer.prompt(questions)
        .then(answer => {
            console.log(answer);
            if(tries === 5){
                console.log('loss');
                return;
            }
            if (answer !=== 9){
                ask();
                tries++;
            }
        })
}

// while (tries < 4) {
//     ask();
//     tries++;
// }

ask();