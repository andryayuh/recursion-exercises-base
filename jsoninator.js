const _ = require('underscore'); // the real one! :)

// This is what you would do if you liked things to be easy:
// const stringify = JSON.stringify;
// But you don't. So you're going to write it from scratch...



const stringify = function(obj) {
  let arrayInput = [];
  let vals = [];
  let keys = [];
  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return '' + obj;
  } else if (typeof obj === 'string') {
      return '"' + obj + '"';
  } else if (Array.isArray(obj)) {
      if (obj.length === 0) {
        return '[]';
      } else {
          _.each(obj, el => arrayInput.push(stringify(el)));
          return '[' + arrayInput + ']';
      }
    } else if (typeof obj === 'object') {
        keys = Object.keys(obj);
        _.each(keys, key => {
          var keyString = '"' + key + '":';
          var valString = obj[key];
          if (typeof valString === 'string') {
            vals.push(keyString + '"' + valString + '"');
          } else if (typeof valString === 'object'){
              vals.push(keyString + stringify(valString));
          }
        });
        return '{' + vals + '}';
    }   
};

module.exports = {
  stringify: stringify
};