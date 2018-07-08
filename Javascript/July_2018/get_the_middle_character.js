function getMiddle(s) {
    return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 ? 1 : 2);
}

// Tests

console.log(getMiddle('javascript')); // expected: 'sc'
console.log(getMiddle('python')); // expected: 'th'
console.log(getMiddle('final')); // expected: 'n'
console.log(getMiddle('pavillion')); // expected: 'l'
console.log(getMiddle('middle')); // expected: 'dd'

/* Disclaimer:
    
    Prior to making this repo, I had solved this challenge previously.

    The solution above was the top voted solution on Code Wars, and I wanted to 
    work with .substr() myself for practice.

    I can't remember my previous solution, but it was not as elegant.
*/