function writeCards(recipients, msg) {
    const emptyArray = [];
    for(let i = 0; i < recipients.length; i++) {
        emptyArray.push(`Thank you, ${recipients[i]}, for the wonderful ${msg} gift!`);
    }
    return emptyArray
}

function countDown(int) {
    while (int <= 11 && int >= 0) {
        console.log(int--)
    }  
}