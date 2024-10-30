// task 1
// creating object
const counter = { // by literal
  count:0,
  increase(){
  	this.count += 1
  },
  nesting: {
    someKey: 'someValue'
  },
  arr: [{a:'a'},{b:'b'}]
}

const counter1 = Object.create(counter,{ // by Object.create method
  decrease:{
    value: function(){
      this.count -=1
    },
    writable: true,
    enumerable: true,
    configurable: true
  }
})

const counter2 = Object.assign(counter1,counter) // by Object.assign method

function counterConsructor(count){
  this.count = count
  this.increase = function(){
    this.count += 2
  }
}

const counter3 = new counterConsructor(0) // by operator new

//task 2
// copying object

// shallow
const copy1Counter = {...counter} // common references to ojects and array attributes
const copy2Counter = Object.assign({},counter) // common references to ojects and array attributes

// deep
const copy3Counter = JSON.parse(JSON.stringify(counter)) // no methods :(

// const copy4Counter = structuredClone(counter) // Error because counter object contains function

const Lodash = require('lodash')
const copy5Counter = Lodash.cloneDeep(counter)

function deepCloneObj(obj){ // manual copying function

  let newObj = {}
  const objValues = Object.values(obj)
  const objKeys = Object.keys(obj)

  for(item in objValues) {

    if(Array.isArray(objValues[item])){
      newObj[objKeys[item]] = [...objValues[item]]

    } else if(typeof objValues[item]==='object'){
      newObj[objKeys[item]] = deepCloneObj(objValues[item])

    } else {
      newObj[objKeys[item]] = objValues[item]
    }
  }

  return newObj
}

const newObj = deepCloneObj(counter)


//task3
function makeCounter1(){
}

let makeCounter2 = function(){
}

let makeCounter = function makeCounter3(){

}

let makeCounter4 = () => {}

let makeCounter5 = new Function('argument1','argument2', 'console.log(argument1 , argument2)')
