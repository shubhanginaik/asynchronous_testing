# Carstorage API

## cars.json
```json
[
    {"model":"Bored T-model", "licence":"ABC-1"},
    {"model":"Nova", "licence":"XYZ-123"},
    {"model":"Bored T-model", "licence":"GFT-10"},
    {"model":"XGT", "licence":"B-1"}
]
```

## **search(key,value)**

function returns an array of car objects matching the given criterion. If no match, empty array is returned. If parameters are missing, returns all cars in an array.

parameters:
key: `'model'` or `'licence'`
value: value to be search

## example
```js
search('model','Nova')
```