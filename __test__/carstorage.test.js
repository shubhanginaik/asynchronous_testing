'use strict';


const search = require('../carstorageCallbackLast');

describe('testing callback',()=>{
    test('search with licence ABC-1',done=>{
        function cb(data){
            try{
                expect(data).toEqual([{"model":"Bored T-model", "licence":"ABC-1"}])
                done();
            }catch(err){
                done(err);
            }
        }
        search('licence','ABC-1',cb);
    });
});

describe('testing the missing callback',()=>{
    test('callback missing',()=>{
        expect(()=> search('licence','ABC-1'))
        .toThrow('callback function is missing')
    });
});

describe('test callback with testEach',()=>{
    const testValues = [
        ['licence','XYZ',[]],
        ['model','Bored T-model',[
            {"model":"Bored T-model", "licence":"ABC-1"},
            {"model":"Bored T-model", "licence":"GFT-10"}
        ]],
        ['licence','B-1',[{"model":"XGT", "licence":"B-1"}]]
    ];
    
    test.each(testValues)('%s, %s',(key,value,expected,done)=>{
        function cb(data){
            try{
                expect(data).toEqual(expected);
                done();
            }catch(err){
                done(err)
            }
        } // cb ends here
        search(key,value,cb);
    });
});