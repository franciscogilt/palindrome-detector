let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a friendly url
// Kansas -> kansas
// North Dakota -> north-dakota
function urlify(string){
    return string.toLowerCase().split(/\s+/).join("-");
}

// urls: Imperative version
function imperativeUrls(elements){
    let urls = [];

    elements.forEach(element => {
        urls.push(urlify(element));
    });

    return urls;
}

// urls: Functional version
function functionalUrls(elements){
    return elements.map(element => urlify(element));
}

// singles: Imperative version
function imperativeSingles(elements){
    let singles = [];

    elements.forEach(element => {
        if(element.split(/\s+/).length === 1){
            singles.push(element);
        }
    });

    return singles;
}

// singles: Functional version
function functionalSingles(elements){
    return elements.filter(element => element.split(/\s+/).length === 1);
}

//Reduce
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//sum: imperative version
function imperativeSum(elements){
    let total = 0;
    elements.forEach(n => total += n);
    return total;
}

//sum: functional version
function functionalSum(elements){
return elements.reduce((total, n) => total += n);
}

// lengths: imperative version
function imperativeLengths(elements){
    let lengths = {};
    elements.forEach(element => {
        lengths[element] = element.length;
    });
    return lengths;
}

// lengths: functional version
function functionalLengths(elements){
    return elements.reduce((lengths, element) => {
        lengths[element] = element.length;
        return lengths;
    }, {});
}

console.log(functionalLengths(states));