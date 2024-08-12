function test () {
    if(field.length >= 3) {
    if(field[0] === field[1] && field[1] === field[2] ||
       field[0] === field[3] && field[3] === field[6] ||
       field[3] === field[4] && field[4] === field[5] ||
       field[6] === field[7] && field[7] === field[8] ||
       field[1] === field[4] && field[4] === field[7] ||
       field[2] === field[5] && field[5] === field[8] ||
       field[0] === field[4] && field[4] === field[8] ||
       field[2] === field[4] && field[4] === field[6]
    ) {
        console.log('epta')
    } } 
}
[1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]

    function winorlose () {
        for (let i = 0; i < unfield.length; i++) {
            const [a,b,c] = unfield[i]
            if (field[a] && field[a] === field[b] && field[a] === field[c]) {
                console.log('Win');
        }
    }
    }