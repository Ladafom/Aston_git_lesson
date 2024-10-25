//string
let str1 = 'string with single quotes'
let str2 = "string with double quotes"
let strHelper = 3
let str3 = `i use backtick character ${'!'.repeat(strHelper)}`
let str4 = new String(true)
let str5 = strHelper + 'three'

//number
let num1 = 1.23
let num2 = Number('Infinity')
let num3 = new Number(45)
let numHelper = '4'
let num4 = +numHelper
let num5 = numHelper - 2

//boolean
let bool1 = true
let bool2 = Boolean(null)
let bool3 = !!str1

//null
let n1 = null
const n2 = null

//undefined
let und1
let und2 = undefined

//symbol
let sym1 = Symbol('foo');
const sym2 = Symbol('bar');

// bigInt
let bnum1 = 9007199254740991n
let bnum2 = BigInt(9007199254740991)

//----------------------------------------

const res = "B" + "a" + (1 - "hello");
// BaNaN

const res2 = (true && 3) + "d";
// 3d

const res3 = Boolean(true && 3) + "d";
// trued