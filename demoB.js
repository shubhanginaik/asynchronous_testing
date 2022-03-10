'use strict';

const search = require('./carstorageCallback');

search(console.log);
console.log('One');
search(console.log,'model','Nova');
console.log('Two');
search(data=>console.log(data),'licence','ABC-1');
console.log('Three');
search(printDta,'model','Nova');

function printDta(data){
    console.log('###############');
    console.log(data);
    console.log('###############')
}