"use strict";

const fs = require("fs");
const storageFile = "./cars.json";

//cbf  is callback function
module.exports = (key, value,cbf) => {
  if(typeof cbf !== 'function'){
    throw new Error('callback function is missing)');
  }
  fs.readFile(storageFile, "utf8", (err, data) => {
    if (err) {
      cbf(err)
    }
    else{
      const cars=JSON.parse(data);
      let found = [];
      if (key && value) {
        for (let car of cars) {
          if (car[key] === value) {
            found.push(car);
          }
        }
      } else {
        found = cars;
      }
       cbf(found);
    }
  });
};
