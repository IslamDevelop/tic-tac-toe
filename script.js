const o = document.querySelector('.o')
const x = document.querySelector('.x')
const fieldButton = document.querySelectorAll('.field')
const fieldParent = document.querySelectorAll('.field_parent')
const lib = document.querySelector('.field_parent')



let field = ['','','','','','','','','',]

const unfield = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
function player (choice) {
    this.choice = choice
}

const choiceO = 0

const choice = ''
const playerTwo = new player (choice);



let abs =  ''

o.addEventListener('click', () => {
    abs = 'x'
    start()
})
x.addEventListener('click', () => {
    abs = 'o'
    start()
})



   function start () {
       fieldParent.forEach(button => {
           button.addEventListener('click', cho)
       })

   }

function cho(event) {
    abs = abs == 'x' ? 'o' : 'x'
    const choiceX = abs;
    const playerOne = new player (choice);
    playerOne.choice = choiceX
    const index = parseInt(event.target.dataset.num)
    if(field[index] !== '') {
        return
    } else {
        event.target.textContent = `${abs}`
        field[index] = abs;
        
    }
    console.log(playerOne.choice)

   

console.log(field)
winorlose()
   
    }
     
    function winorlose () {
        for (let i = 0; i < unfield.length; i++) {
            const [a,b,c] = unfield[i]
            if (field[a] && field[a] === field[b] && field[a] === field[c]) {
                if(field[a] === 'o') {console.log('Выйграл нолик') } else {console.log('Выйграл крестик') }
               const line = document.createElement('h1');
                line.classList.add('line')
                line.textContent = '/';
                lib.append(line)
                restart()

        }
    }
    }
    function restart () {
        field = ['','','','','','','','','',]
        fieldButton.forEach(fieldButton => fieldButton.textContent = '')
        
    }

    console.log(field)
    console.log(unfield)



