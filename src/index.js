module.exports = function toReadable (number) {
 const numbers = [
   [{'0': 'zero', '1': 'one', '2': 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'}],
   [{10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety'}], 
   [{ 100: 'hundred'}],
   [{ 1000: 'thousand'}]
 ];
 
 let numLength = number.toString().length;
 let value = '';
 let ty = '';
 let tenObj = numbers[0][0];
 let tyObj = numbers[1][0];
 let tyNum = number.toString().split('').slice(1,3).join('');

 for (i = 0; i < numLength; i++) {
  if (numLength === 3) {
    let hundred = tenObj[number.toString()[0]] + ' hundred'; 
    if (tyObj[tyNum]) {
      ty = ' '+ tyObj[tyNum]
    } else if (number.toString()[1] === '0') {
      if (number.toString()[2] === '0') {
        ty = '';
      } else {
        ty = ' ' + tenObj[number.toString()[2]]
      }
    } else {
      ty = ' ' + tyObj[number.toString()[1] + '0'] + ' ' + tenObj[number.toString()[2]];
    }
    value = hundred + ty;
  } 
  else if (numLength === 2) {
   if (tyObj[number.toString()]) {
     ty = tyObj[number.toString()]
   } else {
      ty = tyObj[number.toString()[0] + '0'] + ' ' + tenObj[number.toString()[1]]
   }
   value = ty;
  }
  else {
    value = tenObj[number.toString()]
  }
 }
 return value
}
