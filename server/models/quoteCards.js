const quoteCards = [
    'It\'s a trap!',
    'Soooon'
];

function add(text){
    quoteCards.push(text);
}

//commonJS way of doing modules
//this is a "default export" b/c just setting equal to var
//could also have module.exports.something which would return an object that has a property of quoteCards
module.exports = {
    list: quoteCards,
    add: add
};

