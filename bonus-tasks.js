//task1

const obj1 = {
  here: {
    is:"on",
    other: "3"
  },
  object: "Y"
};

const obj2 = {
  here: {
    is:"on",
    other: "2"
  },
  object: "Y"
};

const deepEqual = (obj1, obj2) => {

  const objKeys1 = Object.keys(obj1);
  const objKeys2 = Object.keys(obj2);

  if (objKeys1.length !== objKeys2.length) return false;

  for (key of objKeys1) {
    const value1 = obj1[key];
    const value2 = obj2[key];

    const isObjects = typeof value1 === 'object' && typeof value2 === 'object';

    if ((isObjects && !deepEqual(value1, value2)) ||(!isObjects && value1 !== value2)) {
      return false;
    }
  }
  return true;
};

console.log(deepEqual(obj1,obj2))

//task2

const str = 'hello'
function reverseStr(str) {
  return Array.from(str).reverse().join('')
}

console.log(reverseStr(str))