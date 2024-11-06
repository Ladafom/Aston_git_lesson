// task 2

function logger() {
  console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };


let boundLogger = logger.bind(obj)
boundLogger()

logger.call(obj)
logger.apply(obj)

// task3
// array

const arr1 = [1, 13, -4, 10, 7, 0]
const sum = arr1.reduce((acc,current) => acc+current)
// console.log(sum)

const arr2 = ['Hello', ',', 'world', '!']
const superStr = arr2.join('')
// console.log(typeof superStr)

function findMinMax(arr) {

  let max = arr[0];
  let min = arr[0];

  for (number in arr) {
    if (arr[number] > max) {
      max = arr[number];
    }
    if (arr[number] < min) {
      min = arr[number];
    }
  }

  console.log(`max: ${max},`, `min:${min}`)
}

// findMinMax(arr1)

//stack

class Stack {

  constructor(stack) { this.value = stack || [] }
  pop(){
    return this.value.pop()
  }
  push(elem){
    return this.value.push(elem)
  }
}

//queue

class Queue {
  constructor(queue) { this.value = queue || [] }
  enqueue(item) {
    this.value.push(item)
  }
  dequeue() {
    return this.value.shift()
  }
}

const q = new Queue([1,2,3])

q.dequeue()
console.log('Обслужили первого покупателя', q.value)
q.enqueue(4)
console.log('Пришел еще один покупатель', q.value)
q.enqueue(5)
console.log('Пришел еще один покупатель', q.value)
q.dequeue()
console.log('Обслужили второго покупателя', q.value)
