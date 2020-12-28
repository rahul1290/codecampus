var utils = require('./utils.js');
var _ = require('lodash');
const fs = require('fs');

const yargs = require('yargs');
const { argv } = require('process');
/*  
//SimpleIntrest
console.log(utils.simpleIntrest(500000,10,5));
//Array unique
console.log('Array qnique '+_.union([2], [1, 2]));
//Array chunck
console.log('DifferenceBy '+_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));
//Array compact
console.log('Array Compact '+ _.compact([0, 1, false, 2, '', 3]));
//Array concat
var array1 = [1];
var array2 = _.concat(array1, 2, [3], [[4]]);
console.log(array2);


//File system

fs.writeFileSync('hello.txt','My name is rahul sinha',{
  encoding:'utf8',
  flag:'a+',
  mode:0o66
});
*/

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
      title: {
          description: 'Note Title',
          demandOption: true,
          type: 'string'
      },
      body: {
          description: 'Note Body',
          demandOption: true,
          type: 'string'
      }
  },
  handler: function(argv) {
      const noteData = {
          title: argv.title,
          body: argv.body
      }
      console.log('noteData', noteData);
  }
})


    

 