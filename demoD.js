'use strict';

const search = require('./carstoragePromise');

//search().then(console.log).catch(console.log);

(async ()=>{
    try{
        console.log(await search());
        console.log('one');
        console.log(await search('model','Nova'));
        console.log('two');
        console.log(await search('licence','ABC-1'));
        console.log('three');
    }catch(err){
        console.log(err.message);
    }
})();