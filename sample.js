function makeId(length) {
    if(typeof length == 'undefined')
        length = 10;
    
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

function helloWorld() {
    return JSON.stringify(
        [
            { 'message': 'Hello World' },
            { 'message': 'How are you?' },
            { 'message': 'And you?' },
            { 'message': 'I am good?' },
            { 'message': 'Where are you?' },
            { 'message': 'Chennai?' }
        ]);
}

function generateNumbers() {
    return JSON.stringify(
        [
            { 'random_number': Math.random(), 'message': 'How are you?' },
            { 'random_number': Math.random(), 'message': 'I am good.' },
            { 'random_number': Math.random(), 'message': 'How about you?' },
            { 'random_number': Math.random(), 'message': makeId(10) },
            { 'random_number': Math.random(), 'message': makeId(5) },
            { 'random_number': Math.random(), 'message': makeId(20) },
            { 'random_number': Math.random(), 'message': makeId(3) },
            { 'random_number': Math.random(), 'message': makeId(25) },
            { 'random_number': Math.random(), 'message': makeId(30) }
        ]);
}
