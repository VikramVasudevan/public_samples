function helloWorld() {
    return JSON.stringify(
        [
            { 'message': 'Hello World' },
            { 'message': 'How are you?' }
        ]);
}

function generateNumbers() {
    return JSON.stringify(
        [
            { 'random_number': Math.random(), 'message': 'How are you?' },
            { 'random_number': Math.random(), 'message': 'I am good.' }
        ]);
}
