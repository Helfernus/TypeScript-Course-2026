function getLength(val: any[]): number;
function getLength(val: string): string;
function getLength(val: string | any[]) {

  if (typeof val === 'string') {
    const numberOfWords = val.split(' ').length;
    return `${numberOfWords} Words`;
  }
  else {
    return val.length;
  }
}

const numOfWords = getLength('Does this work?');
numOfWords.length;
const numItems = getLength(['Sports', 'Cookies']);

// const numOfWords = getLength('Does this work?') as String;

console.log('Number of Words: ', numOfWords);
console.log('Number of Items: ', numItems);
