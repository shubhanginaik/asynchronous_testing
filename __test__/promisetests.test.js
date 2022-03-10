'use strict';
const search = require('../carstoragePromiseVersion2');

describe('Testing with key licence to resolve', ()=>{
    const expected=[
        {"model":"Bored T-model", "licence":"ABC-1"}
    ];
    test('then',()=>{
        return search('licence','ABC-1')
        .then(data=>expect(data).toEqual(expected))
    });

    test('async-await',async()=>{
        const data = await search('licence','ABC-1');
        expect(data).toEqual(expected)
    });

    test('resolves',()=>{
        return expect(search('licence','ABC-1'))
        .resolves.toEqual(expected);
    });

    test('resolves async',async()=>{
        await expect(search('licence','ABC-1'))
        .resolves.toEqual(expected);
    });
});

describe('testing with key licence to reject', ()=>{
    test('catch', ()=>{
        return search().catch(data=>
            expect(data).toBe('parameter is missing'))
    });

    test('async-await',async()=>{
        try{
            await search();
        }
        catch(error){
        expect(error).toBe('parameter is missing')
        }
    });

    test('rejects',()=>{
        return expect(search()).rejects.toBe('parameter is missing');
    });

    test('rejects with async-await',async()=>{
        await expect(search()).rejects.toBe('parameter is missing')
    })
});

describe('testing models',()=>{
    test('search model "Bored T-model"',()=>{
        return expect(search('model',"Bored T-model")).resolves.toEqual([
            {"model":"Bored T-model", "licence":"ABC-1"},
            {"model":"Bored T-model", "licence":"GFT-10"}
        ]);
    })

    test('parameter is missing',()=>{
        return expect(search('model')).rejects.toBe('parameter is missing');
    })
})

//npm test --testFile promisetests.test.js