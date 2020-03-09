const quoteCards = [
    "This class is awesome",
    "Come to Shabbat 200"
];

//commonJS way of doing modules
//this is a "default export" b/c just setting equal to var
//could also have module.exports.something which would return an object that has a property of quoteCards
module.exports = quoteCards;